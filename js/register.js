document.getElementById("signUp-btn").addEventListener("click", () => {
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    
    let userRecords=new Array();
    userRecords=JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [];

    if(userRecords.some((user)=>{ return user.userName == userName})){
      alert("This user already exists");
    }
    else
    {
        userRecords.push({ userName, password });
        localStorage.setItem("users", JSON.stringify(userRecords));
        window.location.href="../index.html";
        alert("Your registration has completed");
   }
})