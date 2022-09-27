//======================================== 7.
//Search character
let btnreg = document.getElementById('btn-reg');
let p07 = document.getElementById('paragraph07');
btnreg.onclick = ( function regexVar() {
        let tester = /^([aeiou]).*\1$/;
        document.getElementById('result07').innerHTML = tester.test(p07);
    }
);

//======================================== 8.
//Counting
let buttonCount = document.getElementById('btn');
buttonCount.onclick = ( function increment() {
        buttonCount.innerHTML ++ ;
    }
)

//Make number rotated
let numb1 = document.getElementById('btn-1') 
let numb2 = document.getElementById('btn-2') 
let numb3 = document.getElementById('btn-3') 
let numb4 = document.getElementById('btn-4') 
let numb5 = document.getElementById('btn-5') 
let numb6 = document.getElementById('btn-6') 
let numb7 = document.getElementById('btn-7') 
let numb8 = document.getElementById('btn-8') 
let numb9 = document.getElementById('btn-9') 

numb5.onclick = function rotator() {
    let fixedNumb = numb2.innerHTML;
    numb2.innerHTML = numb1.innerHTML;
    numb1.innerHTML = numb4.innerHTML;
    numb4.innerHTML = numb7.innerHTML;
    numb7.innerHTML = numb8.innerHTML;
    numb8.innerHTML = numb9.innerHTML;
    numb9.innerHTML = numb6.innerHTML;
    numb6.innerHTML = numb3.innerHTML;
    numb3.innerHTML = fixedNumb;
}
//======================================== 9.
