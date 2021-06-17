var id = 0;
class Node {
  value;
  children;
  uid;

  constructor(value) {
    this.value = value;
    this.children = [];
    id = id + 1;
    this.uid = id;
  }
}

export default Node;
