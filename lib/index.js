import departmenttree from './departmenttree'
const components = [
  departmenttree
]
// script标签方式映入
const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

// 支持使用标签方式引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  install,
  departmenttree
}

export default {
  version: '1.0.7',
  install,
  departmenttree
}
