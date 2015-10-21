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

var app = angular.module("tiy-github", [ ]);

app.controller('UserInfo', function(){
  // console.log("UserInfo controller is running");
  // console.log(s4dmw.name);


  this.avatar_url = s4dmw.avatar_url
  this.name = s4dmw.name;
  this.login = s4dmw.login;
  this.company = s4dmw.company;
  this.location = s4dmw.location;
  this.email = s4dmw.email;
  this.blog = s4dmw.blog;
  this.created_at = s4dmw.created_at;
  this.followers = s4dmw.followers;
  this.following = s4dmw.following;

});

  // $.getJSON("../apis/github/users/s4dmw.json", function(){
  //   info = arguments[0];
  //   // console.log(info.name);
  //   $("#user-info img").attr("src", info.avatar_url);
  //   $("h1:contains('name')").html(info.name);
  //   $("h2:contains('login')").html(info.login);
  //   $("li:contains('company')").html(info.company);
  //   $("li:contains('location')").html(info.location);
  //   $("a:contains('email')").html(info.email).attr("href", "mailto:"+info.email);
  //   // console.log(new Date(info.created_at));
  //   $("li:contains('created_at')").html(new Date(info.created_at));
  //   $("strong:contains('followers')").html(info.followers);
  //   $("strong:contains('following')").html(info.following);
  // }); //end user data section
  //
  //
  // //not the right way to do this but just making something happen so i can go to bed!!
  //   $.getJSON("../apis/github/users/s4dmw/repositories.json", function(){
  //     repos = arguments[0][0];
  //     // console.log(repos);
  //     $("li :contains('name')").html(repos.name);
  //     $("li :contains('description')").html(repos.description);
  //     $("li :contains('updated_at')").html(repos.updated_at);
  //     $("li :contains('language')").html(repos.language);
  //     $("li :contains('stargazers_count')").html(repos.stargazers_count);
  //     $("li :contains('forks_count')").html(repos.forks_count);
  //   }); //end repos section

  var s4dmw = {
    "login": "s4dmw",
    "id": 13879097,
    "avatar_url": "https://avatars.githubusercontent.com/u/13879097?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/s4dmw",
    "html_url": "https://github.com/s4dmw",
    "followers_url": "https://api.github.com/users/s4dmw/followers",
    "following_url": "https://api.github.com/users/s4dmw/following{/other_user}",
    "gists_url": "https://api.github.com/users/s4dmw/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/s4dmw/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/s4dmw/subscriptions",
    "organizations_url": "https://api.github.com/users/s4dmw/orgs",
    "repos_url": "https://api.github.com/users/s4dmw/repos",
    "events_url": "https://api.github.com/users/s4dmw/events{/privacy}",
    "received_events_url": "https://api.github.com/users/s4dmw/received_events",
    "type": "User",
    "site_admin": false,
    "name": "David White",
    "company": null,
    "blog": null,
    "location": "Raleigh, NC",
    "email": "dmwhite@gmail.com",
    "hireable": null,
    "bio": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 2,
    "following": 0,
    "created_at": "2015-08-20T01:42:53Z",
    "updated_at": "2015-09-14T20:44:47Z",
    "private_gists": 0,
    "total_private_repos": 0,
    "owned_private_repos": 0,
    "disk_usage": 24024,
    "collaborators": 0,
    "plan": {
      "name": "free",
      "space": 976562499,
      "collaborators": 0,
      "private_repos": 0
    }
  };

})();
