//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    })

    .then(posts => {
    let firstElement = document.createElement('div');

    firstElement.classList.add('first');

        for (let post of posts) {


    let carddiv = document.createElement('div');
    carddiv.classList.add('post');

    carddiv.innerHTML =`
            <h3> ID: ${post.id}</h3>
            <h4> Title: ${post.title}</h4>
            <h5> Body: ${post.body}</h5>`
    ;
            firstElement.appendChild(carddiv);
             document.body.appendChild(firstElement);
            }
        });



























// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

