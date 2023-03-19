
// // var student_1=['Atharva',18,'SB'];
// // var student_2=[20,'MIT','Akash'];

// // student_1[2];
// // student_2[1];

// ///  objects ///

// // var student= new object();
// // student.school

// var schoolName='school';
// var student=
// {
//     Name: 'Atharva', age : '34', school: 'JNEC'
// };

// console.log(student['Name']);
// console.log(student.age);
// console.log(student.school);
// console.log(student[schoolName]);

// var lion=
// {
//     Name:'lion',
//     school:'Mit',
//     age:40
// };

// lion.age+=1;
// console.log(lion.age);

// lion['school']='MIT';
// console.log(lion['school']);

// var student11=
// {
    
//     Name: 'Atharva',
//     age: 23,
//     friends:['h','g','t'],
//     bestfriend:
//     {
//         firstname:'penny',
//         year:1998
//     }
// };

// var bestfriend_1=student11.bestfriend.firstname;
// console.log(bestfriend_1);

// var d=student11.friends[1];
// console.log(d);

// var colors={};
// colors.orange={ code :123};
// console.log(colors.orange.code);

// colors.black={
//     code:[1,2,3,4,5,6,7,8]
// };
// console.log(colors.black.code);

// var blogPosts=[
//     {
//         title:'weather',
//         content:'it is rainy today',
//         comments: [
//             {
//                 Name:'john',
//                 lastname:'travel'
//             },
//             {
//                 Name:'Atharva',
//                 lastname:'Shengule'
//             },

//         ]
//     },
//     {
//         title:'wheather',
//         content:'It is not rainy today',
//     },

// ];

// console.log(blogPosts[0]);
// console.log(blogPosts[0].title);
// console.log(blogPosts[0].content);
// console.log(blogPosts[0].comments[1].Name);

// ///// QUIZ /////

// var universities=[
//     {
//         Name : 'JNEC',
//         Hasgone: false,
//         year : 1890
//     },

//     {
//         Name : 'MIT',
//         Hasgone: true,
//         year : 1900
//     },

//     {
//         Name : 'OXFORD',
//         Hasgone: true,
//         year : 1800
//     }

// ];

// universities.forEach(function(university){
//     if(university.Hasgone===true)
//     {
//         console.log(university.Name + '  ' + university.year);

//     }
//     else
//     {
//         console.log(university.Name);
//     }
// }

// )

//// objects methods ////

// var sheldon=
// {
//     Name : 'sheldon',
//     age : 35,
//     hasgone : true, 
//     friends : ['penny','Raj'],
//     say : function()
//     {
//         console.log('say hi');
//     }
// }

// sheldon.say();

// var leoperd = {
//     Name : 'leoperd',
//     say : function () {
//         console.log('say hi leoperd');
//     }
// }

//leoperd.say();



// function say()
// {
//     console.log('say hi sheldon');
// }

// say();

// function say() 
// {
//     console.log('say hi leoperd');
// }

// say();


/// THIS KEYWORD ///
//console.log(this);
function add(x,y)
{
    console.log(x+y);
    console.log(this);
}

add(100,200);

var Raj=
{
    name : 'Raj',
    year : 1989,
    sayhi : function() 
    {
        console.log(this);
        console.log('say hi ' + this.name);

        function some()
        {
            console.log(this);
        }
        some();
    }
};
Raj.sayhi();