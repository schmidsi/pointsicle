import { BigInt, ethereum } from '@graphprotocol/graph-ts';
import { PoolCreated } from '../generated/PancakeSwapFactory/PancakeSwapFactory';
import { PoolTemplate } from '../generated/templates';
import { PointsicleCampaign, Quest } from '../generated/schema';

export function handlePoolCreated(event: PoolCreated): void {
  PoolTemplate.create(event.params.pool);
}

export const SWAP_ONCE_QUEST_ID = 'SWAP_ONCE';

export const ADD_LIQUIDITY_QUEST_ID = 'ADD_LIQUIDITY';

export function initialize(block: ethereum.Block): void {
  let campaign = new PointsicleCampaign('Pancakeswap');
  campaign.displayName = 'Pancakeswap';

  let swap_once_quest = new Quest(SWAP_ONCE_QUEST_ID);
  swap_once_quest.description = 'Perform a swap once on Uniswap';
  swap_once_quest.campaign = campaign.id;
  swap_once_quest.points = BigInt.fromI32(10);

  let add_liquidity_quest = new Quest(ADD_LIQUIDITY_QUEST_ID);
  add_liquidity_quest.description = 'Add liquidity on Uniswap';
  add_liquidity_quest.campaign = campaign.id;
  add_liquidity_quest.points = BigInt.fromI32(20);

  campaign.save();
  swap_once_quest.save();
  add_liquidity_quest.save();
}
