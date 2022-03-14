document.getElementById('booking-section').addEventListener('click', event => {
    const text = event.target.innerText;
    const result = document.getElementById("result");

    const loggedIn = sessionStorage.getItem("LoggedIn");
    // console.log(loggedIn);

    let bookingData = new Array();
    bookingData = JSON.parse(localStorage.getItem("booking-data")) ? JSON.parse(localStorage.getItem("booking-data")) : [];
    // console.log(bookingData);
    
    const loggedData = bookingData.find(data => data.userName == loggedIn);
    // console.log(loggedData?.seat);

    if(loggedData){
        if(loggedData?.seat.includes(text)){
            alert("This seat is already booked");
        }else{
            loggedData?.seat.push(text);
            localStorage.setItem("booking-data", JSON.stringify(bookingData));
            result.innerHTML += `${text}` + ' ';
            alert("Your new seat added in the list");
        }
    }else{
        bookingData.push({ userName: loggedIn, seat: [ text ] })
        localStorage.setItem("booking-data", JSON.stringify(bookingData));
        result.innerHTML = `${text}` + ' ';
        alert("Your booked has completed");
    }

});