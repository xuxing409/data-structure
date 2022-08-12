const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};
/**
 * 1.用队列保存根节点
 * 2.将队头节点出队
 * 3.将节点的所有子节点入队
 * 4.重复2 3步骤直到队列为空
 * @param {*} root 
 */
const bfs = (root) => {
  const q = [root]


  while(q.length > 0) {
    const node =  q.shift();
    console.log(node.val);
    node.children.forEach((item)=> {
      q.push(item)
    })
  }
};

bfs(tree)
