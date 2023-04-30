// 1. Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).
let age=prompt("Введите Ваш возраст");
age=parseInt(age);  
 if(age>=0 && age<=120){
     alert("Данные введены корректно");
    }
 else alert("Данные введены не корректно");

//  2. Запросить у пользователя число и вывести его модуль (|7| = 7,|-7| = 7).
let num=prompt("Введите число:");
num=parseInt(num);
if(num<0){
    alert("Модуль Вашего числа = "+num*(-1));
    }
else alert("Модуль Вашего числа = "+num);

// 3 и 4. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: 
// от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
let summ=prompt("Введите сумму покупки:");
switch(true){
    case summ>500:alert("Сумма со скидкой = "+summ/100*93); break;
    case summ>300:alert("Сумма со скидкой = "+summ/100*95); break;
    case summ>200:alert("Сумма со скидкой = "+summ/100*97); break;
    default:alert("Скидка не прошла. Сумма покупки = "+summ); break;
}
   
// 5. *Запросить у пользователя трехзначное и число и проверить,
// есть ли в нем одинаковые цифры.
let number=prompt("Введите трехзначное число");
number=parseInt(number);
if(99<number<1000){
let number1=parseInt(number/100);
let number2=parseInt(number/10%10);
let number3=parseInt(number%10);

    if(number1==number2 || number2==number3 || number1==number3) {
         alert("В числе есть одинаковые цифры");
        }
    else alert("В числе нет одинаковых цифр");
}
else alert("Введенное число Не 3-х значное");



//alert(number1+"ii"+number2+"ii"+number3);
// switch(true){
//     case number1=number2:alert("1 и 2 цифра одинаковые"); break;
//     case number2=number3:alert("2 и 3 цифра одинаковые"); break;
//     case number1=number3:alert("1 и 3 цифра одинаковые"); break;
    //default:alert("Нет одинаковых цифр");
//}

