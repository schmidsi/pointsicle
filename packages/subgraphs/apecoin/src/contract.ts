import {
  Burn as BurnEvent,
  Collect as CollectEvent,
  CollectProtocol as CollectProtocolEvent,
  Flash as FlashEvent,
  IncreaseObservationCardinalityNext as IncreaseObservationCardinalityNextEvent,
  Initialize as InitializeEvent,
  Mint as MintEvent,
  SetFeeProtocol as SetFeeProtocolEvent,
  Swap as SwapEvent,
} from '../generated/Contract/Contract';
import { Burn, Collect } from '../generated/schema';
import { getOrCreateQuestParticipation, getOrCreateUser } from './erc-20';

export function handleMint(event: MintEvent): void {
  let user = getOrCreateUser(event.params.owner);
  let quest = getOrCreateQuestParticipation(
    user,
    event.params.owner,
    'ADD_LIQUIDITY',
  );

  user.lastUpdated = event.block.number;

  quest.save();
  user.save();
}
