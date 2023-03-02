"use strict";
class ElectricityBill {
    constructor(units, rate) {
        this.rate = rate;
        this.units = units;
    }
}
class Domestic extends ElectricityBill {
    constructor(units) {
        super(units);
    }
    billDetails() {
        console.log("Domestic Electricity Bill Units: " + this.units + "Rate: " + 5 * this.units);
    }
}
class Commerical extends ElectricityBill {
    constructor(units) {
        super(units);
    }
    billDetails() {
        console.log("Commercial Electricity Bill Units: " + this.units + "Rate: " + 5 * this.units);
    }
}
let a = new Domestic(300);
let b = new Commerical(100);
a.billDetails();
b.billDetails();
