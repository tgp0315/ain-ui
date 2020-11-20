import departmentTree from "./src/departmentTree.vue";
/* istanbul ignore next */
departmentTree.install = function(Vue) {
  Vue.component(departmentTree.name, departmentTree);
};

export default departmentTree;