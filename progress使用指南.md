# progress使用指南

​    说明：这是一个进度条类似的工具

### 1.  可把progress.html视为一个demo

### 2.  需引入jQuery

### 3.  需引入样式文件reset.css和progress.css

### 4.  需引入脚本文件progress.js

### 5. 使用时调用函数Progress()即可，其参数为一个对象，例如:

​    字段id，data，type，name，time，status必须传，可为空，active暂时可忽略

​    id对应一个选择器，data为一个数组，type: "column"，显示为一列，复制即可，（type: "row"，是一行排列，尚未优化，暂不可用）

````
Progress({
    id:"#progress",
    data: [
        {name: "", active: true, time: "2017-09-20 14:30", status: "状态：处理完毕"},
        {name: "开始", active: true, time: "2017-09-20 14:30", status: "状态：处理完毕，啊哈哈"},
        {name: "领取/指派", active: false, time: "2017-09-20 14:30", status: "状态：处理完毕"},
        {name: "执行", active: false, time: "2017-09-20 14:30", status: "状态：处理完毕，文字眼哦长短不齐"},
        {name: "完成", active: false, time: "2017-09-20 14:30", status: "状态：处理完毕，啊啊啊"}
    ],
    type: "column"
});
````
