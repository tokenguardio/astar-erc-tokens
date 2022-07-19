require('dotenv').config();

export const dbName = process.env.DB_NAME || 'astar_erc20_erc721';
export const dbUser = process.env.DB_USER || 'dev';
export const dbPass = process.env.DB_PASS || 'qweasdzxc1';
export const dbHost = process.env.DB_HOST || 'localhost';
export const dbPort = parseInt(process.env.DB_PORT || '') || 5432;
export const batchSize = process.env.BATCH_SIZE
  ? parseInt(process.env.BATCH_SIZE)
  : 50;

export const chainNode =
  process.env.CHAIN_NODE || 'wss://rpc.astar.network';

export const indexerEndpointUrl =
  process.env.INDEXER_ENDPOINT_URL ||
  'https://astar.archive.subsquid.io/graphql';

export const warningLogsTrace = process.env.WARNING_LOGS_TRACE || 'true';
export const eventLogsTrace = process.env.EVENT_LOGS_TRACE || 'false';
