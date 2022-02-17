// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let hw = 'Hello world';
// let empty = '';
// console.log(hw.length);
//
// let pp = 'lorem ipsum';
// let tyu = '';
// console.log(pp.length);
//
// let zxc = 'javascript is cool';
// let fgh = '';
// console.log(zxc.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let wry = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (const string of wry) {
//     console.log(string.toLocaleUpperCase());
// }
//
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let Yura = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (const tato of Yura) {
//     console.log(tato.toLocaleLowerCase());
// }


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let pulia = ' dirty string   ';
// console.log(pulia.replaceAll('  ', ''));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
//
// function stringToarray(str) {
//
// let tilok = str.split(' ')
// return tilok;
//
// }
// console.log(stringToarray(str));
//
//



// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// let delete_characters =(strarr,n)  =>{
//     return strarr.substr(0, n);*/
// }
// document.writeln(delete_characters(str, 7));




// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insert_dash = (str) =>{
//     console.log(str.replaceAll(' ', '-'));
// }
// console.log(insert_dash(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
//
// console.log(capitalizeFirstLetter('father brother'));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
// document.write(capitalize('okten hi you are welcome'));
// console.log(capitalize('okten hi you are welcome'));
// НЕ ВШАРИВ! СПИСАВ .)