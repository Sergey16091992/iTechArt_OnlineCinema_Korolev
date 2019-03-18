// fname
// lname
// email
// sub
function valid(form) {
  let fname = form.fname.value
  let lname = form.lname.value
  let email = form.email.value
  var test_E_mail = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i

  if (fname == '' || fname == ' ') {
    alert('You have not entered your First Name!')
  } else if (lname == '' || lname == ' ') {
    alert('You have not entered your Last Name!')
  } else if (test_E_mail.test(email) == false) {
    alert('E mail is not correct')
  } else {
    var users = []
    if (localStorage.getItem('users') != undefined) {
      //check date on a localStorage
      users = JSON.parse(localStorage.getItem('users')) //continue a write date in a localStorage
    }

    var f = document.getElementById('fname').value
    var l = document.getElementById('lname').value
    var e = document.getElementById('email').value

    var temp = {}
    temp.First_name = f
    temp.Lost_name = l
    temp.email = e
    var id = users.push(temp)
    console.log(user)
    localStorage.setItem('users', JSON.stringify(users))
  }
}

function getUsers() {
  var users = JSON.parse(localStorage.getItem('users'))
  return users
}

function deleteUser(userId) {
  var users = JSON.parse(localStorage.getItem('users'))
  users.splice(userId, 1)
  localStorage.setItem('users', JSON.stringify(users))
}
