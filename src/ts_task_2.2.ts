abstract class ElectricityBill {
    public rate?: number;
    public units: number;
    

    constructor(units: number,rate?: number) {
        this.rate = rate;
        this.units = units;
    }

    public abstract billDetails(): number;
}

class Domestic extends ElectricityBill {
    constructor(units: number){
        super(units);
    }

    public billDetails(): any {
        console.log("Domestic Electricity Bill Units: " + this.units + "Rate: " + 5 * this.units);
    }
}
class Commerical extends ElectricityBill{
    constructor(units:number){
       super(units);
    }
    public billDetails(): any {
        console.log("Commercial Electricity Bill Units: " + this.units + "Rate: " + 5 * this.units);    
    }

}
let a = new Domestic(300);
let b= new Commerical(100);
a.billDetails();
b.billDetails();

