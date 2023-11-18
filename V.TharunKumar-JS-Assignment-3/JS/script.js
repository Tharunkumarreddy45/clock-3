let stopwatch;
let isPaused = true;
let remtime=0;
function but_1() {
  var days = parseInt(document.getElementById("days").value) || 0;
  var hours = parseInt(document.getElementById("hrs").value) || 0;
  var minutes = parseInt(document.getElementById("min").value) || 0;
  var seconds = parseInt(document.getElementById("sec").value) || 0;
  remtime = days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds;
  if(remtime<0){
    alert("enter valid number");
  }
  else{
    Display();
    arr=["days","hrs","min","sec"];
    for (let i of arr){
      document.getElementById(i).value=0;
    }
  }
}
  function but_2() {
    if (remtime > 0 && isPaused) {
      isPaused = false;
      stopwatch = setInterval(updateTime, 1000);
    }
  }
  function but_3() {
    clearInterval(stopwatch);
    isPaused = true;
  }
  function but_4() {
    clearInterval(stopwatch);
    remtime = 0;
    Display();
  }
  function updateTime() {
    if (remtime > 0) {
      remtime-=1;
      Display();
    }
  }
  function Display() {
    var days = Math.floor(remtime/(24*60*60));
    document.getElementById("showdays").textContent =days;
    var hours = Math.floor((remtime%(24*60*60))/(60*60));
    document.getElementById("showhrs").textContent =hours;
    var minutes = Math.floor((remtime%(60*60))/60);
    document.getElementById("showmin").textContent = minutes;
    var seconds = Math.floor(remtime%60);
    document.getElementById("showsec").textContent = seconds;
  }