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

angular.module("tiy-github", [])

.run(function($rootScope) {
    $rootScope.name = s4dmw.name;
    $rootScope.avatar_url = s4dmw.avatar_url
    $rootScope.name = s4dmw.name;
    $rootScope.login = s4dmw.login;
    $rootScope.company = s4dmw.company;
    $rootScope.location = s4dmw.location;
    $rootScope.email = s4dmw.email;
    $rootScope.blog = s4dmw.blog;
    $rootScope.created_at = s4dmw.created_at;
    $rootScope.followers = s4dmw.followers;
    $rootScope.following = s4dmw.following;

    $rootScope.forks_count = repo.forks_count;
    $rootScope.stargazers_count = repo.stargazers_count;
    $rootScope.language = repo.language;
    $rootScope.name = repo.name;
    $rootScope.description = repo.description;
    $rootScope.updated_at = repo.updated_at;

    // $http.get("../apis/github/users/s4dmw.json")
    // });
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

var repo = {
  "id": 42467683,
  "name": "2015-FALL-FEE",
  "full_name": "s4dmw/2015-FALL-FEE",
  "owner": {
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
    "site_admin": false
  },
  "private": false,
  "html_url": "https://github.com/s4dmw/2015-FALL-FEE",
  "description": "Class repo for the Front-End Engineering class of the Fall 2015 cohort at TIY Durham",
  "fork": true,
  "url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE",
  "forks_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/forks",
  "keys_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/teams",
  "hooks_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/hooks",
  "issue_events_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/issues/events{/number}",
  "events_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/events",
  "assignees_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/assignees{/user}",
  "branches_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/branches{/branch}",
  "tags_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/tags",
  "blobs_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/languages",
  "stargazers_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/stargazers",
  "contributors_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/contributors",
  "subscribers_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/subscribers",
  "subscription_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/subscription",
  "commits_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/contents/{+path}",
  "compare_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/merges",
  "archive_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/downloads",
  "issues_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/issues{/number}",
  "pulls_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/labels{/name}",
  "releases_url": "https://api.github.com/repos/s4dmw/2015-FALL-FEE/releases{/id}",
  "created_at": "2015-09-14T18:11:38Z",
  "updated_at": "2015-09-14T18:11:39Z",
  "pushed_at": "2015-09-14T18:05:04Z",
  "git_url": "git://github.com/s4dmw/2015-FALL-FEE.git",
  "ssh_url": "git@github.com:s4dmw/2015-FALL-FEE.git",
  "clone_url": "https://github.com/s4dmw/2015-FALL-FEE.git",
  "svn_url": "https://github.com/s4dmw/2015-FALL-FEE",
  "homepage": null,
  "size": 242,
  "stargazers_count": 0,
  "watchers_count": 0,
  "language": "HTML",
  "has_issues": false,
  "has_downloads": true,
  "has_wiki": true,
  "has_pages": false,
  "forks_count": 0,
  "mirror_url": null,
  "open_issues_count": 0,
  "forks": 0,
  "open_issues": 0,
  "watchers": 0,
  "default_branch": "master",
  "permissions": {
    "admin": true,
    "push": true,
    "pull": true
  }
};


})();
