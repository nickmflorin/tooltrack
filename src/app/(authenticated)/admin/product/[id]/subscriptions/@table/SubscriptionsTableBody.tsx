import dynamic from "next/dynamic";

import { type SubscriptionsControls } from "~/actions";
import { fetchProductSubscriptions } from "~/actions/subscriptions/fetch-product-subscriptions";

import { Loading } from "~/components/loading/Loading";

const ProductSubscriptionsAdminTableBody = dynamic(
  () =>
    import("~/features/products/components/tables/ProductSubscriptionsAdminTableBody").then(
      mod => mod.ProductSubscriptionsTableBody,
    ),
  { loading: () => <Loading isLoading component="tbody" /> },
);

export interface SubscriptionsTableBodyProps {
  readonly productId: string;
  readonly filters: Omit<SubscriptionsControls["filters"], "products">;
  readonly page: number;
  readonly ordering: SubscriptionsControls["ordering"];
}

export const SubscriptionsTableBody = async ({
  ordering,
  productId,
  filters,
  page,
}: SubscriptionsTableBodyProps): Promise<JSX.Element> => {
  const { data } = await fetchProductSubscriptions(
    {
      ordering,
      filters: { ...filters, products: [productId] },
      includes: ["conditions", "user", "notificationsCount"],
      visibility: "admin",
      page,
    },
    { strict: true },
  );
  return <ProductSubscriptionsAdminTableBody data={data} />;
};
