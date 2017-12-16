// called at base of members.html

$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var usernameInput = $("input#username-input");
  var passwordInput = $("input#password-input");

      // <script type="text/javascript" src="js/daily.js"></script>

  // When the signup button is clicked, we validate the email, username and password are not blank
  $(".pixel").on("submit", function(event) {
    var moodData = {
      color: $('.chosen').attr('data-color'),
      mood_id: $('.chosen').attr('data-mood'),
      user_id: db.user.user_id
    };

    // If we have an email, username and password, run the signUpUser function
    signUpUser(moodData.color, moodData.mood_id, moodData.user_id);
    // emailInput.val("");
    // usernameInput.val("");
    // passwordInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(color, mood_id, user_id) {
    $.post("/api/dailymoods", {
      color: color,
      mood_id: mood_id,
      user_id: user_id
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});