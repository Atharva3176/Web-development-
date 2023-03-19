// // Arrays Declaration//

// // var students = ['Atharva','Akash','Disha','Vedshreee'];

// // console.log(students[0]);
// // console.log(students);

// // students[0]='karan';
// // console.log(students);

// // students[4]='Harry';
// // console.log(students);

// // var cats=[];
// // var Cats= new Array();

// // var commonData=['john',1000,true,null];
// // commonData[1];

// // var cars=['maruti','BMW','Audi','Ford','Wagnar'];
// // var cars_length=cars.length;
// // console.log(cars_length);

// //////  Arrays methods  ///////

// var students=['Atharva','Akash','Disha','Nimisha','vedshree'];

// // push Method add new element at the end of an array//

// students.push('Karan');
// console.log(students);
// students.push('Sandesh')
// console.log(students);
// /// pop method //

// students.pop();
// console.log(students);
// students.pop();
// console.log(students);
// var last=students.pop();
// console.log(last);
// console.log(students);

// /// shift and unshift method //
// var cats=[1,2,3,4,5,6];
// console.log(cats);
// cats.unshift(9);
// console.log(cats);
// cats.shift();
// console.log(cats);
// cats.shift();
// console.log(cats);

// ///// indexof /////

// console.log(students.indexOf('Disha'));

// /// slice ////
// var friends = ['Dog','cat','elephant','mouse'];
// var close=friends.slice(1,3);
// console.log(friends);
// console.log(close);
// var friends_1=friends.slice();
// console.log(friends_1);

// /// Assinment ////
// var books=['Harry Potter','Hobbit','Hunger games','Little Prince'];
// console.log(books[books.length-1]);

// var films=[['H1','H2','H3'],['M1','M2','M3'],['Godfather1','G2','Godfather_3']];
// console.log(films[2][2]);
// var books=['Harry Potter','Hobbit','Hunger games','Little Prince'];
// // var i;
// // for(i=0;i<books.length;i++)
// // {
// //     console.log(books[i]);
// // }

// books.forEach(function(book)
// {
//     console.log(book);
// });

//Quiz//

var numbers=[];
var i;
for(i=0;i<=20;i++)
{
    numbers.push(i);
}

console.log(numbers);

numbers.forEach(function(num)
{
    if(num%5===0)
    {
        console.log(num);
    }
});