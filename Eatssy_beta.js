
function togglelogin(){
    document.getElementById("navID").classList.add("active");
    document.getElementById("login").classList.add("active");
    document.getElementById("sign-up").classList.remove("active");
  }
  function CloseSidebar(){
    document.getElementById("navID").classList.remove("active");
    document.getElementById("sign-up").classList.remove("active");
  }
  function toggleSign(){
    document.getElementById("navID").classList.add("active");
    document.getElementById("sign-up").classList.add("active");
    document.getElementById("login").classList.remove("active");
  }