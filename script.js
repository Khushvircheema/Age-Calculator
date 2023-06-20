$(document).ready(function () {
  $("form").submit((e) => {
    // this prevents from form submission
    e.preventDefault();
    let myMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // BirthDay Input from user
    var d = $(".day").val();
    var m = $(".month").val() - 1;
    var y = $(".year").val();

    // Getting today's date
    var todaysDate = new Date();
    var birthday = new Date(y, m, d);

    // Age in milliseconds
    var ageInMilliSeconds = todaysDate - birthday;
    var ageDate = new Date(ageInMilliSeconds);

    // Age in years months and days. Took from ageDate
    let years = ageDate.getUTCFullYear() - 1970;
    let months = ageDate.getUTCMonth();
    let days = ageDate.getUTCDate() - 1;

    // Form validation
    if (d === "" || d == null) {
      alert("Please enter your day.");
      $("form")[0].reset();
      resetOutput();
      return;
    }

    if (m === "" || m == null) {
      alert("Please enter your month.");
      $("form")[0].reset();
      resetOutput();
      return;
    }
    let monthTotalDays = myMonth[m];
    console.log(monthTotalDays);
    if (d > monthTotalDays) {
      alert(`Month has ${monthTotalDays} days`);
      $("form")[0].reset();
      resetOutput();
      return;
    }
    if (y === "") {
      alert("Please enter your year.");
      $("form")[0].reset();
      resetOutput();
      return;
    }
    if (y == todaysDate.getUTCFullYear()) {
      if (m == todaysDate.getUTCMonth()) {
        if (d > todaysDate.getUTCDate()) {
          alert("Please enter Valid date.");
          $("form")[0].reset();
          resetOutput();
          console.log(todaysDate.getFullYear());
          return;
        }
      }
    }
    if (y > todaysDate.getUTCFullYear()) {
      alert("Please enter Valid year.");
      $("form")[0].reset();
      resetOutput();
      console.log(todaysDate.getFullYear());
      return;
    }

    // reset output
    function resetOutput() {
      $(".years").text("--");
      $(".months").text("--");
      $(".days").text("--");
    }
    // Output
    $(".years").text(years);
    $(".months").text(months);
    $(".days").text(days);
  });
});
