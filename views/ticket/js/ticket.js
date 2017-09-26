// console.log("ticket.js --> success");

// 生成ticket条目函数
function ticketFn(el, arr) {
    var ticketContent = $("<div id='ticket-content'></div>");
    ticketContent.appendTo($(el));

    // 循环生成ticket
    for (var i = 0; i < arr.length; i++) {
        // 取值
        var textVal = arr[i].text;
        var descVal = arr[i].desc;
        var contentVal = arr[i].content;
        var dateVal = arr[i].date;
        var scope2Val = arr[i].scope2;
        console.log(scope2Val);

        // 判断类型
        if (arr[i].type == 1) {

            // 创建一个ticket条目、插入ticketContent
            var discount = $("<div class='discount'></div>");
            discount.appendTo(ticketContent);

            // 左侧容器
            var ticketLeft = $("<div class='ticket-left'></div>");
            ticketLeft.appendTo(discount);

            // 创建左侧节点
            var type = $("<p class='type'>折扣券</p>");
            var text = $("<p class='type-text'><span>" + textVal + "</span>折</p>");
            var desc = $("<p class='type-desc type-desc-discount'>" + descVal + "</p>");

            // 插入左侧容器
            type.appendTo(ticketLeft);
            text.appendTo(ticketLeft);
            desc.appendTo(ticketLeft);

        } else if (arr[i].type == 2) {

            // 创建一个ticket条目、插入ticketContent
            var discount = $("<div class='discount'></div>");
            discount.appendTo(ticketContent);

            // 左侧容器
            var ticketLeft = $("<div class='ticket-left'></div>");
            ticketLeft.appendTo(discount);

            // 创建左侧节点
            var type = $("<p class='type'>代金券</p>");
            var text = $("<p class='type-text'><span>" + textVal + "</span>折</p>");
            // var desc = $("<p class='type-desc type-desc-discount'>" + descVal + "</p>");

            // 插入左侧容器
            type.appendTo(ticketLeft);
            text.appendTo(ticketLeft);
            // desc.appendTo(ticketLeft);

        } else if (arr[i].type == 3) {

            // 创建一个ticket条目、插入ticketContent
            var discount = $("<div class='discount'></div>");
            discount.appendTo(ticketContent);

            // 左侧容器
            var ticketLeft = $("<div class='ticket-left'></div>");
            ticketLeft.appendTo(discount);

            // 创建左侧节点
            var type = $("<p class='type'>套餐券</p>");
            var text = $("<p class='type-text type-text-combo'>" + textVal + "</p>");
            var desc = $("<p class='type-desc type-desc-combo'>" + descVal + "</p>");

            // 插入左侧容器
            type.appendTo(ticketLeft);
            text.appendTo(ticketLeft);
            desc.appendTo(ticketLeft);
        }

        // 右侧容器
        var ticketRight = $("<div class='ticket-right'></div>");
        ticketRight.appendTo(discount);

        // 创建右侧节点
        var content = $("<p class='type-content'>" + contentVal + "</p>");
        var date = $("<p class='type-date'>" + dateVal + "</p>");
        var scopeBox = $("<div class='scope-box'><p class='type-scope1'>全国通用</p><p class='type-scope2'>" + scope2Val + "</p></div>")

        // 插入右侧容器
        content.appendTo(ticketRight);
        date.appendTo(ticketRight);
        scopeBox.appendTo(ticketRight);
    }
}
