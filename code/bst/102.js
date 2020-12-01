/**
 * 二叉树的层序遍历
 */

// bfs
var levelOrder = function (root) {
  // 边界处理
  if (!root) return [];

  // 所需变量定义
  const res = []; // 结果集合
  const queue = [root]; // 队列

  // 遍历 使用队列
  while (queue.length) {
    const len = queue.length; // 记录当前层需遍历次数
    const curLevNodes = []; // 当前层 节点集合

    while (len--) {
      const node = queue.shift(); // 依次 出队
      curLevNodes.push(node.val); // 依次 存入当前层 节点集合中
      node.left && queue.push(node.left); // 若存在左子节点 则入队 更新queue
      node.right && queue.push(node.right); // 若存在右子节点 则入队 更新queue
    }
    res.push(curLevNodes);
  }
  return res;
};

// dfs
var levelOrder = function (root) {
  if (!root) return [];
  let res = [];
  dfs(root, 0);

  function dfs(node, level) {
    if (!node) return;
    if (!res[level]) res[level] = [];
    res[level].push(node.val);
    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

  return res
};
