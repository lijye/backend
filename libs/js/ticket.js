console.log("ticket.js --> success");
console.log($);

function ticketFn(el, arr) {
    var ticketContent = $("<div id='ticket-content'></div>");
    ticketContent.appendTo($(el));

    for (var i = 0; i < arr.length; i++) {
        // 判断类型
        if (arr[i].type == 1) {
            // 取值
            var typeVal = arr[i].name;
            var textVal = arr[i].text;
            var descVal = arr[i].desc;
            var contentVal = arr[i].content;
            var dateVal = arr[i].date;

            // 创建一个ticket、插入
            var discount = $("<div class='discount'></div>");
            discount.appendTo(ticketContent);

            // 左侧容器
            var ticketLeft = $("<div class='ticket-left'></div>");
            ticketLeft.appendTo(discount);

            // 创建左侧节点
            var type = $("<p class='type'></p>");
            var text = $("<p class='type-text'>折</p>");
            var span = $("<span></span>")
            var desc = $("<p class='type-desc type-desc-discount'></p>");
            // 节点赋值
            type.html(typeVal);
            span.html(textVal);
            desc.html(descVal);
            span.prependTo(text);
            type.appendTo(ticketLeft);
            text.appendTo(ticketLeft);
            desc.appendTo(ticketLeft);

            // 右侧容器
            var ticketRight = $("<div class='ticket-right'></div>");
            ticketRight.appendTo(discount);

            // 创建右侧节点
            var content = $("<p class='type-content'></p>");
            var date = $("<p class='type-date'></p>");
            var scope1 = $("<p class='type-scope1'>全国通用</p>");
            var scope2 = $("<p class='type-scope2'>只可抵扣时间费用、里程费用</p>");
            // 节点赋值
            content.html(contentVal);
            date.html(dateVal);
            content.appendTo(ticketRight);
            date.appendTo(ticketRight);
            scope1.appendTo(ticketRight);
            scope2.appendTo(ticketRight);

        } else if (arr[i].type == 2) {
            // 取值
            var typeVal = arr[i].name;
            var textVal = arr[i].text;
            var descVal = arr[i].desc;
            var contentVal = arr[i].content;
            var dateVal = arr[i].date;

            // 创建一个ticket、插入
            var discount = $("<div class='discount'></div>");
            discount.appendTo(ticketContent);

            // 左侧容器
            var ticketLeft = $("<div class='ticket-left'></div>");
            ticketLeft.appendTo(discount);

            // 创建左侧节点
            var type = $("<p class='type'></p>");
            var text = $("<p class='type-text'>元</p>");
            var span = $("<span></span>")
            var desc = $("<p class='type-desc type-desc-discount'></p>");
            // 节点赋值
            type.html(typeVal);
            span.html(textVal);
            desc.html(descVal);
            span.prependTo(text);
            type.appendTo(ticketLeft);
            text.appendTo(ticketLeft);
            desc.appendTo(ticketLeft);

            // 右侧容器
            var ticketRight = $("<div class='ticket-right'></div>");
            ticketRight.appendTo(discount);

            // 创建右侧节点
            var content = $("<p class='type-content'></p>");
            var date = $("<p class='type-date'></p>");
            var scope1 = $("<p class='type-scope1'>全国通用</p>");
            var scope2 = $("<p class='type-scope2'>只可抵扣时间费用、里程费用</p>");
            // 节点赋值
            content.html(contentVal);
            date.html(dateVal);
            content.appendTo(ticketRight);
            date.appendTo(ticketRight);
            scope1.appendTo(ticketRight);
            scope2.appendTo(ticketRight);
        } else if (arr[i].type == 3) {
            // 取值
            var typeVal = arr[i].name;
            var textVal = arr[i].text;
            var descVal = arr[i].desc;
            var contentVal = arr[i].content;
            var dateVal = arr[i].date;

            // 创建一个ticket、插入
            var discount = $("<div class='discount'></div>");
            discount.appendTo(ticketContent);

            // 左侧容器
            var ticketLeft = $("<div class='ticket-left'></div>");
            ticketLeft.appendTo(discount);

            // 创建左侧节点
            var type = $("<p class='type'></p>");
            var text = $("<p class='type-text type-text-combo'></p>");
            var desc = $("<p class='type-desc type-desc-combo'></p>");
            // 节点赋值
            type.html(typeVal);
            text.html(textVal);
            desc.html(descVal);
            type.appendTo(ticketLeft);
            text.appendTo(ticketLeft);
            desc.appendTo(ticketLeft);

            // 右侧容器
            var ticketRight = $("<div class='ticket-right'></div>");
            ticketRight.appendTo(discount);

            // 创建右侧节点
            var content = $("<p class='type-content'></p>");
            var date = $("<p class='type-date'></p>");
            var scope1 = $("<p class='type-scope1'>全国通用</p>");
            var scope2 = $("<p class='type-scope2'>只可抵扣时间费用、里程费用</p>");
            // 节点赋值
            content.html(contentVal);
            date.html(dateVal);
            content.appendTo(ticketRight);
            date.appendTo(ticketRight);
            scope1.appendTo(ticketRight);
            scope2.appendTo(ticketRight);
        }
    }
}
