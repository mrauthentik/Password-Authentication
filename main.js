let newPass = document.getElementById('newPass')
let confirmPass = document.getElementById('confirmPass')
let button = document.getElementById('btn')
let showPassword = document.getElementById('showPass')
button.addEventListener('click', ()=>{
    if(confirmPass.value == newPass.value && newPass.value != ''){
        alert('Password Reset Successful')
    }else if(newPass.value == "" || confirmPass.value == ""){
        alert('Please fill out the form to Reset Password')
    }
    else{
        alert('Confirm Password does not match New password try again')
    }
})
showPassword.addEventListener('click', ()=>{
    if(newPass.type && confirmPass.type === "password"){
        newPass.type = 'text'
        confirmPass.type = 'text'
    }else{
        newPass.type='password'
        confirmPass.type = 'password'
    }
})