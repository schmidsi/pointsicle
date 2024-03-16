import { Address, BigInt, ethereum } from '@graphprotocol/graph-ts';
import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  DelegateChanged as DelegateChangedEvent,
  DelegateVotesChanged as DelegateVotesChangedEvent,
  DescriptorLocked as DescriptorLockedEvent,
  DescriptorUpdated as DescriptorUpdatedEvent,
  MinterLocked as MinterLockedEvent,
  MinterUpdated as MinterUpdatedEvent,
  NounBurned as NounBurnedEvent,
  NounCreated as NounCreatedEvent,
  NoundersDAOUpdated as NoundersDAOUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SeederLocked as SeederLockedEvent,
  SeederUpdated as SeederUpdatedEvent,
  Transfer as TransferEvent,
} from '../generated/NounsToken/NounsToken';
import {
  Approval,
  ApprovalForAll,
  DelegateChanged,
  DelegateVotesChanged,
  DescriptorLocked,
  DescriptorUpdated,
  MinterLocked,
  MinterUpdated,
  NounBurned,
  NounCreated,
  NoundersDAOUpdated,
  OwnershipTransferred,
  PointsicleCampaign,
  PointsicleUser,
  Quest,
  QuestParticipation,
  SeederLocked,
  SeederUpdated,
  Transfer,
} from '../generated/schema';

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.owner = event.params.owner;
  entity.approved = event.params.approved;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.owner = event.params.owner;
  entity.operator = event.params.operator;
  entity.approved = event.params.approved;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDelegateChanged(event: DelegateChangedEvent): void {
  let entity = new DelegateChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.delegator = event.params.delegator;
  entity.fromDelegate = event.params.fromDelegate;
  entity.toDelegate = event.params.toDelegate;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDelegateVotesChanged(
  event: DelegateVotesChangedEvent,
): void {
  let entity = new DelegateVotesChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.delegate = event.params.delegate;
  entity.previousBalance = event.params.previousBalance;
  entity.newBalance = event.params.newBalance;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDescriptorLocked(event: DescriptorLockedEvent): void {
  let entity = new DescriptorLocked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDescriptorUpdated(event: DescriptorUpdatedEvent): void {
  let entity = new DescriptorUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.descriptor = event.params.descriptor;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleMinterLocked(event: MinterLockedEvent): void {
  let entity = new MinterLocked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleMinterUpdated(event: MinterUpdatedEvent): void {
  let entity = new MinterUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.minter = event.params.minter;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleNounBurned(event: NounBurnedEvent): void {
  let entity = new NounBurned(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleNounCreated(event: NounCreatedEvent): void {
  let entity = new NounCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.tokenId = event.params.tokenId;
  entity.seed_background = event.params.seed.background;
  entity.seed_body = event.params.seed.body;
  entity.seed_accessory = event.params.seed.accessory;
  entity.seed_head = event.params.seed.head;
  entity.seed_glasses = event.params.seed.glasses;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  let user = getOrCreateUser(event.transaction.from);

  let qp = getOrCreateQuestParticipation(user, event.transaction.from, 'CREATE_A_NOUN');

  entity.save();
  user.save();
  qp.save();
}

export function handleNoundersDAOUpdated(event: NoundersDAOUpdatedEvent): void {
  let entity = new NoundersDAOUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.noundersDAO = event.params.noundersDAO;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent,
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSeederLocked(event: SeederLockedEvent): void {
  let entity = new SeederLocked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSeederUpdated(event: SeederUpdatedEvent): void {
  let entity = new SeederUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.seeder = event.params.seeder;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function initialize(block: ethereum.Block): void {
  let campaign = new PointsicleCampaign('Nouns');
  campaign.displayName = 'Nouns';

  let create_a_noun = new Quest('CREATE_A_NOUN');
  create_a_noun.description = 'Create a noun of your own';
  create_a_noun.campaign = campaign.id;
  create_a_noun.points = BigInt.fromI32(10);

  campaign.save();
  create_a_noun.save();
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
