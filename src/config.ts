require('dotenv').config();

export const batchSize = process.env.BATCH_SIZE
  ? parseInt(process.env.BATCH_SIZE)
  : 100;

export const chainNode =
  process.env.CHAIN_NODE || 'wss://rpc.astar.network';

export const indexerEndpointUrl =
  process.env.INDEXER_ENDPOINT_URL ||
  'https://astar.archive.subsquid.io/graphql';

export const warningLogsTrace = process.env.WARNING_LOGS_TRACE || 'true';
export const eventLogsTrace = process.env.EVENT_LOGS_TRACE || 'false';
