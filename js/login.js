document.getElementById("signIn-btn").addEventListener("click", () => {

    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    let userRecords = new Array();
    userRecords = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []; 
    if(userRecords.some(user => { return user.userName == userName && user.password == password }))
    {
        window.location.href="../pages/booking.html";
        alert("You successfully logged in");
        sessionStorage.setItem("LoggedIn", userName);
    }
    else
    {
        alert('Username or password is wrong');
    }
})