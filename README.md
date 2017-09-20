# backend
jquery+bootstrap+some jq plugin

## 1、lib/css  和 lib/fonts必须在通目录下


## 2、资源引用说明
### select资源引用
	<link rel="stylesheet" type="text/css" href="libs/select/css/select2.min.css">
	<link rel="stylesheet" href="./libs/css/bootstrap.min.css">
	<link rel="stylesheet" href="./libs/css/common.css">
	<link rel="stylesheet" href="./libs/css/boot_revise.css">
	<script src="./libs/js/jquery.min.js"></script>
	<script src="libs/select/js/select2.full.min.js"></script>
	<script src="libs/select/js/i18n/zh-CN.js"></script>

### index资源引用
	<link href="./libs/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="./libs/data_time_picker/css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen">
    <script src="./libs/js/jquery.min.js"></script>
	<script src="./libs/js/bootstrap.min.js"></script>
	<script src="./libs/data_time_picker/js/bootstrap-datetimepicker.js"></script>
	<script src="./libs/data_time_picker/js/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>

### demo资源引用
	<link rel="stylesheet" href="./libs/left_menu/sidebar-menu.css">
	<link rel="stylesheet" href="./libs/css/bootstrap.min.css">
	<link rel="stylesheet" href="./libs/css/font-awesome.4.6.0.css">
	<link rel="stylesheet" href="./libs/css/common.css">
	<link rel="stylesheet" href="./libs/css/boot_revise.css">
	<script src="./libs/js/jquery.min.js"></script>
	<script src="./libs/js/bootstrap.min.js"></script>
	<script src="./libs/left_menu/sidebar-menu.js"></script>

### 其中通用页面需要通用引用资源有
	select2.min.css
	bootstrap.min.css		--> v3.3.7
	common.css				--> 手写通用样式
	boot_revise.css			--> bootstrap.css样式修正
	jquery.min.js			--> v3.1.1
	select2.full.min.js
	select/../zh-CN.js		-->select汉化

	datatimepicker.min.css
	datatimepicker.min.js
	datatimepicker.zh-CN.js	-->汉化

	sidebar-menu.css		--> leftMenu css
	font-awesome.css 		--> 图标字体库   [官网->]:http://fontawesome.dashgame.com/
	sidebar-menu.js			--> leftMenu js