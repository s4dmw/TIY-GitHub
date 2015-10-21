(function(){

  $("nav#tabs a").on('click', function(){
    $(this).addClass("active").siblings().removeClass("active");
    activeId = 'section#' + $(this).attr("id");
    $(activeId).addClass("active").siblings().removeClass("active");
  });
  $("nav a#repos").trigger('click'); //triggers click to make the repos tab active by default

  //mobile tabs
  $("nav#tablet-view-left").click(function(){
    $(this).addClass("active");
    $("nav#tablet-view-right").removeClass("active");
    $("section#user-info").addClass("active");
    $("section#repos").addClass("active");
  });
  $("nav#tablet-view-left").trigger('click');

  $("nav#tablet-view-right").click(function(){
    $(this).addClass("active");
    $("nav#tablet-view-left").removeClass("active");
    $("section#user-info").removeClass("active");
    $("section#repos").addClass("active");
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
      // console.log(repos);
      $("li :contains('name')").html(repos.name);
      $("li :contains('description')").html(repos.description);
      $("li :contains('updated_at')").html(repos.updated_at);
      $("li :contains('language')").html(repos.language);
      $("li :contains('stargazers_count')").html(repos.stargazers_count);
      $("li :contains('forks_count')").html(repos.forks_count);
    }); //end repos section

})();
