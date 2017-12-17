var Nightmare = require("nightmare");

// STORY: As a user, I want to be able to login.
new Nightmare({ show: true })
  .goto("https://mood-in-pixels-2180m.herokuapp.com/")
  .click("a[href='/login']")
  // Enter username.
  .type("#username-input", "username")
  // Enter password.
  .type("#password-input", "password")
  // Take a screenshot of the login form.
  .screenshot("login.png")
  // End test
  .end()
  // Execute commands
  .then(function() {
    console.log("Done!");
  })
  // Catch errors
  .catch(function(err) {
    console.log(err);
  });
