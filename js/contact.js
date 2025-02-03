function sendContact() {
    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let message = document.getElementById('message').value;
    
    if (name != "" && email != "" && message != "") {
        alert("Hi, " + name + "! Thank you for sending this message.");
        alert("This message does not reach the developer's email, it only sends a message to this dialog.");
    } else {
        alert("The form is still empty, please fill it in first!");
    }
}