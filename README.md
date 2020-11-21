### ain-ui
```
一个基于Vue CLI 4.5.6，Babel7，VUE2.6, Element-ui2.13封装的VUE-UI组件库模版,支持统一加载和按需加载，可以按需分别加载对应组件的js和css，模块化的方式基本参考ElemenuUI，按需加载用babel-plugin-component组件支持。

```
```
npm install -S farmlay-ui
```
### 使用方式 
```
1.html文件中
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/farmlay-ui/package/index.css">
<!-- 引入脚本 -->
<script src="https://unpkg.com/farmlay-ui/package/index.umd.min.js"></script>
```
2.
// 统一加载
import FarmlayUI from 'farmlay-ui'
Vue.use(FarmlayUI)

// departmentTree
import { departmentTree } from 'farmlay-ui'
Vue.use(departmentTree)

### Example
```
在main.js中 
import { departmentTree } from 'farmlay-ui'
Vue.use(departmentTree)

在需要的组件中
<department-tree
  v-if="visible"
  key="departmentTree"
  :checkedNodes.sync="selectedArr"
  :visible.sync="visible"
  :data="data"
></department-tree>

通过监听  selectedArr  的变化获取选中的部门id及名称
```
|  参数         |  类型   |     说明          |     格式                                                                                                |
|---------------|--------|-------------------|---------------------------------------------------------------------------------------------------------|
| data          | array  | 组织树所需数据     |  [{id: 1,label: '一级 1',children: [{id: 4,label: '二级 1-1',children: [{id: 9,label: '三级 1-1-1'}]}]}] |
| selectedArr   | array  | 选中厚的数据       | [{department_id: "", name: ""}]                                                                         |
| visible       | boolean| 空值控件的显示隐藏  |                                                                                                         

> 按需加载功能只针对有Babel配置的项目，单纯用script和link的方式引入js和样式是全量引入