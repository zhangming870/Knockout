/// <reference path="C:\Users\mzhang\Source\Repos\Knockout\KO\KO\Scripts/knockout-3.3.0.debug.js" />

var myViewModel = {
    personName: ko.observable('Bob'),
    personAge: ko.observable(123)
};

//Explicitly subscribing to observables
myViewModel.personName.subscribe(function (newValue) {
    alert("The person's new name is " + newValue);
});

//dispose subscribe
/*
 * var subscription = myViewModel.personName.subscribe(function(newValue) {  });
 * subscription.dispose(); // I no longer want notifications
 */

/*subscribe before change */
//myViewModel.personName.subscribe(function (oldValue) {
//    alert("The person's previous name is " + oldValue);
//}, null, "beforeChange");

//activate Knockout
ko.applyBindings(myViewModel);

