class trotinette{
  static type_trotinette = "trotinette";
  type = dualtron;
  poids = 25;
   constructor(vitesse, batterie,charge_max){
     this.vitesse = vitesse;
     this.batterie = batterie;
     this.charge_max = charge_max;
   }
  
}
let trot1 = new trotinette("25","100","120");
let trot2 = new trotinette("45","90","125");
console.log(trot1.batterie);