
exports.min = function min (array) {
  if(Array.isArray(array)){ //проверка на сущ-ние массива
    let l = array.length ;//кол-во элементов
    let min = array[0];//начальный минимальный
    if(array.length===0){
      return 0;
    }
    else{
      for  (let i = 0; i <= l; i++ ) {
        if (min > array[i]) min=array[i];
      }
      return min;
  }
  }
  else  return 0 ;
}

exports.max = function max (array) {
  if(Array.isArray(array)){ //проверка на сущ-ние массива
    let l = array.length ;//кол-во элементов
    let max = array[0];//начальный максимальный
        if(array.length === 0){
          return 0;
        }
        else{
          for  (let i = 0; i <= l; i++ ) {
            if (max < array[i]) max = array[i];
          }
          return max ;
      }
  }
  else  return 0 ;
}

exports.avg = function avg (array) {
  if(Array.isArray(array)){//проверка на сущ-ние массива
    let sum=0
    for  (let i = 0; i <= array.length; i++ ) { 
      sum+=array[i];
    }
    return sum/array.length;
}else return 0;
}
