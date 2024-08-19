import { db } from "~/database/prisma";
import { logger } from "~/internal/logger";
import { LogLevel } from "~/internal/loggers/constants";

import { getScriptContext } from "~/scripts/context";

import { processSubscriptions } from "./process-subscriptions";

logger.level = LogLevel.INFO;

async function main() {
  const ctx = await getScriptContext({ upsertUser: true });
  await processSubscriptions(ctx);
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async e => {
    /* eslint-disable-next-line no-console */
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
