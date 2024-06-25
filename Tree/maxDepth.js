const maxDepth = (root) => {
  // If the current node is null, return 0 because we've reached the end of a branch
  if (root === null) {
    return 0;
  } else {
    // Recursively calculate the depth of the left subtree
    let leftDepth = maxDepth(root.left);
    // Recursively calculate the depth of the right subtree
    let rightDepth = maxDepth(root.right);
    // The maximum depth of the current node is the greater of the depths of the left and right subtrees, plus 1 to account for the current node itself
    return Math.max(leftDepth, rightDepth) + 1;
  }
};
