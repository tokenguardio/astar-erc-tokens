require('dotenv').config();

export const batchSize = process.env.BATCH_SIZE
  ? parseInt(process.env.BATCH_SIZE)
  : 30;

export const contractCallTimeout = 10;

export const chainNode = process.env.CHAIN_NODE || 'wss://astar.api.onfinality.io/public-ws';
