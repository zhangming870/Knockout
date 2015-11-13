/// <reference path="C:\Users\mzhang\Source\Repos\Knockout\KO\KO\Scripts/knockout-3.3.0.debug.js" />


function AppViewModel() {
    var self = this;

    self.firstName = ko.observable('Bob');
    self.lastName = ko.observable('Smith');
    self.fullName = ko.computed(function () {
        return self.firstName() + " " + self.lastName();
    });
}

var test = new AppViewModel();

alert(ko.isComputed(test.fullName));