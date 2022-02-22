// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname , email, phone) {
//     this['id'] = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//
// }
//
// let user1 = new User   (1,'Tolik','Ruczka','kropywa_dwdkfoew',235435363);
// let user2 = new User   (2,'Kaktus','Riczka','kropywnyckyj_dwgdffoew',94712954);
// let user3 = new User   (2,'Kakus','Riczk','kronyckyj_dwffoew',123294712954);
//
// console.log(user1);
// console.log(user2);
// console.log(user3);

//  створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User (id, name, surname , email, phone) {
//     this['id'] = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//
// }
// let masyv = [];
// for (let i = 0; i < 10; i++) {
//     masyv[i] = new User (i+1,'gaha','pacha','ratatuj@ve.com',234325343643);
// }
// console.log(masyv);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// function User (id, name, surname , email, phone) {
//     this['id'] = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//
// }
// let masyv = [];
// for (let i = 0; i < 10; i++) {
//     masyv[i] = new User (i+1,'gaha','pacha','ratatuj@ve.com',234325343643);
// }
// let filter = masyv.filter(User => User.id % 2 == 0);
// console.log(filter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// function User (id, name, surname , email, phone) {
//     this['id'] = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//
// }
// let masyv = [];
// for (let i = 0; i < 10; i++) {
//     masyv[i] = new User (i+1,'gaha','pacha','ratatuj@ve.com',234325343643);
// }
// console.log(masyv.sort(function (current, next){
//
// return current.id - next.id;
//
//     }
//
//
// ))


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// function Client (id, name, surname , email, phone, order) {
//     this['id'] = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
//
// let client = new Client (1,'yura','yurawycz','yrthbsg@gfdh.com', 12312623423, ['apple', 'watermelon', 'Slave'])
// console.log(client);
// створити пустий масив, наповнити його 10 об'єктами Client

// let array = [];
//
// for (let i = 0; i < 10; i++) {
//    array[i]  = new Client (1,'yura','yurawycz','yrthbsg@gfdh.com', 12312623423, ['apple', 'watermelon', 'Slave'])
//
// }
// console.log(array);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

function Client (id, name, surname , email, phone, order) {
    this['id'] = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let array = [];

for (let i = 0; i < 10; i++) {
    array[i]  = new Client (1,'yura','yurawycz','yrthbsg@gfdh.com', 12312623423, ['apple', 'watermelon', 'Slave'])

}
    console.log(array.sort( (current, next) => current.order.length-next.order.length

    ))


