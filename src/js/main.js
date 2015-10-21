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

.run(function($http, $rootScope){
   $http.get("../apis/github/users/s4dmw.json")
    .then(function(arguments){
      $rootScope.user = arguments.data;
    });
  })

  .run(function($http, $rootScope){
     $http.get("../apis/github/users/s4dmw/repositories.json")
      .then(function(arguments){
        $rootScope.repo = arguments.data[0];
      });
    })

  .run(function($http, $rootScope){
    $http.get("../apis/github/repos/TIY-Durham/2015-Fall-FEE/505/comments.json").then(function(arguments){
      $rootScope.comments = arguments.data;
    });
  })


})();
