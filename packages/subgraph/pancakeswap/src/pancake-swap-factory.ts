import { Address, BigInt, ethereum } from '@graphprotocol/graph-ts';
import {
  PancakeSwapFactory,
  FeeAmountEnabled,
  FeeAmountExtraInfoUpdated,
  OwnerChanged,
  PoolCreated,
  SetLmPoolDeployer,
  WhiteListAdded,
} from '../generated/PancakeSwapFactory/PancakeSwapFactory';
import { PoolTemplate } from '../generated/templates';

export function handlePoolCreated(event: PoolCreated): void {
  PoolTemplate.create(event.params.pool);
}
