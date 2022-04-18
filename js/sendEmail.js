function sendEmail() {

    var firstName = document.getElementsByName("fornamn")[0].value;
    var lastName = document.getElementsByName("efternamn")[0].value;
    var message = document.getElementsByName("meddelande")[0].value;
    var email = document.getElementsByName("email")[0].value;

    if((firstName || lastName || message || email) == ""){
        if(firstName == ""){
            document.getElementById("fname").style.backgroundColor = "red"
        }
        if(lastName == ""){
            document.getElementById("lname").style.backgroundColor = "red"
        }
        if(email == ""){
            document.getElementById("email").style.backgroundColor = "red"
        }
        if(message == ""){
            document.getElementById("subject").style.backgroundColor = "red"
        }
        alert("Du måste fylla i alla rutor. Kontrollera rutorna och försök igen.");
        return;
    }

    var messageSend = "<html><head></head><body>" + "<h1>Hej från Ehrensvärdskas hemsida gjord av Emil Zackrisson TE2B</h1>" + "<h3>Detta är ett meddelande som " + email + " har skickat via ett project som Emil Zackrisson TE2B har gjort.</h3><br><p>" + message + "</p><p>Detta meddelande är skickat av " + firstName + " " + lastName + "</p><br><p>Besök https://ehrensvardska.emilzackrisson.tk/</p></body></html>"
    
    fetch('https://api.sendinblue.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'api-key': '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',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            "sender": {
                "name": "Ehrensvärdskas Webbsida av Emil Zackrisson",
                "email": "ehrensvardska@emilzackrisson.tk"
            },
            "to": [
                {
                    "email": "emil.zackrisson@gmail.com",
                    "name": "Emil Zackrisson"
                }
            ],
            "subject": "Hej från Ehrensvärdskas hemsida gjord av Emil Zackrisson TE2B",
            "htmlContent": messageSend
        })
    });
    alert("Mailet är nu skickat!");
}