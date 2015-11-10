/// <reference path="C:\Users\mzhang\Source\Repos\Knockout\KO\KO\Scripts/knockout-3.3.0.debug.js" />

var myViewModel = {
    canSee: ko.observable(true),
    myFunction: function (data, event) {

        this.canSee(false);

        if (event.shiftKey) {
            //do something different when user has shift key down
        } else {
            //do normal action
        }
    }
};

ko.applyBindings(myViewModel);

