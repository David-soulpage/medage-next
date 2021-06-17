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
    let height = 1;
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

  addNodeAsChildrenForParticularParent(ele, parentNode = null) {
    if (parentNode) {
      const result = this.searchingForParticularNode(this.root, parentNode.uid);
      console.log(result, "parentElement");
      if (result) result.children.push(ele);
    } else {
      this.root.children.push(ele);
    }
  }

  traverseAtparticularHeight(traversingHeight, givenHeight, parentNode, elementDetails) {
    if (traversingHeight === givenHeight) return parentNode.children.push(elementDetails);
    else if (parentNode.children.length > 0) {
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
        console.log(queue, "queue");
        level = level + 1;
        queue = [...temp];
        temp = [];
      }
    }
    console.log(output, "Bfs");
  }

  removeNode(ele) {
    const parentElement = this.searchingForParticularNode(this.root, ele.value.label);
    if (parentElement)
      parentElement.children.forEach((element, index) => {
        if (element.uid === ele.uid) parentElement.result.children.splice(index, 1);
      });
  }
}

export default Tree;
const node = new Node("root");
const tree = new Tree(node);
const child1 = new Node("child1");
const child3 = new Node("child3");
const child4 = new Node("child4");
tree.addNodeAsChildrenForParticularParent(child1);
tree.addNodeAsChildrenForParticularParent(child3);
tree.addNodeAsChildrenForParticularParent(child4, child3);
const child2 = new Node("child2");
tree.addNodeAsChildrenForParticularParent(child2, child1);
console.log(tree.root.children[0].children, "root");
tree.renderItemsOfTree();
const child6 = new Node("child6");
tree.addNodeAtParticularLevel(1, child6);
tree.renderItemsOfTree();
const child7 = new Node("child7");
tree.addNodeAtParticularLevel(2, child7);
tree.renderItemsOfTree();
const child8 = new Node("child8");
tree.addNodeAtParticularLevel(2, child8);
tree.renderItemsOfTree();
const child9 = new Node("child9");
tree.addNodeAtParticularLevel(0, child9);
tree.renderItemsOfTree();
