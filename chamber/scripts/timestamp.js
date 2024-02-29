window.onload = function() {
    // Get the current date and time
    var currentDateTime = new Date().toISOString();
    
    // Set the value of the hidden input field to the current date and time
    document.getElementById("timestamp").value = currentDateTime;
};