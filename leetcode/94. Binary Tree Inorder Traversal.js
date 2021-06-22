// https://leetcode.com/problems/binary-tree-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
   const inorder = []
   node(root, inorder)
   return inorder
};

const node = (node, inorder) => {
  if (node.left) node(node.left, inorder)
  inorder.push(node.val)
  if (node.right) node(node.right, inorder)
}