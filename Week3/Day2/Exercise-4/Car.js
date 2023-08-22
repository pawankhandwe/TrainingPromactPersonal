var Cars = /** @class */ (function () {
    function Cars(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Cars.prototype.displayCarInfo = function () {
        console.log("".concat(this.make, " ").concat(this.model, " (").concat(this.year, ")"));
    };
    return Cars;
}());
// Example usage
var myCars = new Cars("Toyota", "Camry", 2023);
myCars.displayCarInfo(); 
