"use client";
import { ProductsDefaultOrdering } from "~/actions";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { TableView } from "~/components/tables/TableView";
import {
  OrderableProductsTableColumnIds,
  ProductsTableColumns,
  type OrderableProductsTableColumnId,
  type ProductsTableColumnId,
} from "~/features/products/types";
import { useOrdering } from "~/hooks/use-ordering";

export interface ProductsTableViewProps {
  readonly children: JSX.Element;
  readonly filterBar?: JSX.Element;
  readonly pagination?: JSX.Element;
  readonly excludeColumns?: ProductsTableColumnId[];
}

export const ProductsTableView = ({
  children,
  filterBar,
  pagination,
  excludeColumns,
}: ProductsTableViewProps) => {
  const [ordering, setOrdering] = useOrdering<OrderableProductsTableColumnId>({
    useQueryParams: true,
    fields: OrderableProductsTableColumnIds,
    defaultOrdering: ProductsDefaultOrdering,
  });
  return (
    <TableView header={filterBar} footer={pagination}>
      <DataTableWrapper
        rowsHaveActions
        excludeColumns={excludeColumns}
        columns={ProductsTableColumns}
        ordering={ordering}
        onSort={(e, col) => {
          if (OrderableProductsTableColumnIds.includes(col.id as OrderableProductsTableColumnId)) {
            setOrdering({ field: col.id as OrderableProductsTableColumnId });
          }
        }}
      >
        {children}
      </DataTableWrapper>
    </TableView>
  );
};

export default ProductsTableView;
