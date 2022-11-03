
const num1 = document.getElementById("input1"); // 요소 추적 0, 값, 속성 추적 X
const num2 = document.getElementById("input2");
const result =document.getElementById("result");

function calc(op){
            // op에는 + - * / % 중 하나를 얻어옴

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

        switch(op){
            case '+' : result.innerText = n1 + n2; break;
            case '-' : result.innerText = n1 - n2; break;
            case '*' : result.innerText = n1 * n2; break;
            case '/' : result.innerText = n1 / n2; break;
            case '%' : result.innerText = n1 % n2; break;
        }
}




