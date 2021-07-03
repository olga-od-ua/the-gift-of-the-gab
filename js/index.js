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
  alert("Copied to clipboard")
}

function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;
     document.body.innerHTML = printContents;
     window.print();
     document.body.innerHTML = originalContents;

}


var exampleEl = document.getElementById('phrase')
var tooltip = new bootstrap.Tooltip(exampleEl, options)


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
    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h " 
    document.getElementById("mins").innerHTML = minutes + "m " 
    document.getElementById("secs").innerHTML = seconds + "s " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    }, 1000);
}



//Accent request function


function ShowHideAccents(chkAccentRequest) {
        var divAccents = document.getElementById("divAccents");
        divAccents.style.display = chkAccentRequest.checked ? "block" : "none";
    }