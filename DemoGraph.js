const BSTGraph = require("./BSTGraph");

const graph = new BSTGraph(10);

//            10
//         /      \
//        8        22
//       /  \     /  \
//      5    9   21  24
//              /
//             12

graph.add(10);
graph.add(8);
graph.add(5);
graph.add(9);
graph.add(22);
graph.add(21);
graph.add(12);
graph.add(24);
// console.log("print the tree after creation");
// graph.printTree();
// console.log("\n");
// // console.log("findNode 42");
// // console.log(graph.findNode(42));
// // console.log("try to findNode something that isn't there");
// // console.log(JSON.stringify(graph.findNode(85)));
// // console.log("try to findNode if value 34 is in the tree");
// // console.log(graph.isPresent(34));
// // console.log("try to findNode if value 100 is in the tree");
// // console.log(graph.isPresent(100));
// // console.log("try to remove the root node");
// // graph.remove(20);
// // console.log("print the tree after the root has been removed");
// // graph.printTree();
// console.log("lets see if the tree is balanced");
// console.log(graph.isBalanced());
// // console.log("remove item to make it unbalanced");
// // graph.remove(12);
// // graph.remove(22);
// console.log("now the tree should be unbalanced");
// console.log(graph.isBalanced());
// console.log("\n");
// console.log("in order tree traversal");
// console.log(graph.inOrder());
// console.log("\n");
// console.log("pre order tree traversal, roots before leaves");
// console.log(graph.preOrder());
// console.log("\n");
// console.log("post order tree traversal, leaves before roots");
// console.log(graph.postOrder());
// console.log("\n");
console.log("level order tree traversal, breadth first search");
console.log(graph.levelOrder());
