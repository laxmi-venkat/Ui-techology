class Car {
    constructor(name){
        this.brand = name;
    }
    present(){
        return 'I have a '+this.brand;
    }
}
const mycar = new Car("Ford");
mycar.present();