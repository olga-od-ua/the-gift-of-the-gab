let activeAudio = null;

//Flashing cards
  function store (clickedCourseId) {
  var clickedCourse = document.getElementById(clickedCourseId).innerText;
      
  sessionStorage.setItem("clickedCourse", clickedCourse);
 
  location.href = "course_info.html";
}



function get () {

  var clickedCourse = sessionStorage.getItem("clickedCourse");

  if (clickedCourse == "General Course") {
        document.getElementById('general-english-card').classList.add('hvr-pulse-shrink');
  } else if (clickedCourse == "Business English") {
    document.getElementById('business-english-card').classList.add('hvr-pulse-shrink');
  } else if (clickedCourse == "Hospitality English") {
    document.getElementById('hospitality-english-card').classList.add('hvr-pulse-shrink');
  } else if (clickedCourse == "Intensive Learning") {
    document.getElementById('intensive-learning-card').classList.add('hvr-pulse-shrink');
  } else if (clickedCourse == "Individual Lessons") {
    document.getElementById('individual-lessons-card').classList.add('hvr-pulse-shrink');
  } else if (clickedCourse == "Group Lessons") {
    document.getElementById('group-lessons-card').classList.add('hvr-pulse-shrink');
  } else if (clickedCourse == "First Lesson FREE") {
    document.getElementById('free-lesson-card').classList.add('hvr-pulse-shrink');
  } else if (clickedCourse == "Group Lessons") {
    document.getElementById('group-lessons-card').classList.add('hvr-pulse-shrink');
  }
        sessionStorage.removeItem("clickedCourse");
        sessionStorage.clear();
    }




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





//-------------------- About Us page ----------- (credit to loosenthedark for assistance on Slack with combining the two functions: makeTeacherSing and makeTeacherDance, as well as with helping reuse the function on each image)
function makeTeacherPerform(e) {
    let audio = e.target.nextElementSibling;
    if (audio.paused) {
      if (activeAudio) {
        activeAudio.pause();
      }
      activeAudio = audio;
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
var tooltip = new bootstrap.Tooltip(exampleEl, null);


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















  
