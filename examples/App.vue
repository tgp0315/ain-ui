<template>
  <div>
    <departmenttree
      v-if="visible"
      key="departmentTree"
      :checkedNodes.sync="selectedArr"
      :visible.sync="visible"
      :data="data"
    ></departmenttree>
  </div>
</template>
<script>
export default {
  data () {
    return {
      visible: true,
      selectedArr: [],
      data: []
    }
  }
}
</script>
