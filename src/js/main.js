(function(){
  // console.log("IIFE working!") //tracer bullet
  // $.ajax({url: "https://api.github.com/users/octocat"});
  // console.log($.ajax({url:"../apis/github/users/octocat.json"}));
  // console.log($.ajax("../apis/github/users/octocat.json"));

  $("nav#tabs h3").on('click', function(){
    // console.log("clicked a tab");
    $("nav#tabs h3").removeClass("active");
    $(this).addClass("active");
    $elementId = $("h3.active").get(0).id;
    console.log($elementId);
    $("section.panel").addClass("inactive");
    $("section#"+$elementId).removeClass("inactive");
  });


})();
