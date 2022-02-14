//Всі функції повинні бути описані стрілочним типом!!!!
//    - створити функцію яка обчислює та повертає площу прямокутника
//let ploszcza = (a,b) => {
//    let result = a * b;
//
//return result
//}
//document.write(ploszcza(3, 5));
//- створити функцію яка обчислює та повертає площу кола
//let ploszcza = (a,b) =>{
//
//    let kolo = a*b*b;
//return kolo
//}
//document.write(ploszcza(3,4));

//- створити функцію яка обчислює та повертає площу циліндру
//let ploszcza = (a,b) => {
//
//    let cylindr = a*b;
//    return cylindr
//}
//document.write(ploszcza(3,8));

//- створити функцію яка приймає масив та виводить кожен його елемент

// let rteert = (arr) =>  {
//
//    for (let arrElement of arr) {
//        document.write(arrElement);
//
//    }
//
//}
//
//let tab = [213,533,3,true,`dfgthr`,false,`retrhngh`,23231];
//rteert(tab);
//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
//let fun = (arr) => {
//    for (const arrElement of arr) {
//        document.write(arrElement)
//    }
//}
//let tab = [123,32,`tergfh`,true, `wfdfgd`];
//fun(tab);
//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//let same = (arr) => {
//    document.write('<ul>');
//        document.write(`<li>${arr}</li>`);
//        document.write(`<li>${arr}</li>`);
//        document.write(`<li>${arr}</li>`);
//    document.write('</ul>');
//
//}
//same('ja ja na');
//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let same = (arr, n) => {
//     for (let i = 0; i < n; i++) {
//
//
//     document.write('<ul>');
//     document.write(`<li>${arr}</li>`);
//     document.write('</ul>');
//     }
// }
//same('ja ja na',4);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let prymityv = (arr) =>{
//
//         document.write(`<ol>`);
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write(`</ol>`);
//
//
// }
//     let tab = [123,32,`tergfh`,true, `wfdfgd`];
// prymityv(tab);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id: 1, name: 'yura', age:22 },
    {id: 2, name: 'roma', age:24 },
    {id: 3, name: 'jane', age:25 }
]
let newarray = (arr) => {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id}.${arrElement.name} - ${arrElement.age}</div>`);
    }
}
newarray(users);