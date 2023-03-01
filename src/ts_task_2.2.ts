abstract class ElectricityBill {
    public rate: number;
    public units: number;
    

    constructor(rate: number, units: number) {
        this.rate = rate;
        this.units = units;
    }

    public abstract billDetails(): number;
}

class Domestic extends ElectricityBill {
    constructor(rate: number, units: number){
        super(rate, units);
    }

    public damagePerSecond(): any {
        console.log("Name: " + this.name + " " + "\n" + "damagePerSecond: " + this.damage * this.attackSpeed);
    }
}

// let c = new Character('ABC', 123, 123);//Cannot create an instance of an abstract class
// Character.damagePerSecond();

let g = new Goblin('ABC', 123, 123);
g.damagePerSecond();