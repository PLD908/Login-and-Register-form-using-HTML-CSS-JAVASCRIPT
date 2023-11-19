var x = document.getElementById('sign-up')
  x.style.display = "none";

function signUp() {
   var x = document.getElementById('sign-up')
     x.style.display = "block";

     var y = document.getElementById('sign-in')
     y.style.display = "none";
}

function signIn() {
   var x = document.getElementById('sign-in')
     x.style.display = "block";

     var y = document.getElementById('sign-up')
     y.style.display = "none";
}