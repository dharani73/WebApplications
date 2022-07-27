function validate() {
  var name = document.forms.loginForm.Name.value;
  var password = document.forms.loginForm.Password.value;
  var email = document.forms.loginForm.Email.value;
  var loginEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  var loginName = /\d+$/g;

  if (name == '' || loginName.test(name)) {
    window.alert('Please enter your name properly.');
    name.focus();
    return false;
  }

  if (password == '') {
    alert('Please enter your password');
    password.focus();
    return false;
  }

  if (password.length < 6) {
    alert('Password should be atleast 6 character long');
    password.focus();
    return false;
  }
  if (email == '' || !loginEmail.test(email)) {
    window.alert('Please enter a valid e-mail address.');
    email.focus();
    return false;
  }

  return true;
}
