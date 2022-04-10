// let div = document.createElement('div');
// div.innerText = 'Lesson 9 the best';
// document.body.append(div);
//
// let targess = document.getElementsByClassName('menu')[0];
// targess.append(div);
//
// div.classList.add('wrap','collapse', 'alpha', 'beta');
// document.body.append(div);
//
// let giveColor = document.getElementsByClassName('wrap');
// for (let giveColorElement of giveColor) {
//     giveColorElement.style.color = 'red';
//     giveColorElement.style.backgroundColor = 'blue';
//     giveColorElement.style.fontSize = '40pt';
// }
// let cloneNodeDiv = div.cloneNode();
// document.body.append(cloneNodeDiv);
// cloneNodeDiv.innerText = 'Tolik alokocholik';
// document.body.append(cloneNodeDiv);

// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (let coursesAndDurationArrayElement of coursesAndDurationArray)
// {
//
//     let coursesAndDurationArrayElements = document.createElement('div');
//
//
//     let h2 = document.createElement('h2');
// h2.innerText = `${coursesAndDurationArrayElement.title} ${ coursesAndDurationArrayElement.monthDuration}`;
//
//     coursesAndDurationArrayElements.append(h2);
//
// document.body.append(coursesAndDurationArrayElements);
//
// }


let a = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let as of a) {

    let c = document.createElement('div');
    c.classList.add('item');

    let h1 = document.createElement('h1');
    h1.classList.add('heading');

    let p = document.createElement('p');
    p.classList.add('description');

    h1.innerText = `${as.title}`;

    p.innerText = `${as.monthDuration}`;

    c.append(h1, p);
    document.body.append(c);
}







//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

