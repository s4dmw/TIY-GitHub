(function(){
  // console.log("IIFE working!") //tracer bullet
  // $.ajax({url: "https://api.github.com/users/octocat"});
  // console.log($.ajax({url:"../apis/github/users/octocat.json"}));


  // console.log($.ajax("../apis/github/users/octocat.json"));
  // $.ajax("../apis/github/users/octocat.json").then(function(){
  //   console.log(arguments)
  // });
  // var email;
  // console.log("first email: " + email);
  // $.ajax("../apis/github/users/octocat.json").then(function(){
  //   console.log(arguments[0].email);
  //   email = arguments[0].email;
  //   console.log("email: " + email);
  // });
  // console.log("outside the function - email: " + email);

  $("nav#tabs h3").on('click', function(){
    // console.log("clicked a tab");
    $("nav#tabs h3").removeClass("active");
    $(this).addClass("active");
    $elementId = $("h3.active").get(0).id;
    // console.log($elementId);
    $("section.panel").addClass("inactive");
    $("section#"+$elementId).removeClass("inactive");
  });

  $.getJSON("../apis/github/users/s4dmw.json", function(){
    info = arguments[0];
    // console.log(info.name);
    $("#user-info img").attr("src", info.avatar_url);
    $("h1:contains('name')").html(info.name);
    $("h2:contains('login')").html(info.login);
    $("li:contains('company')").html(info.company);
    $("li:contains('location')").html(info.location);
    $("a:contains('email')").html(info.email).attr("href", "mailto:"+info.email);
    // console.log(new Date(info.created_at));
    $("li:contains('created_at')").html(new Date(info.created_at));
    $("strong:contains('followers')").html(info.followers);
    $("strong:contains('following')").html(info.following);
  }); //end user data section

//not the right way to do this but just making something happen so i can go to bed!!
  $.getJSON("../apis/github/users/s4dmw/repositories.json", function(){
    repos = arguments[0][0];
    console.log(repos);
    $("li :contains('name')").html(repos.name);
    $("li :contains('description')").html(repos.description);
    $("li :contains('updated_at')").html(repos.updated_at);
    $("li :contains('language')").html(repos.language);
    $("li :contains('stargazers_count')").html(repos.stargazers_count);
    $("li :contains('forks_count')").html(repos.forks_count);
  }); //end repos section

})();
