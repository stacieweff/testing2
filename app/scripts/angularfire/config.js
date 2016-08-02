angular.module('firebase.config', [])
  .constant('FBURL', 'https://testing2-75d17.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook'])

  .constant('loginRedirectPath', '/login');
