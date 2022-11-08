
    // 아이디 검사
    document.getElementById("inputId").addEventListener("change",function(){

        const regEx = /^[a-z][A-Za-z0-9\-\_]{5,14}$/; 

        if(regEx.test(this.value)){
            this.style.backgroundColor = "springgreen";
        } else{
            this.style.backgroundColor = "red";
            this.style.color = "white";
        }

    });
    
    const pwMessage = document.getElementById("pwMessage");

    
    // 비밀번호 검사
    document.getElementById("inputPw").addEventListener("keyup",function(){
        
        if(inputPw.value == inputPwConfirm.value){
            pwMessage.innerText = "비밀번호 일치";
            pwMessage.style.color = "green";
        } else{
            pwMessage.innerText = "비밀번호 불일치";
            pwMessage.style.color = "red";
        }
        
        
        
    });

    // 비밀번호 확인 검사 
    document.getElementById("inputPwConfirm").addEventListener("keyup",function(){

        if(inputPw.value.trim().length == 0){
            alert("비밀번호를 입력해주세요.");
            inputPwConfirm.value ="";
            inputPw.focus();
        }

        if(inputPw.value == inputPwConfirm.value){
            pwMessage.innerText = "비밀번호 일치";
            pwMessage.style.color = "green";
        } else{
            pwMessage.innerText = "비밀번호 불일치";
            pwMessage.style.color = "red";
        }
    });

    // 이름 검사 
    document.getElementById("inputName").addEventListener("change",function(){

        const regEx = /^[가-힣]{2,5}$/;

        if(regEx.test(this.value)){
            nameMessage.innerText = "정상입력"; 
            nameMessage.style.color = "green";
        } else{
            nameMessage.innerText = "한글만 입력하세요."; 
            nameMessage.style.color = "red";
        }
    });


    function validate(){

        // 성별 검사
        const gender = document.querySelector("input[name='gender']:checked");
        if(gender == null ){
            alert("성별을 선택해주세요.");
            return false;
        }

        // 전화번호 검사 
        const inputTel = document.getElementById("inputTel");
        const regEx =  /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

        if(!regEx.test(inputTel.value)){
            alert("전화번호의 형식이 올바르지 않습니다.");
            return false;
        }
        // 이메일 검사 
        const inputEmail = document.getElementById("inputEmail");
        const regEx2 = /^[A-Za-z\d\-\_]{4,}@[가-힣\w\-\_]+(\.\w+){1,3}$/;

        if(!regEx2.test(inputEmail.value)){
            alert("이메일의 형식이 올바르지 않습니다.");
            return false;
        }
        return true;
    
        
    
    

    }



