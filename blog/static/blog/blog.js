const lazyAdd = function(a,b){
  const doAdd = (resolve, reject) => {
    if(typeof a !== "number" || typeof b !== "number"){
      reject("a and b must both be number")
    } else {
      const sum = a+b
      resolve(sum)
    }
  }
  return new Promise(doAdd)
}