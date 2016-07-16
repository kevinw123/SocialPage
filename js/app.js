var testApp = angular.module('testApp', []);
testApp.controller('PostController', function PostController($scope) {

  $scope.addPost = function(){
  	if($scope.postBody){
  		$scope.posts.unshift({
  			username: 'kevs',
  			body: $scope.postBody
  		})
  	}
  	$scope.postBody = null
  };

  $scope.posts = [
    {
      username: 'jeffx',
      body: 'Fast just got faster with Nexus S.'
    }, {
      username: 'test',
      body: 'The Next, Next Generation tablet.'
    }, {
      username: 'wooo',
      body: 'The Next, Next Generation tablet.'
    }
  ];
});