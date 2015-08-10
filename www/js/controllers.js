angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

//chats controllers default
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('requestCtrl', function($scope,$http){
  $http.get('https://api.dribbble.com/v1/shots?access_token=53ee5aa760e0d0f3eae8a78a3b7397d7711457d0e4771e09e6398abf977efac5')
  .success(function(data) {
    console.log('Success', data);
    $scope.data = data;
  })
})

.controller('requestCtrlsingle', function($scope,$http,$stateParams){
  var id = $stateParams.id;
  $http.get('https://api.dribbble.com/v1/shots/'+id+'?access_token=53ee5aa760e0d0f3eae8a78a3b7397d7711457d0e4771e09e6398abf977efac5')
  .success(function(data) {
    console.log('Success', data);
    $scope.data = data;
    var desc = data.description;
    desc = desc.replace('<p>','" ');
    desc = desc.replace('</p>', ' "');
    $scope.desc = desc;
  })
})

.controller('HomeCtrl', function($scope,$http){
  $http.get('https://www.designernews.co/?format=json')
  .success(function(res) {
    console.log('Success', res);
    $scope.data = res.stories;
    console.log('DATA: ', res.stories);
  })
})

.controller('HomeCtrlsingle', function($scope,$http,$stateParams){
  var id = $stateParams.id;
  $http.get('https://www.designernews.co/stories/'+id+'?format=json')
  .success(function(data) {
    console.log('Success', data);
    $scope.data = data.story;
  })
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
