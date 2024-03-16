import { Address, BigInt, ethereum } from '@graphprotocol/graph-ts';
import { Transfer as TransferEvent } from '../generated/ERC20/ERC20';
import {
  PointsicleCampaign,
  PointsicleUser,
  Quest,
  QuestParticipation,
} from '../generated/schema';

export function handleTransfer(event: TransferEvent): void {
  let fromId = event.params.from;
  let toId = event.params.to;

  let from = getOrCreateUser(fromId);
  let to = getOrCreateUser(toId);

  if (event.params.value.gt(BigInt.fromI32(100 * 10 ** 18))) {
    let participation = getOrCreateQuestParticipation(
      from,
      fromId,
      'GET_100_APES',
    );

    participation.save();
  }

  from.save();
  to.save();
}

export function initialize(block: ethereum.Block): void {
  let campaign = new PointsicleCampaign('ApeCoin');
  campaign.displayName = 'ApeCoin';

  let get_100_apes = new Quest('GET_100_APES');
  get_100_apes.description = 'Get 100 ApeCoin';
  get_100_apes.campaign = campaign.id;
  get_100_apes.points = BigInt.fromI32(10);

  let add_liquidity_quest = new Quest('ADD_LIQUIDITY');
  add_liquidity_quest.description = 'Add liquidity on Uniswap';
  add_liquidity_quest.campaign = campaign.id;
  add_liquidity_quest.points = BigInt.fromI32(20);

  campaign.save();
  get_100_apes.save();
  add_liquidity_quest.save();
}

export function getOrCreateUser(address: Address): PointsicleUser {
  let user = PointsicleUser.load(address);

  if (!user) {
    user = new PointsicleUser(address);
    user.points = BigInt.fromI32(0);
    user.lastUpdated = BigInt.fromI32(0);
  }

  return user;
}

export function getOrCreateQuestParticipation(
  user: PointsicleUser,
  address: Address,
  questID: string,
): QuestParticipation {
  let id = address.toHex() + '-' + questID;
  let questParticipation = QuestParticipation.load(id);
  let quest = Quest.load(questID);

  if (!questParticipation) {
    questParticipation = new QuestParticipation(id);
    questParticipation.quest = questID;
    questParticipation.participant = address;
    if (quest) {
      user.points = user.points.plus(quest.points);
    }
  }

  return questParticipation;
}
