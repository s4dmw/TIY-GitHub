(function(){
  // console.log("IIFE working!") //tracer bullet
  // $.ajax({url: "https://api.github.com/users/octocat"});
  // console.log($.ajax({url:"../apis/github/users/octocat.json"}));
  console.log($.ajax("../apis/github/users/octocat.json"));
  $.ajax("../apis/github/users/octocat.json").then(function(){
    console.log(arguments)
  });
  var email;
  console.log("first email: " + email);
  $.ajax("../apis/github/users/octocat.json").then(function(){
    console.log(arguments[0].email);
    email = arguments[0].email;
    console.log("email: " + email);
  });
  console.log("outside the function - email: " + email);

})();
