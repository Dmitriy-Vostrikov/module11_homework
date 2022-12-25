
const sum = function (a,b){
    console.log(a,b)
  }
  const intervalId = setInterval(sum, 1000, 5, 15)
  
  const timeoutId = setTimeout(function(){
    clearInterval(intervalId)
  }, 2000)
  