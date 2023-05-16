// Задание - Создать массив из 10 случайных чисел (Math.floor(Math.random() * 10)) и написать функции для работы с ним:

let arr = [];
    for(let i = 0; i < 10; ++i){
      arr.push(Math.floor(Math.random() * 10));
    }
    console.log(arr);
// ● функция принимает массив возвращает новый массив, состоящий из разницы максимального и текущего элемента

function ArrNew(arr){
    let max = arr.reduce(function(max,elem){
        if (max < elem) max = elem;
        return max;
      })
    let arrNew = [];
    arrNew=arr.map(function(elem){
        return (max - elem);
      });
    return arrNew();
}
console.log(ArrNew(arr));

// ● функция принимает массив и возвращает новый массив при условии, что в исходном массиве есть элемент равный
// 0 и новый массив будет состоять из всех элементов до первого 0. Например из массива [1,3,0,4,2,0,5,6] будет
// сформирован новый массив, состоящий из чисел до первого нуля [1,3]

function NO_0(arr){
  let id = arr.indexOf(0);
  if(id == -1)
  {
    console.log("В исходном массиве нет элемента = 0");
      return arr;
  }
  else{
    return arr.slice(0, id);
  }

}
console.log(NO_0(arr));

// ● *Функция принимает массив и возвращает его без повторяющихся элементов 

function uniqueElem(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (unique.indexOf(el) === -1) 
      unique.push(el);
  } 
  return unique;
}
console.log(uniqueElem(arr));

//При выполнении задания можете использовать следующие методы: push(), reduce(), splice(), map(), slice(), filter()