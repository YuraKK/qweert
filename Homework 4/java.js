
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//function priamokutnyk (a,b){
//    return a*b;
//}
// document.write (priamokutnyk(10, 12));

//- створити функцію яка обчислює та повертає площу кола з радіусом r

//function kolo (r){
//    return 3.14 * r*r;
//}
//document.write(kolo(8));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//function cylindr (h,r){
//    return 2*h*r;
//}
//document.write(cylindr(10,12));

//- створити функцію яка приймає масив та виводить кожен його елемент
//let massss = [111, 222, 333];

//function masyv (arr){
//    for  (const item of arr) {
//       document.write(item);
//    }
//
//}
//masyv(massss);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент


//function msg(miss){
//
//    document.write(`<h2>${miss}</h2>`)
//}
//msg('Guten Tag');
//msg('Vielen Dank');


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//function licreator1 (value,) {
//        document.write('<ul>');
//        document.write(`<li>${value}</li>`);
//        document.write(`<li>${value}</li>`);
//        document.write(`<li>${value}</li>`);
//        document.write('</ul>');
//}
//licreator1('qweert',);




//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

//function licreator2 (value,n) {
//    for (let i = 0; i < n; i++){
//        document.write('<ul>');
//    document.write(`<li>${value}</li>`);
//    document.write('</ul>');
//    }
//}
//licreator2('item 1', 4);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

 let errr = [213,'Tato','Ostap Vysnia',1, 'sam som'];
 function prymityv (asd)
 {
     document.write(`<ol>`)
         for (let i = 0; i < asd.length; i++) {
             document.write(`<li>${asd[i]}</li>`);
         }
     document.write(`</ol>`)

 }

 prymityv(errr);


//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.