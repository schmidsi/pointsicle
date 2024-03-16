import { Address, BigInt } from '@graphprotocol/graph-ts';
import { Swap as SwapEvent } from '../generated/templates/PoolTemplate/PoolTemplate';
import { PointsicleUser, Quest, QuestParticipation } from '../generated/schema';
import { SWAP_ONCE_QUEST_ID } from './pancake-swap-factory';

export function handleSwap(event: SwapEvent): void {
  let user = getOrCreateUser(event.params.sender);

  let participation = getOrCreateQuestParticipation(
    user,
    event.params.sender,
    SWAP_ONCE_QUEST_ID,
  );

  user.lastUpdated = event.block.number;
  user.save();

  participation.save();
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
