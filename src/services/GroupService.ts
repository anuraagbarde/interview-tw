import * as GroupRepo from '../repo/Group.js';

class GroupService {
  getGroupsFromIds(groupsIds: Array<string>) {
    return groupsIds.map((groupId) => GroupRepo.getGroup(groupId));
  }
  getGroups(groupIds: Array<string>) {
    return groupIds.map((groupId) => GroupRepo.getGroup(groupId));
  }
}
export default new GroupService();
