csbApp.controller("csbCtrl", function($scope, $http){
  $scope.stories = [];
  
  $scope.addStory = function(c, a) {
    var d = new Date();
    $scope.stories.push({
      content: c,
      author: a,
      date: d.toDateString()
    }); 
  }
  
  $scope.addStory("This is the first story and the lamest of all.", "Jason");
  $scope.addStory("Read my story!", "Nate");
  
});