let kris_superhero =  {
  spiderman: {
    canFly: false,
    canSwing: true,
    power: 'spidey sense',
  }
}

let prashant_superhero =  {
  superman: {
    canFly: true,
    canSwing: false,
    power: 'smartness',
  }
}

let toni_superhero =  {
  ironman: {
    canFly: true,
    canSwing: false,
  }
}

if (toni_superhero && toni_superhero.ironman && toni_superhero.ironman.power){
  console.log('There is some magical power with Ironman');
}else{
  console.log('There is something very wrong with the object');
}

let power = toni_superhero?.ironman?.power??'Oh Noooo, Something is wrong with the object';
console.log(power);

// const hasPower = (person,superhero) => {

  
//   // if(person[superhero].power){
//   //   console.log(person[superhero].power);
//   // } else{
//   //   console.log('no power');
//   // }
//   return person[superhero] ?? 'superhero is wrong' ?. power ?? 'no';
// }

// console.log(hasPower(toni_superhero,'ironman'));