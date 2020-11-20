import departmenttree from './src/departmenttree.vue'
/* istanbul ignore next */
departmenttree.install = function (Vue) {
  Vue.component(departmenttree.name, departmenttree)
}

export default departmenttree
