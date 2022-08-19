<template>
  <div id="App">
    <TreeHolder
        :node="roots"/>
  </div>
</template>

<script setup lang="ts">
import TreeHolder from './TreeHolder.vue'
import {treeNode, parentTree, treeNodeExpand} from "../type/treeNode";
import {onMounted, ref} from "vue";

const roots = ref<treeNode[]>();

const fetchTree: () => Promise<parentTree[]> = async()=>{
  return [
    {
      id: "1"
    },
    {
      id: "2"
    },
    {
      id: "3",
      parent_id: "1"
    },
    {
      id: "4",
      parent_id: "2"
    },
    {
      id: "5",
      parent_id: "4"
    },
    {
      id: "6",
      parent_id: "1"
    },
    {
      id: "7",
      parent_id: "2"
    },
    {
      id: "8",
      parent_id: "2"
    }
  ];
}

function useTree(flatTree:parentTree[]): treeNode[]{
  const nodeMap = new Map();

  flatTree.forEach((item) => {
    const treeNode = {
      id: item.id,
      children: []
    };
    nodeMap.set(item.id, treeNode);
  });

  const roots: treeNode[] = [];

  flatTree.forEach((item) => {
    const currentNode = nodeMap.get(item.id);
    if (item.parent_id) {
      const parentNode = nodeMap.get(item.parent_id);
      parentNode.children.push(currentNode);
    } else {
      roots.push(currentNode);
    }
  });

  const dfs = (node:treeNodeExpand, path:String[]) => {
    const currentPath = [...path, node.id];
    node.path = currentPath.join(".");

    node.children.forEach((child_node) => dfs(child_node, currentPath));
  };

  roots.forEach((root) => {
    dfs(root, []);
  });

  return roots;
}

onMounted(()=>{
  fetchTree().then((flatTree)=>{roots.value = useTree(flatTree)});
})

</script>