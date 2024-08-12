"use client";
import TableContainer from "@mui/material/TableContainer";

import { DataTableWrapper } from "~/components/tables/data-tables/DataTableWrapper";
import { TableView } from "~/components/tables/TableView";
import { ProductsTableColumns } from "~/features/products/types";

export interface ProductsTableViewProps {
  readonly children: JSX.Element;
  readonly searchBar?: JSX.Element;
  readonly pagination?: JSX.Element;
}

export const ProductsTableView = ({ children, searchBar, pagination }: ProductsTableViewProps) => (
  <TableView
    header={searchBar}
    footer={pagination}
    contentClassName="max-h-[calc(100%-32px-40px-16px-16px)]"
  >
    <TableContainer sx={{ maxHeight: "100%" }}>
      <DataTableWrapper columns={ProductsTableColumns}>{children}</DataTableWrapper>
    </TableContainer>
  </TableView>
);

export default ProductsTableView;