import { Suspense } from "react";

import { fetchProduct } from "~/actions/fetches/products";

import { ErrorView } from "~/components/errors/ErrorView";
import { Loading } from "~/components/loading/Loading";
import { Module } from "~/components/structural/Module";
import { Description } from "~/components/typography";

import { ProductPriceAreaChart } from "./ProductPriceAreaChart";

export interface ProductsChartPageProps {
  readonly searchParams: Record<string, string | string[] | undefined>;
}

export default async function ProductsChartPage({ searchParams }: ProductsChartPageProps) {
  const productId = searchParams.productId;
  if (typeof productId !== "string") {
    return (
      <>
        <Module.Header title="-">Price History</Module.Header>
        <Module.Content centerChildren height={300} minHeight={300} width={400} minWidth={400}>
          <Description className="px-8" align="center">
            Select a product in the table to view the product&apos;s price history.
          </Description>
        </Module.Content>
      </>
    );
  }
  const product = await fetchProduct(productId, { strict: false });
  if (!product) {
    return (
      <>
        <Module.Header title="-">Price History</Module.Header>
        <Module.Content centerChildren height={300} minHeight={300} width={400} minWidth={400}>
          <ErrorView>There was an error loading the product.</ErrorView>
        </Module.Content>
      </>
    );
  }
  return (
    <>
      <Module.Header title={product.name}>Price History</Module.Header>
      <Module.Content centerChildren height={300} minHeight={300} width={400} minWidth={400}>
        <Suspense key={productId} fallback={<Loading isLoading />}>
          <ProductPriceAreaChart width={400} height={300} productId={productId} />
        </Suspense>
      </Module.Content>
    </>
  );
}
