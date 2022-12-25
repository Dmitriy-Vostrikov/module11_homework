
function example(getSum){

  getSum();

  return function(){
    console.log(25)
  }
}

function argSum(){
  console.log(25 + 25)
}

const resultFunc = example(argSum);

resultFunc(); 