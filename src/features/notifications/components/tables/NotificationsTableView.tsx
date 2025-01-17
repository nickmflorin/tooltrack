"use client";
import type { ReactNode } from "react";

import { ProductNotificationsDefaultOrdering } from "~/actions";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { TableView } from "~/components/tables/TableView";
import {
  ProductNotificationsTableColumns,
  type ProductNotificationsTableOrderableColumnId,
  type ProductNotificationsTableColumnId,
} from "~/features/notifications/types";
import { useOrdering } from "~/hooks/use-ordering";

export interface NotificationsTableViewProps {
  readonly children: ReactNode;
  readonly filterBar?: JSX.Element;
  readonly pagination?: JSX.Element;
  readonly excludeColumns?: ProductNotificationsTableColumnId[];
}

export const NotificationsTableView = ({
  children,
  filterBar,
  pagination,
  excludeColumns,
}: NotificationsTableViewProps) => {
  const [ordering, setOrdering] = useOrdering<ProductNotificationsTableOrderableColumnId>({
    useQueryParams: true,
    fields: ProductNotificationsTableColumns.orderableColumns.map(c => c.id),
    defaultOrdering: ProductNotificationsDefaultOrdering,
  });
  return (
    <TableView header={filterBar} footer={pagination}>
      <DataTableWrapper
        columns={ProductNotificationsTableColumns.columns}
        excludeColumns={excludeColumns}
        ordering={ordering}
        onSort={(e, col) => {
          const id = col.id;
          if (ProductNotificationsTableColumns.isOrderableColumnId(id)) {
            setOrdering({ field: id });
          }
        }}
      >
        {children}
      </DataTableWrapper>
    </TableView>
  );
};

export default NotificationsTableView;
