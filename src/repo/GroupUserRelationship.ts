import { PartialBy } from '../utils/type.js';
import { randomUUID } from 'crypto';
import GroupVsUserRelationship from 'models/Relationship/GroupUserRelationship.js';

const GROUP_USER_RELATIONSHIP: Array<{
  groupId: string;
  userId: string;
}> = [];

GROUP_USER_RELATIONSHIP.push({
  groupId: 'group1',
  userId: 'user1',
});
GROUP_USER_RELATIONSHIP.push({
  groupId: 'group1',
  userId: 'user2',
});
GROUP_USER_RELATIONSHIP.push({
  groupId: 'group1',
  userId: 'user3',
});

export const save = (groupUserRelationship: GroupVsUserRelationship): Boolean => {
  GROUP_USER_RELATIONSHIP.push({
    groupId: groupUserRelationship.groupId,
    userId: groupUserRelationship.userId,
  });
  return true;
};

export const getGroupsFromUser = (userId: string): Array<string> => {
  return GROUP_USER_RELATIONSHIP.reduce((acc, curr) => {
    if (curr.userId === userId) {
      acc.push(curr.groupId);
    }
    return acc;
  }, [] as string[]);
};

export const getUsersFromGroup = (groupId: string): Array<string> => {
  return GROUP_USER_RELATIONSHIP.reduce((acc, curr) => {
    if (curr.groupId === groupId) {
      acc.push(curr.userId);
    }
    return acc;
  }, [] as string[]);
};
