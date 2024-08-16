import { clamp } from "lodash-es";

import { type ApiClientError, type ApiClientErrorJson } from "~/api";

export type ServerSidePaginationParams = {
  readonly page: number;
  readonly pageSize: number;
  readonly count: number;
};

export const clampPagination = (params: ServerSidePaginationParams) => {
  const count = clamp(params.count, 0, Infinity);
  const pageSize = clamp(params.pageSize, 1, Infinity);
  const page = clamp(params.page, 1, clamp(Math.ceil(params.count / pageSize), 1, Infinity));
  return { page, pageSize, count };
};

export type FetchActionScope = "api" | "action";

export type FetchActionContext = {
  readonly scope?: FetchActionScope;
  readonly strict?: boolean;
};

export type FetchActionContextError<C extends FetchActionContext> = C extends { scope: "api" }
  ? ApiClientError
  : ApiClientErrorJson;

export type FetchActionResponseOrError<T, C extends FetchActionContext> =
  | { data: T; error?: never }
  | { data?: never; error: FetchActionContextError<C> };

export type FetchActionResponse<T, C extends FetchActionContext> = C extends {
  strict: true;
}
  ? { data: T; error?: never }
  : FetchActionResponseOrError<T, C>;

export type MutationActionResponse<T> =
  | { data: T; error?: never }
  | { data?: never; error: ApiClientErrorJson };

export const errorInFetchContext = <C extends FetchActionContext>(
  error: ApiClientError,
  context: C,
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
): FetchActionResponse<any, C> => {
  if (context.strict) {
    throw error;
  } else if (context.scope === "api") {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    return { error } as FetchActionResponse<any, C>;
  }
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  return { error: error.json } as FetchActionResponse<any, C>;
};

export const dataInFetchContext = <T, C extends FetchActionContext>(
  data: T,
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  context: C,
): FetchActionResponse<T, C> => ({ data }) as FetchActionResponse<T, C>;
