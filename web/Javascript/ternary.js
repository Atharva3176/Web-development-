// ternary operator //
// var grade=43;

// grade < 45 ? console.log('you cannot go to the next class'): console.log('you can go to the next class');

// var result = grade < 45 ? 'failure': 'success';
// console.log(result);

// switch case statements //
// var day;

// day='monday';

// switch(day)
// {
//     case 'saturday':
//         console.log('I like saturday');
//         break;
    
//     case 'monday':
//         console.log('It is too much bored');
//         break;
    
//     case 'tuesday':
//         console.log('medium');
//         break;
    
//     case 'sunday':
//         console.log('I am so happy I that day');
//         break;
    
//     default:
//         console.log('no day');
//         break;
// }

var grade=38;

switch(true)
{
    case(grade<40) :
    console.log('You cannot go to the next class');
    break;

    case(grade>40 && grade<45) :
    console.log('you are not eligible for the next class but you can give test');
    break;
    
    default:
    console.log('you can go to the next class');
    break;
}

//if(grade<40)
// {
//     console.log('You cannot go to the next class');
// }

// else if (grade>40 && grade<45)
// {
//     console.log('you are not eligible for the next class but you can give test');
// }

// else
// {
//     console.log('you can go to the next class');
// }