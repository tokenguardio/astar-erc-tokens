require('dotenv').config();

export const batchSize = process.env.BATCH_SIZE
  ? parseInt(process.env.BATCH_SIZE)
  : 60;

export const contractCallTimeout = 20;

export const chainNode = process.env.CHAIN_NODE || 'wss://rpc.astar.network';
