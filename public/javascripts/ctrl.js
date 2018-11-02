csbApp.controller("csbCtrl", function($scope, $http){
  $scope.stories = [];
  
  $scope.addStory = function(c, a) {
    $scope.stories.push({
      content: c,
      author: a
    }); 
  }
  
  $scope.addStory("This is the first story and the lamest of all.", "Jason");
  $scope.addStory("Read my story!", "Nate");
  
});