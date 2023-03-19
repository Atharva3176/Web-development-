const questions =
[
    {
        que : 'which of the following is the markup language ?',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'JAVASCRIPT',
        'd' : 'PHP',
        'correct': 'a',
    },

    {
        que : 'In which year javascript was launched ?',
        'a' : '1994',
        'b' : '1995',
        'c' : '1996',
        'd' : '1997',
        'correct': 'b',
    },
    {
        que : 'what is the full form of css ?',
        'a' : 'Cascading Style Sheets',
        'b' : 'Casual Style Sheets',
        'c' : 'Characterized style sheets',
        'd' : 'None of above',
        'correct': 'a',
    },
    {
        que : 'who developed c programing langauge ?',
        'a' : 'Guido Van Russam',
        'b' : 'James gosling',
        'c' : 'Dennis Ritchie',
        'd' : 'None of above',
        'correct': 'c',
    }
    
]

let index=0;
let total=questions.length;
let right=0,wrong=0;
const quebox=document.getElementById("quebox")
const optioninputs=document.querySelectorAll('.options')
const loadquestion = () => 
{
    if(index===total)
    {
        return end();
    }
    reset();
    const data =questions[index]
    quebox.innerText=`${index + 1}) ${data.que}`;
    optioninputs[0].nextElementSibling.innerText=data.a;
    optioninputs[1].nextElementSibling.innerText=data.b;
    optioninputs[2].nextElementSibling.innerText=data.c;
    optioninputs[3].nextElementSibling.innerText=data.d;
}

const submitquiz = () =>
{
    const data = questions[index];
    const ans=getanswer()
    if(ans===data.correct)
    {
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getanswer=()=>
{
    let answer;
    optioninputs.forEach
    (
        (input)=>
        {
            if(input.checked)
            {
                console.log("yes")
                answer=input.value;
            }
        }
    )
    return answer;
}

const reset=()=>
{
    optioninputs.forEach
    (
        (input)=>
        {
            input.checked=false;
        }   
    )
}


const end = () =>
{
    document.getElementById('box').innerHTML=`<h3> Thank you for playing the quiz </h3>
    <h2> ${right}/${total} are coreect </h2>`;
}
loadquestion();
