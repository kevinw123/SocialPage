var testApp = angular.module('testApp', []);
testApp.controller('PostController', function PostController($scope) {
  $scope.phones = [
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