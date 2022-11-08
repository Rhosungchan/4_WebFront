
    // 아이디 검사
    document.getElementById("inputId").addEventListener("change", function(){
        
        const regEx = /^[a-z][\w\-\_]{5,13}$/;
        
        if(regEx.test(this.value)){
            this.style.backgroundColor = "springgreen";
        } else{
            this.style.backgroundColor = "red";
            this.style.color = "white";
        }

    });
    
    const inputPw = document.getElementById("inputPw");
    const inputPwConfirm = document.getElementById("inputPwConfirm");
    const pwMessage = document.getElementById("pwMessage");

    // 비밀번호 검사 
    inputPw.addEventListener("keyup",function(){
        if(inputPw.value == inputPwConfirm.value ){
            pwMessage.innerText = "비밀번호 일치";
            
            // 1.직접 작성 방법 
            // pwMessage.style.color = "green";

            // 2. 클래스 이용방법
            pwMessage.classList.add("confirm");
            pwMessage.classList.remove("error");

        } else{
            pwMessage.innerText = "비밀번호 불일치";
            
            // 1.직접 작성 방법 
            // pwMessage.style.color = "red";

            // 2. 클래스 이용방법
            pwMessage.classList.add("error");
            pwMessage.classList.remove("confirm");
        }
    });

    inputPwConfirm.addEventListener("keyup",function(){
        if(inputPw.value == inputPwConfirm.value ){
            pwMessage.innerText = "비밀번호 일치";
            pwMessage.classList.add("confirm");
            pwMessage.classList.remove("error");

        } else{
            pwMessage.innerText = "비밀번호 불일치";
            pwMessage.classList.add("error");
            pwMessage.classList.remove("confirm");
        }
    });
    
    // 비밀번호 확인 검사 
    inputPwConfirm.addEventListener("keyup",function(){
        
        if(inputPw.value.trim().length == 0){
            inputPwConfirm.value = "";
            alert("비밀번호를 입력해주세요");
            inputPw.focus();
        }

    });
    
    // 이름 검사 
    document.getElementById("inputName").addEventListener("change",function(){

            const nameMessage = document.getElementById("nameMessage");
            const regEx = /^[가-힣]{2,5}$/;
            
            if(regEx.test(this.value)){
                nameMessage.innerText = "정상입력";
                nameMessage.classList.add("confirm");
                nameMessage.classList.remove("error");
            
            } else{
                nameMessage.innerText = "한글만 입력해주세요";
                nameMessage.classList.add("error");
                nameMessage.classList.remove("confirm");
            }
    });

    // 성별 검사 
    function validate(){

        // 방법 1
        // const gender = document.getElementsByName("gender");
        // if(!gender[0].checked && !gender[1].checked){
        //     alert("성별을 선택해주세요.");
        //     return false;
        // }
        
        // 방법 2
        // 체크된 성별 라디오 버튼만 얻어오기
        const gender = document.querySelector("input[name='gender']:checked");
        if(gender == null){
            alert("성별을 선택해주세요.");
            return false;
        }

        // 전화번호 검사 
        const inputTel = document.getElementById("inputTel");
        const regEx = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
        
        if(regEx.test(inputTel.value)){
            alert("전화번호의 형식이 올바르지 않습니다");
            return false;
        }
        return true;

    }

