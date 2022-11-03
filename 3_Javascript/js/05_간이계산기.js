// // 1번 방법 
function plus(){
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const result = document.getElementById("result");
    result.innerHTML = Number(input1.value) + Number(input2.value);
}

function minus(){
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const result = document.getElementById("result");
    result.innerHTML = Number(input1.value) - Number(input2.value);
}
function multi(){
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const result = document.getElementById("result");
    result.innerHTML = Number(input1.value) * Number(input2.value);
}
function div(){
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const result = document.getElementById("result");
    result.innerHTML = Number(input1.value) / Number(input2.value);
}
function mod(){
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const result = document.getElementById("result");
    result.innerHTML = Number(input1.value) * Number(input2.value);
}


// 2번 방법
function inputEnter(){
    const num1 = document.getElementById("input1");
    const num2 = document.getElementById("input2");
    const result = document.getElementById("result");
}
function plus(){result.innerHTML = Number(num1.value) + Number(num2.value);}
function minus(){result.innerHTML = Number(num1.value) - Number(num2.value);}
function multi(){result.innerHTML = Number(num1.value) * Number(num2.value);}
function div(){result.innerHTML = Number(num1.value) / Number(num2.value);}
function mod(){result.innerHTML = Number(num1.value) * Number(num2.value);} 


// 3번 방법
// 전역 변수 
const num1 = document.getElementById("input1"); // 요소 추적 0, 값, 속성 추적 X
const num2 = document.getElementById("input2");

function plus(){result.innerText = Number(num1.value) + Number(num2.value);}
function minus(){result.innerText = Number(num1.value) - Number(num2.value);}
function multi(){result.innerText = Number(num1.value) * Number(num2.value);}
function div(){result.innerText = Number(num1.value) / Number(num2.value);}
function mod(){result.innerText = Number(num1.value) % Number(num2.value);}





