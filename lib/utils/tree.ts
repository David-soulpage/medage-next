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

class Tree {
  root;
  constructor(root) {
    this.root = root || null;
  }

  searchingForParticularNode(ele, label) {
    if (ele.uid === label) return ele;
    else if (ele.children != null) {
      var i;
      var result = null;
      for (i = 0; result == null && i < ele.children.length; i++) {
        result = this.searchingForParticularNode(ele.children[i], label);
      }
      return result;
    }
    return null;
  }

  updateParticularNodeValue(id, obj) {
    const { type, value } = obj;

    const currentNode = this.searchingForParticularNode(this.root, id);

    if (type === "value") currentNode.value = value;
    else if (type === "parentId") currentNode.parentUid = value;
    else if (type === "serverId") currentNode.serverId = value;
    else if (type === "serverParentId") currentNode.serverParentId = value;
  }

  addNodeAsChildrenForParticularParent(ele, parentNode = null) {
    if (parentNode) {
      const result = this.searchingForParticularNode(this.root, parentNode.uid);

      ele.parentUid = result.uid;
      if (result) result.children.push(ele);
    } else {
      this.root.children.push(ele);
    }
  }

  traverseAtparticularHeight(traversingHeight, givenHeight, parentNode, elementDetails) {
    if ((givenHeight === 0 || traversingHeight === givenHeight) && elementDetails["action"]) {
      return parentNode;
    } else if (traversingHeight === givenHeight) {
      elementDetails.parentUid = parentNode.uid;
      elementDetails.serverParentId = parentNode.serverId;
      return parentNode.children.push(elementDetails);
    } else if (parentNode.children.length > 0) {
      for (let i = 0; i < parentNode.children.length; i++) {
        const ele = this.traverseAtparticularHeight(
          traversingHeight + 1,
          givenHeight,
          parentNode.children[i],
          elementDetails
        );
        if (ele) return ele;
      }
    }
    return null;
  }

  addNodeAtParticularLevel(level, ele) {
    this.traverseAtparticularHeight(0, level, this.root, ele);
  }

  renderItemsOfTree() {
    let queue = [...this.root.children];
    let output = [];
    let level = 0;
    let temp = [];
    while (queue.length > 0) {
      const node = queue.shift();

      if (node.children.length > 0) {
        node.children.forEach((ele, index) => {
          temp.push(ele);
        });
      }
      output.push({ value: node.value, level: level });
      if (queue.length === 0 && temp.length > 0) {
        level = level + 1;
        queue = [...temp];
        temp = [];
      }
    }
  }

  removeNode(id, depth) {
    const parentElement = this.traverseAtparticularHeight(0, depth, this.root, {
      action: "remove",
      uid: id,
    });

    if (parentElement)
      parentElement.children.forEach((ele, index) => {
        if (ele.uid === id) parentElement.children.splice(index, 1);
      });
  }
}

export default Tree;