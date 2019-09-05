document.getElementById('button').addEventListener('click', function() {
   document.querySelector('.bg-modal').style.display = "block";
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
}); 

 function formValidation(){
     var name = document.getElementById('name')
     var email = document.getElementById('email')
     var title = document.getElementById('title')
     var message = document.getElementById('message')

     if (name.nodeValue.lenght == 0) {
        document.getElementById('head').innerText = "* All fields are mandatory *";
        name.focus()
        return false;
     }
    
     if (inputAlphabet(name, "* For your name please use alphabets only *")) {
        if (lengthDefine(name, 6, 8)) {
        if (emailValidation(email, "* Please enter a valid email address *")) {
        if (lengthDefine(message, 4, 20)){
        if (lengthDefine(title, 4, 12)) {
        return true;
        }
        }
        }
        }
        }
        return false;
        }

     function lengthDefine(inputtext, min, max) {
        var uInput = inputtext.value;           
          if (uInput.length >= 4 && uInput.length <= 20) {
           return true;
        } else {
          document.getElementById('p1').innerText = "* Please enter between "+ 6 +" and " + 20 + " characters *";
          inputtext.focus();
        return false;
       }
      }   

      function emailValidation(inputtext, alertMsg) {
        var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
        if (inputtext.value.match(emailExp)) {
        return true;
        } else {
        document.getElementById('p3').innerText = alertMsg;
        inputtext.focus();
        return false;
        }
        }