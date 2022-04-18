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

    function base64_decode(str) {
        if (window.atob) // Internet Explorer 10 and above  
            return decodeURIComponent(escape(window.atob(str)));
        else {
            // Cross-Browser Method (compressed)  
    
            // Create Base64 Object  
            var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) { var t = ""; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) { n = e.charCodeAt(f++); r = e.charCodeAt(f++); i = e.charCodeAt(f++); s = n >> 2; o = (n & 3) << 4 | r >> 4; u = (r & 15) << 2 | i >> 6; a = i & 63; if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 } t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a) } return t }, decode: function (e) { var t = ""; var n, r, i; var s, o, u, a; var f = 0; e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); while (f < e.length) { s = this._keyStr.indexOf(e.charAt(f++)); o = this._keyStr.indexOf(e.charAt(f++)); u = this._keyStr.indexOf(e.charAt(f++)); a = this._keyStr.indexOf(e.charAt(f++)); n = s << 2 | o >> 4; r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a; t = t + String.fromCharCode(n); if (u != 64) { t = t + String.fromCharCode(r) } if (a != 64) { t = t + String.fromCharCode(i) } } t = Base64._utf8_decode(t); return t }, _utf8_encode: function (e) { e = e.replace(/\r\n/g, "\n"); var t = ""; for (var n = 0; n < e.length; n++) { var r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) { t += String.fromCharCode(r >> 6 | 192); t += String.fromCharCode(r & 63 | 128) } else { t += String.fromCharCode(r >> 12 | 224); t += String.fromCharCode(r >> 6 & 63 | 128); t += String.fromCharCode(r & 63 | 128) } } return t }, _utf8_decode: function (e) { var t = ""; var n = 0; var r = c1 = c2 = 0; while (n < e.length) { r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r); n++ } else if (r > 191 && r < 224) { c2 = e.charCodeAt(n + 1); t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2 } else { c2 = e.charCodeAt(n + 1); c3 = e.charCodeAt(n + 2); t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63); n += 3 } } return t } }
            // Encode the String  
            return decodeURIComponent(escape(Base64.decode(str)));
        }
    }

    var messageSend = "<html><head></head><body>" + "<h1>Hej från Ehrensvärdskas hemsida gjord av Emil Zackrisson TE2B</h1>" + "<h3>Detta är ett meddelande som " + email + " har skickat via ett project som Emil Zackrisson TE2B har gjort.</h3><br><p>" + message + "</p><p>Detta meddelande är skickat av " + firstName + " " + lastName + "</p><br><p>Besök https://ehrensvardska.emilzackrisson.tk/</p></body></html>"
    
    var encryptedKey = "eGtleXNpYi05NWI2OTBhZDg2ODMxNjUyMWJlN2Y2NWYyMjI4Y2VjM2ZmY2RkZTZkZmNlZjQ4MTI2NzM3OTU2Yzg1MmU1MDVjLVNBOHpXNk1LVkowZk9MMzI="
    fetch('https://api.sendinblue.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'api-key': base64_decode(encryptedKey),
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