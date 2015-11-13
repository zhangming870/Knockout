/// <reference path="C:\Users\mzhang\Source\Repos\Knockout\KO\KO\Scripts/knockout-3.3.0.debug.js" />
var myViewModel = {
    personName: ko.observable('Bob'),
    personAge: ko.observable(123),
    abc:"abc"
};

alert(ko.isObservable(myViewModel.personAge));
alert(ko.isObservable(myViewModel.abc));