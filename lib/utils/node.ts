var id = 0;
class Node {
  value;
  children;
  uid;
  parentUid;
  serverId;
  serverParentId;

  constructor(value) {
    this.value = value;
    this.children = [];
    id = id + 1;
    this.uid = id;
    this.parentUid = null;
    this.serverId = null;
    this.serverParentId = null;
  }
}

export default Node;
