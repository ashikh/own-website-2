function validate(form) {
var returnValue = true;
var username = form.txtUserName.value;
var password1 = form.txtPassword.value;
var password2 = form.txtPassword2.value;
if(username.length < 6) {
returnValue = false;
alert(“Your username must be at least\n6 characters long.\n
Please try again.”);
document.frmRegister.txtUserName.focus();
}
if (password1.length < 6) {
returnValue = false;
alert(“Your password must be at least\n6 characters long.\n
Please try again.”);
document.frmRegister.txtPassword.value = “”;
document.frmRegister.txtPassword2.value = “”;
document.frmRegister.txtPassword.focus();
}
if (password1 != password2) {
returnValue = false;
alert(“Your password entries did not match.\nPlease try again.”);
document.frmRegister.txtPassword.value = “”;
document.frmRegister.txtPassword2.value = “”;
document.frmRegister.txtPassword.focus();
}
return returnValue;
}