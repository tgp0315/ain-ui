<template>
  <div>
    <department-tree
      v-if="visible"
      key="departmentTree"
      :checkedNodes.sync="selectedArr"
      :visible.sync="visible"
      :data="data"
    ></department-tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: true,
      selectedArr: [],
      data: []
    }
  },
}
</script>