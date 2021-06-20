$('.contact-info').mouseenter(function() {
    $(this).addClass('add-border').addClass('change-text');
});

$('.contact-info').mouseleave(function() {
    $(this).removeClass('add-border').removeClass('change-text');
});


function handleCopyTextFromParagraph() {
  const body = document.getElementById('mail-address');
  const paragraph = document.getElementById('mail-address');
  const area = document.createElement('textarea');
  body.appendChild(area);

  area.value = paragraph.innerText;
  area.select();
  document.execCommand('copy');

  body.removeChild(area);
  alert("Copied to clipboard")
}

