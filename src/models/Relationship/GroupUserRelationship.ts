export default class GroupVsUserRelationship {
  groupId: string;
  userId: string;

  constructor(groupId: string, userId: string) {
    this.groupId = groupId;
    this.userId = userId;
  }
}
