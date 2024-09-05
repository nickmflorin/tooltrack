import dynamic from "next/dynamic";
import { type ReactNode } from "react";

import { Loading } from "~/components/loading/Loading";

const SubscriptionsAdminTableView = dynamic(
  () => import("~/features/subscriptions/components/tables/SubscriptionsAdminTableView"),
  { loading: () => <Loading isLoading /> },
);

interface UserSubscriptionsLayoutProps {
  readonly children: ReactNode;
}

export default function UserSubscriptionsLayout({ children }: UserSubscriptionsLayoutProps) {
  return (
    <SubscriptionsAdminTableView
      className="overflow-y-hidden"
      controlBarTargetId="user-subscriptions-control-bar"
      excludeColumns={["product"]}
    >
      {children}
    </SubscriptionsAdminTableView>
  );
}
