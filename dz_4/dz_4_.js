// 1. Написать функцию, которая проверяет, является ли переданное ей число
// совершенным. Совершенное число – это число, равное сумме всех своих
// собственных делителей
function perfectNumber(number) {
    let temp = 0;
       for(let i=1;i<=number/2;i++) {
             if(number%i === 0) {
                temp += i;
              }
         }
      
         if(temp === number && temp !== 0) {
           document.writeln("Это идеальное число.");
            }  
          else {
           document.writeln("Это не идеальное число.");
            }  
     }
    let num=+prompt("Введите Ваше число: ");
    perfectNumber(num);
   
    
// 2. Написать функцию возведения числа в степень.
function degree(x,n){
        if (n != 1) { 
          return x * degree(x, n - 1);
        } 
        else {
          return x;
        }
      }
      
      let x=+prompt("Введите число: ");
      let n=+prompt("Введите степень число: ");
      alert(x+" в степени "+ n +" = "+degree(x,n));


// 3. Написать функцию поиска наибольшего общего делителя.
function divider(a, b){
    if (b == 0)
        return a
    else
        return divider(b, a % b)
    }

let a =+prompt("Введите 1 число: ");
let b=+prompt("Введите 2 число: ");
alert("Наибольший делитель "+a+" и "+ b +" : "+divider(a, b));
