const num1 = document.getElementById("input1"); // 요소 추적 0, 값, 속성 추적 X
const num2 = document.getElementById("input2");

const result = document.getElementById("result");

function calc(btn){
    // btn == 클릭 이벤트가 발생한 버튼 요소

    const n1 = Number(num1.value);
    const n2 = Number(num2.value);
    const op = btn.innerText;
    
    // result.innerText = eval(n1 + op + n2);
    
    // eval("코드 형식의 문자열")
    // -> 매개변수의 문자열을 JS코드로 해석/수행하는 함수 
    // -> 속도가 느림 + 보안 이슈로 인해 사용 지양(사용하지 마요...)
    // 해결 방법 : new Function() 사용 

    result.innerText = new Function("return "+ n1 + op + n2)();

}




