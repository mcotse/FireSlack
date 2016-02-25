angular.module('angularfireSlackApp')
  .factory('Auth',function(){
    var ref = new Firebase(FirebaseUrl);
    var auth = $firebaseAuth(ref);

    return auth;
  });
