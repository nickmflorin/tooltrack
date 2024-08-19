import { type NextRequest } from "next/server";

import { db } from "~/database";

import { fetchPriceChangeSubscription } from "~/actions/fetches/subscriptions";

import { ClientResponse } from "~/api";

export async function generateStaticParams() {
  const subscriptions = await db.priceChangeSubscription.findMany();
  return subscriptions.map(s => ({
    id: s.id,
  }));
}

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
  const { error, data } = await fetchPriceChangeSubscription(params.id, { scope: "api" });
  if (error) {
    return error.response;
  }
  return ClientResponse.OK(data).response;
};