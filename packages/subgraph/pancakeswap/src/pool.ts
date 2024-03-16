import { BigInt } from '@graphprotocol/graph-ts';
import { Swap as SwapEvent } from '../generated/templates/PoolTemplate/PoolTemplate';
import { PointsicleAllocation } from '../generated/schema';

export function handleSwap(event: SwapEvent): void {
  let allocation = PointsicleAllocation.load(event.params.sender);

  if (allocation == null) {
    allocation = new PointsicleAllocation(event.params.sender);
    allocation.points = BigInt.fromI32(0);
  }

  allocation.points = allocation.points.plus(BigInt.fromI32(1000));
  allocation.save();
}
