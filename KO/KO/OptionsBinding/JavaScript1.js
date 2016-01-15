// Constructor for an object with two properties
var Country = function (name, population) {
    this.countryName = name;
    this.countryPopulation = population;
};

var Countrys = ko.observableArray([
        new Country("UK", 65000000),
        new Country("USA", 320000000),
        new Country("Sweden", 29000000)
]);

var viewModel = {
    availableCountries: Countrys,
    selectedCountry: ko.observable() // Nothing selected by default
};



ko.applyBindings(viewModel);

/*pre selected values*/
viewModel.selectedCountry('UK');