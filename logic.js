function displayTime() {

  // let newFlag = localStorage.getItem("newFlag");

  if (flag == 1) {
    const destDate = new Date(eventdate);
    const currDate = new Date();

    const millisec = destDate - currDate;

    if(millisec < 0 ){
      
      document.getElementById("days").innerHTML = "0";
      document.getElementById("hours").innerHTML = "0";
      document.getElementById("minutes").innerHTML = "0";
      document.getElementById("secs").innerHTML = "0";
      document.getElementById("head").innerHTML = "Event Name";

    }

    else{
      const sec = Math.floor(millisec / 1000);
      const minutes = Math.floor(sec / 60);
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)
  
      const dispDays = days;
      const dispHours = hours - days * 24;
      const dispMinutes = minutes - hours * 60;
      const dispSecs = sec - minutes * 60;
  
      document.getElementById("days").innerHTML = dispDays;
      document.getElementById("hours").innerHTML = dispHours;
      document.getElementById("minutes").innerHTML = dispMinutes;
      document.getElementById("secs").innerHTML = dispSecs;
      document.getElementById("head").innerHTML = eventname;

    }

    


  }
  else {
    // console.log("reseted")

    document.getElementById("days").innerHTML = "0";
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("secs").innerHTML = "0";
    document.getElementById("head").innerHTML = "Event Name";

  }


}




var flag = 1;

function changeFlag() {
  console.log("inside changeFlag")

  const currentDate = new Date();

  localStorage.setItem("event", "Event Name");
  localStorage.setItem("date", currentDate);

  flag = 0;
}

function StartCountDown(){
  flag=1;
}

setInterval(displayTime, 1000);

document.getElementById("submit-btn").addEventListener("click", StartCountDown);  // If we write StartCount() instead of StartCount then its executed without being called
document.getElementById("reset").addEventListener("click", changeFlag);


// console.log(flag)



var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const form = document.getElementById('modal-form');


form.addEventListener('submit', (event) => {
  // handle the form data

  let eventName = form.elements['event-name'].value;
  let eventDate = form.elements['event-date'].value;

  localStorage.setItem("event", eventName);
  localStorage.setItem("date", eventDate);


});

let eventname = localStorage.getItem("event");
let eventdate = localStorage.getItem("date");

console.log(eventdate)
console.log(eventname)


const currentdate1 = new Date();
const currentdate2 = new Date();

console.log(currentdate1 - currentdate2);