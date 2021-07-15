// ---------- Course Info Page ------------- //
$('#learn-more-button1').click(function() {
  $('#general-english').slideToggle(500);
});

$('#learn-more-button2').click(function() {
  $('#individual-lessons').slideToggle(500);
});
  
$('#learn-more-button3').click(function() {
  $('#group-lessons').slideToggle(500);
});

$('#learn-more-button4').click(function() {
  $('#business-english').slideToggle(500);
});

$('#learn-more-button5').click(function() {
  $('#hospitality-english').slideToggle(500);
});

$('#learn-more-button6').click(function() {
  $('#regular-paced-learning').slideToggle(500);
});

$('#learn-more-button7').click(function() {
  $('#intensive-learning').slideToggle(500);
});


function highlightCard() {
  
  let cardToHighlight = window.document.getElementById("test-test-card");
  cardToHighlight.classList.add('highlighted-card');
}


//-------------------- About Us page ----------- (credit to loosenthedark for assistance on Slack with combining the two functions: makeTeacherSing and makeTeacherDance, as well as with helping reuse the function on each image)
function makeTeacherPerform(e) {
    let audio = e.target.nextElementSibling;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }

audio.addEventListener("playing", function() {
  let teacher = this.previousElementSibling;
   teacher.classList.add('teacher-dancing');
});

audio.addEventListener("pause", function() {
  let teacher = this.previousElementSibling;
   teacher.classList.remove('teacher-dancing');
});
}


/* ---- Initial idea, incomplete --------
// -------- Make Teacher Sing function ------- //
function makeTeacherSing(id) {
  let audio = document.getElementById(id);
  if (audio.paused) {audio.play()}
     else {audio.pause()};
}

// Make Teacher Dance function
 function makeTeacherDance(id) { 
let aud = document.getElementById("audio1");
aud.addEventListener("playing", function() {
  let teacher = document.getElementById(id);
   teacher.classList.add('teacher-dancing');
});
aud.addEventListener("pause", function() {
  let teacher = document.getElementById(id);
   teacher.classList.remove('teacher-dancing');
});
} */

// Hover-over-teacher function
$('.photo-block').mouseenter(function() {
  $(this).addClass('hover-over-teacher');
});

$('.photo-block').mouseleave(function() {
  $(this).removeClass('hover-over-teacher');
});

// ------- CONTACT PAGE -------- //
$('.contact-info').mouseenter(function() {
  $(this).addClass('add-border').addClass('change-text');
});

$('.contact-info').mouseleave(function() {
  $(this).removeClass('add-border').removeClass('change-text');
});


function handleCopyTextFromParagraph() {
  const body = document.getElementById('mailAddress');
  const paragraph = document.getElementById('mailAddress');
  const area = document.createElement('textarea');
  body.appendChild(area);

  area.value = paragraph.innerText;
  area.select();
  document.execCommand('copy');

  body.removeChild(area);
  alert("Copied to clipboard");
}


function printDiv(divName) {
     let printContents = document.getElementById(divName).innerHTML;
     let originalContents = document.body.innerHTML;
     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;

}


var exampleEl = document.getElementById('phrase');
var tooltip = new bootstrap.Tooltip(exampleEl, options);


// Countdown function

function countdown() {
  // The data/time we want to countdown to
    var countDownDate = new Date("Dec 25, 2021 23:59:59").getTime();

    // Run myfunc every second
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    document.getElementById("days").innerHTML = days + "d ";
    document.getElementById("hours").innerHTML = hours + "h ";
    document.getElementById("mins").innerHTML = minutes + "m ";
    document.getElementById("secs").innerHTML = seconds + "s "; 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = "";
        document.getElementById("hours").innerHTML = ""; 
        document.getElementById("mins").innerHTML = "";
        document.getElementById("secs").innerHTML = "";
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    }, 1000);
}



//Accent request function

function ShowHideAccents(chkAccentRequest) {
        var divAccents = document.getElementById("divAccents");
        divAccents.style.display = chkAccentRequest.checked ? "block" : "none";
}















  
