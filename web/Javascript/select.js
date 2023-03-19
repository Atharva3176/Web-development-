// var h1_element=document.querySelector('h1');

// h1_element.style.color='blue';

// var isyellow=false;
// body_element=document.querySelector('body');
// setInterval(function () {
//     if(isyellow)
//     {
//         body_element.style.background='white';
//     }
//     else
//     {
//         body_element.style.background='yellow';
//     }
//     isyellow=!isyellow;
// } ,1000);

/*var selectWithId=document.getElementById('myparagraph');
console.log(selectWithId);


var selectWithclass=document.getElementsByClassName('background');
console.log(selectWithclass);

var selectWithTag=document.getElementsByTagName('h1');
console.log(selectWithTag);

var selectWithQuery=document.querySelector('h1');
console.log(selectWithQuery);
var selectWithQuery=document.querySelector('#myparagraph');
console.log(selectWithQuery);
var selectWithQueryclass=document.querySelector('.background');
console.log(selectWithQueryclass);

var selectWithQueryAllclass=document.querySelectorAll('.background');
console.log(selectWithQueryAllclass);*/

var Divmanipulate=document.querySelector('.background');

// Divmanipulate.style.height='50px';
// Divmanipulate.style.width='400px';
// Divmanipulate.style.height='50px';
// Divmanipulate.style.backgroundColor='red';
// Divmanipulate.style.fontsize='30px';
// Divmanipulate.style.border='5px solid black';
// Divmanipulate.classList.add('addclass');
// Divmanipulate.classList.remove('addclass');
// Divmanipulate.classList.toggle('addclass');
// Divmanipulate.classList.toggle('addclass');
// var paragraph=document.querySelector('#myparagraph');
// //paragraph.textContent='Atharva is the best but It is true';
// console.log(paragraph.innerHTML);
// paragraph.innerHTML='Oak Academy is the <strong>great</strong>';
// var mylink=document.querySelector('a')
// console.log(mylink.getAttribute('href'));
// mylink.setAttribute('href','https://www.facebook.com/')
// console.log(mylink.getAttribute('href'));
// mylink.textContent='facebook';

///////////////////event handlerss /////////////////
// var button=document.querySelector('#btn');
// var titlevar=document.querySelector('#title')
// button.addEventListener('click',function()
// {
//     console.log('you clicked this button');
//     titlevar.style.backgroundColor='red';
// });
// var list=document.querySelector('ul');
// list.addEventListener('click',function ()
// {
//     console.log('you clicked ul');
//     list.style.background='yellow';
// });

// var element=document.querySelectorAll('li');
// console.log('list items',element);

// for(var i=0; i<element.length;i++)
// {
//     element[i].addEventListener('click', function ()
//     {
//         console.log('you clicked li');
//         this.style.color='white';
//     })
// }

// var oakparagraph=document.querySelector('#myparagraph');
// function togglebackground ()
// {
//     oakparagraph.classList.toggle('togglebackground');
// }
// oakparagraph.addEventListener('click',togglebackground);

var first=document.querySelector('.item');
first.addEventListener('mouseover',function ()
{
    first.style.backgroundColor='blue';
    first.style.color='white';
});

first.addEventListener('mouseout',function()
{
    first.style.background='white';
    
    first.style.color='black';

})

var listitems=document.querySelectorAll('.item');
for(var i=0;i<listitems.length;i++)
{
    listitems[i].addEventListener('mouseover', function()
    {
        this.style.backgroundColor='blue';
        this.style.color='white';
    })

    listitems[i].addEventListener('mouseout',function ()
    {
        this.style.backgroundColor='white';
        this.style.color='black';
    })
    listitems[i].addEventListener('click',function ()
    {
        this.classList.add('okay');
    })
}