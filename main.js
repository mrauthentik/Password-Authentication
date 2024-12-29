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

function validateEmail(email) {
    // Regular expression to validate email addresses
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Example usage:
const email = "example@example.com";
if (validateEmail(email)) {
    console.log("Valid email address");
} else {
    console.log("Invalid email address");
}