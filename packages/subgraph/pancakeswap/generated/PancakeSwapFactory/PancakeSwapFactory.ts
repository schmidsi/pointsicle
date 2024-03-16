// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class FeeAmountEnabled extends ethereum.Event {
  get params(): FeeAmountEnabled__Params {
    return new FeeAmountEnabled__Params(this);
  }
}

export class FeeAmountEnabled__Params {
  _event: FeeAmountEnabled;

  constructor(event: FeeAmountEnabled) {
    this._event = event;
  }

  get fee(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get tickSpacing(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class FeeAmountExtraInfoUpdated extends ethereum.Event {
  get params(): FeeAmountExtraInfoUpdated__Params {
    return new FeeAmountExtraInfoUpdated__Params(this);
  }
}

export class FeeAmountExtraInfoUpdated__Params {
  _event: FeeAmountExtraInfoUpdated;

  constructor(event: FeeAmountExtraInfoUpdated) {
    this._event = event;
  }

  get fee(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get whitelistRequested(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }

  get enabled(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnerChanged extends ethereum.Event {
  get params(): OwnerChanged__Params {
    return new OwnerChanged__Params(this);
  }
}

export class OwnerChanged__Params {
  _event: OwnerChanged;

  constructor(event: OwnerChanged) {
    this._event = event;
  }

  get oldOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PoolCreated extends ethereum.Event {
  get params(): PoolCreated__Params {
    return new PoolCreated__Params(this);
  }
}

export class PoolCreated__Params {
  _event: PoolCreated;

  constructor(event: PoolCreated) {
    this._event = event;
  }

  get token0(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token1(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get fee(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get tickSpacing(): i32 {
    return this._event.parameters[3].value.toI32();
  }

  get pool(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class SetLmPoolDeployer extends ethereum.Event {
  get params(): SetLmPoolDeployer__Params {
    return new SetLmPoolDeployer__Params(this);
  }
}

export class SetLmPoolDeployer__Params {
  _event: SetLmPoolDeployer;

  constructor(event: SetLmPoolDeployer) {
    this._event = event;
  }

  get lmPoolDeployer(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class WhiteListAdded extends ethereum.Event {
  get params(): WhiteListAdded__Params {
    return new WhiteListAdded__Params(this);
  }
}

export class WhiteListAdded__Params {
  _event: WhiteListAdded;

  constructor(event: WhiteListAdded) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get verified(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class PancakeSwapFactory__collectProtocolResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getAmount0(): BigInt {
    return this.value0;
  }

  getAmount1(): BigInt {
    return this.value1;
  }
}

export class PancakeSwapFactory__feeAmountTickSpacingExtraInfoResult {
  value0: boolean;
  value1: boolean;

  constructor(value0: boolean, value1: boolean) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    return map;
  }

  getWhitelistRequested(): boolean {
    return this.value0;
  }

  getEnabled(): boolean {
    return this.value1;
  }
}

export class PancakeSwapFactory extends ethereum.SmartContract {
  static bind(address: Address): PancakeSwapFactory {
    return new PancakeSwapFactory("PancakeSwapFactory", address);
  }

  collectProtocol(
    pool: Address,
    recipient: Address,
    amount0Requested: BigInt,
    amount1Requested: BigInt,
  ): PancakeSwapFactory__collectProtocolResult {
    let result = super.call(
      "collectProtocol",
      "collectProtocol(address,address,uint128,uint128):(uint128,uint128)",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount0Requested),
        ethereum.Value.fromUnsignedBigInt(amount1Requested),
      ],
    );

    return new PancakeSwapFactory__collectProtocolResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
    );
  }

  try_collectProtocol(
    pool: Address,
    recipient: Address,
    amount0Requested: BigInt,
    amount1Requested: BigInt,
  ): ethereum.CallResult<PancakeSwapFactory__collectProtocolResult> {
    let result = super.tryCall(
      "collectProtocol",
      "collectProtocol(address,address,uint128,uint128):(uint128,uint128)",
      [
        ethereum.Value.fromAddress(pool),
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount0Requested),
        ethereum.Value.fromUnsignedBigInt(amount1Requested),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PancakeSwapFactory__collectProtocolResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
      ),
    );
  }

  createPool(tokenA: Address, tokenB: Address, fee: i32): Address {
    let result = super.call(
      "createPool",
      "createPool(address,address,uint24):(address)",
      [
        ethereum.Value.fromAddress(tokenA),
        ethereum.Value.fromAddress(tokenB),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee)),
      ],
    );

    return result[0].toAddress();
  }

  try_createPool(
    tokenA: Address,
    tokenB: Address,
    fee: i32,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createPool",
      "createPool(address,address,uint24):(address)",
      [
        ethereum.Value.fromAddress(tokenA),
        ethereum.Value.fromAddress(tokenB),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(fee)),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  feeAmountTickSpacing(param0: i32): i32 {
    let result = super.call(
      "feeAmountTickSpacing",
      "feeAmountTickSpacing(uint24):(int24)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))],
    );

    return result[0].toI32();
  }

  try_feeAmountTickSpacing(param0: i32): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "feeAmountTickSpacing",
      "feeAmountTickSpacing(uint24):(int24)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  feeAmountTickSpacingExtraInfo(
    param0: i32,
  ): PancakeSwapFactory__feeAmountTickSpacingExtraInfoResult {
    let result = super.call(
      "feeAmountTickSpacingExtraInfo",
      "feeAmountTickSpacingExtraInfo(uint24):(bool,bool)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))],
    );

    return new PancakeSwapFactory__feeAmountTickSpacingExtraInfoResult(
      result[0].toBoolean(),
      result[1].toBoolean(),
    );
  }

  try_feeAmountTickSpacingExtraInfo(
    param0: i32,
  ): ethereum.CallResult<PancakeSwapFactory__feeAmountTickSpacingExtraInfoResult> {
    let result = super.tryCall(
      "feeAmountTickSpacingExtraInfo",
      "feeAmountTickSpacingExtraInfo(uint24):(bool,bool)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param0))],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new PancakeSwapFactory__feeAmountTickSpacingExtraInfoResult(
        value[0].toBoolean(),
        value[1].toBoolean(),
      ),
    );
  }

  getPool(param0: Address, param1: Address, param2: i32): Address {
    let result = super.call(
      "getPool",
      "getPool(address,address,uint24):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param2)),
      ],
    );

    return result[0].toAddress();
  }

  try_getPool(
    param0: Address,
    param1: Address,
    param2: i32,
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getPool",
      "getPool(address,address,uint24):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(param2)),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  lmPoolDeployer(): Address {
    let result = super.call("lmPoolDeployer", "lmPoolDeployer():(address)", []);

    return result[0].toAddress();
  }

  try_lmPoolDeployer(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "lmPoolDeployer",
      "lmPoolDeployer():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  poolDeployer(): Address {
    let result = super.call("poolDeployer", "poolDeployer():(address)", []);

    return result[0].toAddress();
  }

  try_poolDeployer(): ethereum.CallResult<Address> {
    let result = super.tryCall("poolDeployer", "poolDeployer():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _poolDeployer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CollectProtocolCall extends ethereum.Call {
  get inputs(): CollectProtocolCall__Inputs {
    return new CollectProtocolCall__Inputs(this);
  }

  get outputs(): CollectProtocolCall__Outputs {
    return new CollectProtocolCall__Outputs(this);
  }
}

export class CollectProtocolCall__Inputs {
  _call: CollectProtocolCall;

  constructor(call: CollectProtocolCall) {
    this._call = call;
  }

  get pool(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amount0Requested(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount1Requested(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CollectProtocolCall__Outputs {
  _call: CollectProtocolCall;

  constructor(call: CollectProtocolCall) {
    this._call = call;
  }

  get amount0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get amount1(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class CreatePoolCall extends ethereum.Call {
  get inputs(): CreatePoolCall__Inputs {
    return new CreatePoolCall__Inputs(this);
  }

  get outputs(): CreatePoolCall__Outputs {
    return new CreatePoolCall__Outputs(this);
  }
}

export class CreatePoolCall__Inputs {
  _call: CreatePoolCall;

  constructor(call: CreatePoolCall) {
    this._call = call;
  }

  get tokenA(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenB(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get fee(): i32 {
    return this._call.inputValues[2].value.toI32();
  }
}

export class CreatePoolCall__Outputs {
  _call: CreatePoolCall;

  constructor(call: CreatePoolCall) {
    this._call = call;
  }

  get pool(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class EnableFeeAmountCall extends ethereum.Call {
  get inputs(): EnableFeeAmountCall__Inputs {
    return new EnableFeeAmountCall__Inputs(this);
  }

  get outputs(): EnableFeeAmountCall__Outputs {
    return new EnableFeeAmountCall__Outputs(this);
  }
}

export class EnableFeeAmountCall__Inputs {
  _call: EnableFeeAmountCall;

  constructor(call: EnableFeeAmountCall) {
    this._call = call;
  }

  get fee(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get tickSpacing(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class EnableFeeAmountCall__Outputs {
  _call: EnableFeeAmountCall;

  constructor(call: EnableFeeAmountCall) {
    this._call = call;
  }
}

export class SetFeeAmountExtraInfoCall extends ethereum.Call {
  get inputs(): SetFeeAmountExtraInfoCall__Inputs {
    return new SetFeeAmountExtraInfoCall__Inputs(this);
  }

  get outputs(): SetFeeAmountExtraInfoCall__Outputs {
    return new SetFeeAmountExtraInfoCall__Outputs(this);
  }
}

export class SetFeeAmountExtraInfoCall__Inputs {
  _call: SetFeeAmountExtraInfoCall;

  constructor(call: SetFeeAmountExtraInfoCall) {
    this._call = call;
  }

  get fee(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get whitelistRequested(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }

  get enabled(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class SetFeeAmountExtraInfoCall__Outputs {
  _call: SetFeeAmountExtraInfoCall;

  constructor(call: SetFeeAmountExtraInfoCall) {
    this._call = call;
  }
}

export class SetFeeProtocolCall extends ethereum.Call {
  get inputs(): SetFeeProtocolCall__Inputs {
    return new SetFeeProtocolCall__Inputs(this);
  }

  get outputs(): SetFeeProtocolCall__Outputs {
    return new SetFeeProtocolCall__Outputs(this);
  }
}

export class SetFeeProtocolCall__Inputs {
  _call: SetFeeProtocolCall;

  constructor(call: SetFeeProtocolCall) {
    this._call = call;
  }

  get pool(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get feeProtocol0(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get feeProtocol1(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetFeeProtocolCall__Outputs {
  _call: SetFeeProtocolCall;

  constructor(call: SetFeeProtocolCall) {
    this._call = call;
  }
}

export class SetLmPoolCall extends ethereum.Call {
  get inputs(): SetLmPoolCall__Inputs {
    return new SetLmPoolCall__Inputs(this);
  }

  get outputs(): SetLmPoolCall__Outputs {
    return new SetLmPoolCall__Outputs(this);
  }
}

export class SetLmPoolCall__Inputs {
  _call: SetLmPoolCall;

  constructor(call: SetLmPoolCall) {
    this._call = call;
  }

  get pool(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get lmPool(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class SetLmPoolCall__Outputs {
  _call: SetLmPoolCall;

  constructor(call: SetLmPoolCall) {
    this._call = call;
  }
}

export class SetLmPoolDeployerCall extends ethereum.Call {
  get inputs(): SetLmPoolDeployerCall__Inputs {
    return new SetLmPoolDeployerCall__Inputs(this);
  }

  get outputs(): SetLmPoolDeployerCall__Outputs {
    return new SetLmPoolDeployerCall__Outputs(this);
  }
}

export class SetLmPoolDeployerCall__Inputs {
  _call: SetLmPoolDeployerCall;

  constructor(call: SetLmPoolDeployerCall) {
    this._call = call;
  }

  get _lmPoolDeployer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetLmPoolDeployerCall__Outputs {
  _call: SetLmPoolDeployerCall;

  constructor(call: SetLmPoolDeployerCall) {
    this._call = call;
  }
}

export class SetOwnerCall extends ethereum.Call {
  get inputs(): SetOwnerCall__Inputs {
    return new SetOwnerCall__Inputs(this);
  }

  get outputs(): SetOwnerCall__Outputs {
    return new SetOwnerCall__Outputs(this);
  }
}

export class SetOwnerCall__Inputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOwnerCall__Outputs {
  _call: SetOwnerCall;

  constructor(call: SetOwnerCall) {
    this._call = call;
  }
}

export class SetWhiteListAddressCall extends ethereum.Call {
  get inputs(): SetWhiteListAddressCall__Inputs {
    return new SetWhiteListAddressCall__Inputs(this);
  }

  get outputs(): SetWhiteListAddressCall__Outputs {
    return new SetWhiteListAddressCall__Outputs(this);
  }
}

export class SetWhiteListAddressCall__Inputs {
  _call: SetWhiteListAddressCall;

  constructor(call: SetWhiteListAddressCall) {
    this._call = call;
  }

  get user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get verified(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetWhiteListAddressCall__Outputs {
  _call: SetWhiteListAddressCall;

  constructor(call: SetWhiteListAddressCall) {
    this._call = call;
  }
}
