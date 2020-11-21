import DepartmentTree from './src/department-tree.vue';
/* istanbul ignore next */
DepartmentTree.install = function (Vue) {
  Vue.component(DepartmentTree.name, DepartmentTree);
};

export default DepartmentTree;
