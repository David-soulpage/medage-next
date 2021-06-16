class Tree {
  root;
  constructor(root) {
    this.root = root || null;
  }

  traverse(ele, id) {
    if (ele.uid === id) return ele;
    else if (ele.children != null) {
      var i;
      var result = null;
      for (i = 0; result == null && i < ele.children.length; i++) {
        result = this.traverse(ele.children[i], id);
      }
      return result;
    }
    return null;
  }

  addNode(ele, parentNode = null) {
    if (parentNode) {
      const parentElement = this.traverse(this.root, parentNode.uid);
      parentElement.children.push(ele);
    } else {
      this.root.children.push(ele);
    }
  }

  removeNode(ele) {
    const parentElement = this.traverse(this.root, ele.uid);
    parentElement.children.forEach((element, index) => {
      if (element.uid === ele.uid) parentElement.children.splice(index, 1);
    });
  }
}

export default Tree;

const node = new Node("root");
const tree = new Tree(node);
const child1 = new Node("child1");
tree.addNode(child1);
const child2 = new Node("child2");
tree.addNode(child2, child1);
// console.log(tree.root.children[0].children, "root");
tree.removeNode(child2);
// console.log(tree, "after removing")
console.log(tree.root.children[0].children, "root");
