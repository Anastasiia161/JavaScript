// 1. Написать функцию, которая считает количество слов в предложении
function str(string) { 
    return string.split(' ').length;
}
console.log(str("мама мыла раму"));

// 2. Написать функцию, которая принимает словосочетание и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS, объектно ориентированное программирование в ООП.
function abr(str){
    str = str.trim();
    let srtoka = str[0];
for(let i=0;i<str.length;){
    i = str.indexOf(" ", i);
        if(i==-1){
            break;
        } 
        else{
            ++i;
        }
        srtoka += str.substr(i, 1);
}
srtoka = srtoka.toUpperCase();
return srtoka;
}
console.log(abr("cascading style sheets"));

// 3. Написать функцию, которая проверяет, что введенный
// телефон соответствует шаблону, пример телефона: 555-55-55

function checkStr(str){
    return /^\d\d\d-\d\d-\d\d$/.test(str);
}
//console.log(checkStr("555-55-55"));
let num = prompt("Введите номер телефона");
if(checkStr(num)){
    alert("Номер введен верно");
}
else{
    alert("Номер введен не верно");
}
