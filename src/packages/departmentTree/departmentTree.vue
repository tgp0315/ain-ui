<template>
  <div class="objectTree-container" v-if="visible">
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText"
      style="margin-bottom: 20px;"
    ></el-input>
    <el-tree
      @check-change="treeChange"
      @close="outside"
      :props="defaultProps"
      :default-checked-keys="checkedKeys"
      node-key="id"
      ref="tree"
      :filter-node-method="filterNode"
      show-checkbox
      :data="treeOps"
    ></el-tree>
  </div>
</template>
<script>
import { debounce } from "../../utli/debounce";
export default {
  name: "departmentTree",
  data() {
    return {
      defaultProps: { children: "children"},
      filterText: "",
      tree: this.data,
      isMounting: true
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => []
    },
    checkedNodes: {
      type: Array,
      default: () => []
    },
    exclusive: {
      type: Boolean,
      default: false
    },
    leafOnly: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checkedKeys() {
      return this.checkedNodes.map(({ department_id }) => department_id);
    },
    treeOps() {
      return this.tree || this.data;
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
    data(v) {
      this.tree = v;
    }
  },
  methods: {
    // test
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    findRoot(id) {
      let currentRoot = {};
      for (let index = 0; index < this.data.length; index++) {
        currentRoot = this.data[index];
        if (this.findNode(id, this.data[index])) {
          return currentRoot;
        }
      }
    },
    findNode(id, node) {
      if (node.id == id) {
        return true;
      }
      const children = node.children;
      if (children && children.length > 0) {
        for (let index = 0; index < children.length; index++) {
          if (this.findNode(id, children[index])) {
            return true;
          }
        }
      }
      return false;
    },
    treeChange: debounce(function(data, checked, indeterminate) {
      const nodes = this.$refs.tree.getCheckedNodes(this.leafOnly);
      if (this.exclusive) {
        if (checked) {
          const rootID = this.findRoot(data.id).id;
          this.disabledOtherBranch(rootID);
        }

        if (nodes.length == 0) {
          this.enableAll();
        }
      }
      this.$emit(
        "update:checkedNodes",
        nodes.map(({ label, id }) => ({ name: label, department_id: id }))
      );
    }, 500),
    disabledOtherBranch(id) {
      let tree = this.tree;
      for (let index = 0; index < tree.length; index++) {
        if (tree[index].id == id) {
          continue;
        }
        tree[index] = this.disableNode(tree[index], true);
        this.$set(tree, index, { ...tree[index] });
      }
    },
    disableNode(node, disabled) {
      node.disabled = disabled;
      const children = node.children;
      if (children && children.length > 0) {
        node.children = children.map(c => {
          return this.disableNode(c, disabled);
        });
      }
      return node;
    },
    enableAll() {
      let tree = this.tree;
      for (let index = 0; index < tree.length; index++) {
        tree[index] = this.disableNode(tree[index], false);
        this.$set(tree, index, { ...tree[index] });
      }
    },
    outside() {
      if (!this.isMounting) {
        this.$emit("update:visible", false);
      }
    }
  },
  mounted() {
    if (this.visible) {
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
    }
    this.$nextTick(function() {
      setTimeout(() => {
        this.isMounting = false;
      }, 1000);
    });
  },
  destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};
</script>
<style  scoped>
.objectTree-container {
  padding: 60px 20px 20px 20px;
  max-width: 50%;
  min-width: 100%;
}
.objectTree-container /deep/ .el-tree {
  height: calc(100vh - 250px);
  overflow: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
  width: 30%;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  width: 0;
}
</style>
