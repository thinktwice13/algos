// Validate BST tree

const validate = (node, min = null, max = null) => {
  if (max !== null && node.data > max) return false
  if (min !== null && node.data < min) return false

  // return false if validation of left/right nodes fails
  if (node.left && !validate(node.left, min, node.data)) return false
  if (node.right && !validate(node.right, node.data, max)) return false

  return true
}

module.exports = validate