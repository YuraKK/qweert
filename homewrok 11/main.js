//     -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage



// let man = [{id: 1, name : 'Yura', age : 30},
//     {id: 2, name: ' Anatolij', age : 280 },
//     {id: 3, name: 'Petro', age: 70 },
//     {id: 2, name: 'Misza', age: 38 },
//     {id: 3, name: 'Gricha', age: 38  }
// ];
// let storage = localStorage.setItem('man',JSON.stringify(man));
//
//
// let localstorage = localStorage.getItem('man');
// console.log(localstorage);
//
// let parse = JSON.parse(localstorage);
// console.log(parse);


let man = [{id: 1, model : 'Yura', type : 'long'},
       {id: 2, model: ' Anatolij', type : 'long' },
           {id: 3, model: 'Petro', type:  'short'},
           {id: 2, model: 'Misza', type:  'long'},
           {id: 3, model: 'Gricha',type:  'short' }
];
for (let manElement of man) {

    let divman = document.createElement('div');
    divman.innerText = manElement.model;
    let addcardbutton = document.createElement('button');
    addcardbutton.innerText = 'add to card';
    divman.append(addcardbutton);
    addcardbutton.onclick = function (){
        let man = localStorage.getItem('man');
        console.log(man);
        if(!man){
            man = [];
            man.push(manElement);
            let js = JSON.stringify(man);
            localStorage.setItem('man',js);
        }   else {
            let parsse = JSON.parse(man);
       parsse.push(manElement);
       localStorage.setItem('people',JSON.stringify(parsse));
    }


    };


document.body.append(divman);



}