import { lookupArchive } from '@subsquid/archive-registry';
import { Store, TypeormDatabase } from '@subsquid/typeorm-store';
import {
  BatchContext,
  SubstrateBatchProcessor,
  BatchProcessorItem
} from '@subsquid/substrate-processor';
import * as erc20 from './abi/erc20';
import * as erc721 from './abi/erc721';
import * as modules from './mappings';
import * as config from './config';

const database = new TypeormDatabase();
const processor = new SubstrateBatchProcessor()
  .setBatchSize(config.batchSize)
  .setDataSource({
    chain: config.chainNode,
    archive: lookupArchive('moonbeam', { release: 'FireSquid' })
  })
  .setTypesBundle('moonbeam')
  .addEvmLog('*', {
    filter: [erc20.events['Transfer(address,address,uint256)'].topic]
  });
// .addEvmLog('*', {
//   filter: [erc721.events['Transfer(address,address,uint256)'].topic]
// });

type Item = BatchProcessorItem<typeof processor>;
export type Context = BatchContext<Store, Item>;

processor.run(database, async (ctx: Context) => {
  for await (const block of ctx.blocks) {
    for await (const item of block.items) {
      if (item.name === 'EVM.Log') {
        if (
          item.event.args.topics[0] ===
          erc20.events['Transfer(address,address,uint256)'].topic
        ) {
          try {
            await modules.handleErc20Transfer(ctx, block.header, item.event);
          } catch (e) {
            try {
              await modules.handleErc721Transfer(ctx, block.header, item.event);
            } catch (e) {
              console.log('--- skip---');
              console.log('');
            }
          }
        }
      }
    }
  }

  await modules.saveAll(ctx);
});
