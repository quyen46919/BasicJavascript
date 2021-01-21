document.addEventListener('DOMContentLoaded', () => {
    var formData = {
        userName : null,
        passWord : null,
        sayHi : function (){
            console.log('Hello world');
        }
    }

    var userName = document.querySelector('form input[type="email"]');
    var passWord = document.querySelector('form input[type="password"]');
    var form = document.querySelector('form');
    var errorText = document.querySelector('form p.hidden_text');
    userName.addEventListener('keyup', () => {
        formData.userName = userName.value;
        // console.log(formData);
    })
    passWord.addEventListener('keyup', () => {
        formData.passWord = passWord.value;
        // console.log(formData);
        
    })
    form.addEventListener('submit', (e) => {
        let message = [];
        if (formData.userName === null || formData.passWord === null){
            message.push('Username or password incorrect! Please try again');
        }
        else {
            message.push('Login successfully');
        }
        errorText.innerHTML = message;
        console.log(formData);
        console.log(message);
        e.preventDefault();
    })
}, false)
