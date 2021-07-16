function sendMail(contactForm) {

    let selectedCountry = $('#country :selected').text();
    let selectedAccent = $('#accents :selected').text();
    
    emailjs.send("service_r0g6ngj", "template_ddggyvm", {
"user_email": contactForm.email.value,
"user_name": contactForm.name.value,
"country": selectedCountry,
"the_gift_of_the_gab_message": contactForm.message.value,
"selected_accents": selectedAccent
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Your details were sent successfully! We will get back to you shortly.");
        },
        function(error) {
            console.log("FAILED", error);
            alert("Something went wrong. Please try again or choose an alternative contact method. Thank you!");
        })
    .then (
        function() {
            document.getElementById("myForm").reset(); 
        });
    return false;
}

