var testApp = angular.module('testApp', []);
testApp.controller('PostController', function PostController($scope) {

  $scope.addPost = function(){
  	$scope.posts.unshift({
  		username: 'kevs',
  		body: 'new post!'
  	})
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