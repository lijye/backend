console.log("progress.js");
// 需引入jQuery

var Progress = function (obj) {
    if (!(this instanceof Progress)) return new Progress(obj);

    // id是一个选择器，data是一个数组
    var id = obj.id;
    var data = obj.data;
    var type = obj.type;

    var titleBox = $("<div class='title-box'></div>")
    titleBox.appendTo($(id));
    var cityBox = $("<div class='city-box'></div>");
    cityBox.appendTo($(id));
    var msgBox = $("<div class='msg-box'></div>")
    msgBox.appendTo($(id));

    // 遍历params
    // 根据城市名称生成DOM节点并插入container

    // 横行的情况
    if (type == "row") {
        for (var i = 0; i < data.length; i++) {
            if (data[i].active) {
                // 取值
                var text = data[i].name;
                // 创建节点
                var span = $("<span></span>");
                span.html(text);
                var cityItem = $("<div class='city active'></div>");
                // 插入操作
                span.appendTo(cityItem);
                cityItem.appendTo(cityBox);

                // 取值
                var time = data[i].time;
                var status = data[i].status;
                // 创建节点
                var p1 = $("<p></p>");
                var p2 = $("<p></p>");
                p1.html(time);
                p2.html(status);
                var msgItem = $("<div style='max-width: 140px;'></div>")
                // 插入DOM
                p1.appendTo(msgItem);
                p2.appendTo(msgItem);
                msgItem.appendTo(msgBox);

            } else if (!data[i].active) {
                // 取值
                var text = data[i].name;
                // 创建节点
                var span = $("<span></span>");
                span.html(text);
                var cityItem = $("<div class='city'></div>");
                // 插入操作
                span.appendTo(cityItem);
                cityItem.appendTo(cityBox);

                // 取值
                var time = data[i].time;
                var status = data[i].status;
                // 创建节点
                var p1 = $("<p></p>");
                var p2 = $("<p></p>");
                p1.html(time);
                p2.html(status);
                var msgItem = $("<div style='max-width: 140px; overflow: hidden;'></div>")
                // 插入DOM
                p1.appendTo(msgItem);
                p2.appendTo(msgItem);
                msgItem.appendTo(msgBox);
            }
        }

    // 排成一列
    } else if(type == "column") {
        $(".title-box").css("float", "left");
        $(".city-box").css("float", "left");
        $(".msg-box").css("float", "left");
        for (var i = 0; i < data.length; i++) {
            if (data[i].active) {
                // 取值
                var name = data[i].name;
                // 创建节点
                var title = $("<span class='col-title'></span>")
                title.html(name);
                // 操作节点
                title.appendTo(titleBox);

                // 创建节点
                var span2 = $("<span class='col-span col-text col-active'></span>");
                var span1 = $("<span class='col-span col-before col-active'></span>");
                var span3 = $("<span class='col-span col-after col-active'></span>");
                var colCity = $("<div class='col-city'></div>");
                // 操作节点
                span1.appendTo(colCity);
                span2.appendTo(colCity);
                span3.appendTo(colCity);
                colCity.appendTo(cityBox);

                // 取值
                var time = data[i].time;
                var status = data[i].status;
                // 创建节点
                var p1 = $("<p class='col-time'></p>");
                var box = $("<div class='col-msg-box'</div>");
                var p2 = $("<p class='col-msg'></p>");
                p1.html(time);
                p2.html(status);
                var msgItem = $("<div class='msg-item'></div>")
                // 插入DOM
                p1.appendTo(msgItem);
                box.appendTo(msgItem);
                p2.appendTo(box);
                msgItem.appendTo(msgBox);

            } else if (!data[i].active) {
                // 取值
                var name = data[i].name;
                // 创建节点
                var title = $("<span class='col-title'></span>")
                title.html(name);
                // 操作节点
                title.appendTo(titleBox);

                // 创建节点
                var span2 = $("<span class='col-span col-text col-active'></span>");
                var span1 = $("<span class='col-span col-before col-active'></span>");
                var span3 = $("<span class='col-span col-after col-active'></span>");
                var colCity = $("<div class='col-city'></div>");
                // 操作节点
                span1.appendTo(colCity);
                span2.appendTo(colCity);
                span3.appendTo(colCity);
                colCity.appendTo(cityBox);

                // 取值
                var time = data[i].time;
                var status = data[i].status;
                // 创建节点
                var p1 = $("<p class='col-time'></p>");
                var box = $("<div class='col-msg-box'</div>");
                var p2 = $("<p class='col-msg'></p>");
                p1.html(time);
                p2.html(status);
                var msgItem = $("<div class='msg-item'></div>")
                // 插入DOM
                p1.appendTo(msgItem);
                box.appendTo(msgItem);
                p2.appendTo(box);
                msgItem.appendTo(msgBox);
            }
        }
    }

}

