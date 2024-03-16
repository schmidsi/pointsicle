import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  FeeAmountEnabled,
  FeeAmountExtraInfoUpdated,
  OwnerChanged,
  PoolCreated,
  SetLmPoolDeployer,
  WhiteListAdded
} from "../generated/PancakeSwapFactory/PancakeSwapFactory"

export function createFeeAmountEnabledEvent(
  fee: i32,
  tickSpacing: i32
): FeeAmountEnabled {
  let feeAmountEnabledEvent = changetype<FeeAmountEnabled>(newMockEvent())

  feeAmountEnabledEvent.parameters = new Array()

  feeAmountEnabledEvent.parameters.push(
    new ethereum.EventParam(
      "fee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee))
    )
  )
  feeAmountEnabledEvent.parameters.push(
    new ethereum.EventParam("tickSpacing", ethereum.Value.fromI32(tickSpacing))
  )

  return feeAmountEnabledEvent
}

export function createFeeAmountExtraInfoUpdatedEvent(
  fee: i32,
  whitelistRequested: boolean,
  enabled: boolean
): FeeAmountExtraInfoUpdated {
  let feeAmountExtraInfoUpdatedEvent = changetype<FeeAmountExtraInfoUpdated>(
    newMockEvent()
  )

  feeAmountExtraInfoUpdatedEvent.parameters = new Array()

  feeAmountExtraInfoUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "fee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee))
    )
  )
  feeAmountExtraInfoUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "whitelistRequested",
      ethereum.Value.fromBoolean(whitelistRequested)
    )
  )
  feeAmountExtraInfoUpdatedEvent.parameters.push(
    new ethereum.EventParam("enabled", ethereum.Value.fromBoolean(enabled))
  )

  return feeAmountExtraInfoUpdatedEvent
}

export function createOwnerChangedEvent(
  oldOwner: Address,
  newOwner: Address
): OwnerChanged {
  let ownerChangedEvent = changetype<OwnerChanged>(newMockEvent())

  ownerChangedEvent.parameters = new Array()

  ownerChangedEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  ownerChangedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownerChangedEvent
}

export function createPoolCreatedEvent(
  token0: Address,
  token1: Address,
  fee: i32,
  tickSpacing: i32,
  pool: Address
): PoolCreated {
  let poolCreatedEvent = changetype<PoolCreated>(newMockEvent())

  poolCreatedEvent.parameters = new Array()

  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("token0", ethereum.Value.fromAddress(token0))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("token1", ethereum.Value.fromAddress(token1))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "fee",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee))
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("tickSpacing", ethereum.Value.fromI32(tickSpacing))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool))
  )

  return poolCreatedEvent
}

export function createSetLmPoolDeployerEvent(
  lmPoolDeployer: Address
): SetLmPoolDeployer {
  let setLmPoolDeployerEvent = changetype<SetLmPoolDeployer>(newMockEvent())

  setLmPoolDeployerEvent.parameters = new Array()

  setLmPoolDeployerEvent.parameters.push(
    new ethereum.EventParam(
      "lmPoolDeployer",
      ethereum.Value.fromAddress(lmPoolDeployer)
    )
  )

  return setLmPoolDeployerEvent
}

export function createWhiteListAddedEvent(
  user: Address,
  verified: boolean
): WhiteListAdded {
  let whiteListAddedEvent = changetype<WhiteListAdded>(newMockEvent())

  whiteListAddedEvent.parameters = new Array()

  whiteListAddedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  whiteListAddedEvent.parameters.push(
    new ethereum.EventParam("verified", ethereum.Value.fromBoolean(verified))
  )

  return whiteListAddedEvent
}
