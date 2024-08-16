import type { ApiStatusChangeSubscription } from "~/database/model";

import { isUuid } from "~/lib/typeguards";

import { useSWR, type SWRConfig } from "./use-swr";

export const useStatusChangeSubscription = (
  id: string | null,
  config: SWRConfig<ApiStatusChangeSubscription>,
) =>
  useSWR<ApiStatusChangeSubscription>(
    isUuid(id) ? `/api/status-change-subscriptions/${id}` : null,
    config,
  );