// Carousel index functions:
$(document).ready(function(){
$('#carouselExampleFade').carousel({
    interval: 500,
  })

})
// DataPick functions:
var calendar_from = new SalsaCalendar({
  inputId: 'checkin',
  lang: 'en',
  range: {
    min: 'today'
  },
  calendarPosition: 'left',
  fixed: false,
  connectCalendar: true
});

var calendar_to = new SalsaCalendar({
  inputId: 'checkout',
  lang: 'en',
  range: {
    min: 'today'
  },
  calendarPosition: 'left',

  fixed: false
});
new SalsaCalendar.Connector({
    from: calendar_from,
    to: calendar_to,
    maximumInterval: 21,
    minimumInterval: 1
  });

new SalsaCalendar.NightsCalculator({
  from: calendar_from,
  to: calendar_to,
  nightsNo: 'nights-no'
});

 function clicksearchoff() {$('#modal').modal('hide')
}

// form functions:
function validateForm() {
  var a = document.forms["Form"]["formGroupExampleInput"].value;
  var b = document.forms["Form"]["formGroupExampleInput2"].value;
  var c = document.forms["Form"]["exampleFormControlInput1"].value;
  var d = document.forms["Form"]["exampleInputPassword1"].value;
  var e = document.forms["Form"]["exampleFormControlTextarea1"].value;
  if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "", e == null || e == "") {
        alert("One of the inputs is empty! Please Fill All Required Field");
        return false;
  }
  else if((!verifMail()) ||  (!verifPassword ())) {
    alert("One of the inputs is false ! Please virify  All Required Field");
    return false;
   }
}
function verifMail() {

  var email = document.getElementById("exampleFormControlInput1").value;
  var f = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (!f.test(email))

  {
        $('#exampleFormControlInput1').popover({ content: "Please provide a valid email address !!", placement: "right", trigger: "focus" });
        email.focus;
        document.getElementById("exampleFormControlInput1").style.border = "3px solid red";
        return false;
  }
  else {
        document.getElementById("exampleFormControlInput1").style.borderColor = "#0d244e";
        return true
  }
}
function verifMailnews() {

  var email = document.getElementById("Input1_News").value;
  var f = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (!f.test(email))
  {
        $('#Input1_News').popover({ content: "Please provide a valid email address !!", placement: "right", trigger: "focus" });
        email.focus;
        document.getElementById("Input1_News").style.border = "3px solid red";
        return false;
  }
  else {
        document.getElementById("Input1_News").style.borderColor = "#0d244e";
        return true
  }
}
function verifPassword() {
  var passw = document.getElementById("exampleInputPassword1").value;
  var m = new RegExp("(?=.[!@#-_\$%\^&])");
  var h = new RegExp("(?=.*[0-9])");
  var l = new RegExp("(?=.*[A-Z])");
  if (passw.length < 8) {
        $('#exampleInputPassword1').popover({ content: " has less than 8 characters and  must be a combination of charatacters , numbers and at least a capital letter !!", placement: "right", trigger: "focus" });
        passw.focus;
        document.getElementById("exampleInputPassword1").style.border = "3px solid red";
        return false;} 
 if (!m.test(passw)) {

        $('#exampleInputPassword1').popover({ content: "Please provide a charatacter", placement: "right", trigger: "click" });
        passw.focus;
        document.getElementById("exampleInputPassword1").style.border = "3px solid red";
        return false;
  }
  else if (!h.test(passw)) {
        $('#exampleInputPassword1').popover({ content: "Please provide a number", placement: "right", trigger: "click" });
        passw.focus;
        document.getElementById("exampleInputPassword1").style.border = "3px solid red";
        return false;
  }
  else if (!l.test(passw)) {
        $('#exampleInputPassword1').popover({ content: "Please provide a valid password with at least a capital letter", placement: "right", trigger: "click" });
        passw.focus;
        document.getElementById("exampleInputPassword1").style.border = "3px solid red";
        return false;
  }
  else {
        document.getElementById("exampleFormControlInput1").style.borderColor = "#0d244e";
        return true
  }
}
function resetcontent() {
  document.forms[0].reset();

}
// Validate Subscribe Newsletter
function Validate_Subscribe() {
  var newsletter = document.getElementById("Input1_News").value;
  if (newsletter == null  || newsletter == "") {
        alert("the input is empty! ");
        return false;
  }
  else if(!verifMailnews())  {
    alert("the input is false ! Please virify Required Field");
    return false;
   }
   else {document.getElementById("Input1_News").value='';}
}
// Chat Window
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// loadpageTour

function clicksearchoff() {
 $('#modal').modal('hide')

}

