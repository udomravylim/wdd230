document.addEventListener("DOMContentLoaded", function () {
  // Check if localStorage is supported
  if (typeof Storage !== "undefined") {
    var lastVisit = localStorage.getItem("lastVisit");
    var currentDate = new Date();
    var currentTimestamp = currentDate.getTime();
    var oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds

    if (!lastVisit) {
      // First visit
      document.getElementById("message").innerHTML =
        "Welcome! Let us know if you have any questions.";
    } else {
      lastVisit = parseInt(lastVisit);
      var daysSinceLastVisit = Math.round(
        Math.abs((currentTimestamp - lastVisit) / oneDay)
      );

      if (daysSinceLastVisit < 1) {
        document.getElementById("message").innerHTML = "Back so soon! Awesome!";
      } else {
        if (daysSinceLastVisit === 1) {
          document.getElementById("message").innerHTML =
            "You last visited 1 day ago.";
        } else {
          document.getElementById("message").innerHTML =
            "You last visited " + daysSinceLastVisit + " days ago.";
        }
      }
    }

    // Update localStorage with current visit timestamp
    localStorage.setItem("lastVisit", currentTimestamp);
  } else {
    // LocalStorage not supported
    document.getElementById("message").innerHTML =
      "Sorry, your browser does not support Local Storage.";
  }
});
