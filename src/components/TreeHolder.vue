<template>
  <div
      v-for="element in node"
      :key="element"
      @click.stop="onClick(element)"
      :style="{'margin-left': `${level * 20}px`}"
      class="node">{{element.id}}
    <TreeHolder
        :node="element.children" level="1"></TreeHolder>
  </div>
</template>


<script setup lang="ts">

import {treeNodeExpand} from "../type/treeNode";
defineProps<{
  node: {
    type: treeNodeExpand,
    required: true,
  },
  level:{
    type: Number,
    default: 1,
  }
}>();

const onClick = (node:treeNodeExpand):void =>{
  alert(node.path);
}

</script>
