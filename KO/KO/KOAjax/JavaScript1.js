function MyViewModel() {
    var self = this;
    self.results = ko.observableArray();
    self.keyword = ko.observable("");
    //底下的computed函數引用了keyword(), 依KO會自動追查相依性的特色，
    //一旦keyword發生變動，這個函數就會被觸發執行
    //而$.getJSON()的第三個參數直接用observableArray去接收AJAX傳回資料陣列
    ko.computed(function () {
        $.getJSON("ColorData.ashx", { k: self.keyword() },
            self.results);
    });
}

$(function () {
    ko.applyBindings(new MyViewModel());
});