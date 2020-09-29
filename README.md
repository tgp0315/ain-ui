### departments-tree
```
npm install -S departments-tree
```
### 基于element-ui的部门组织树 可根据部门id及名称进行筛选

### 使用方式

```
在main.js中 

import "departments-tree/dist/departmentTree.css";
import tree from "departments-tree";
Vue.use(tree);
 

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