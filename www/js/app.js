var db;
var app=angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform,$cordovaSQLite) {

  $ionicPlatform.ready(function() {

        if (window.cordova) {
       db = $cordovaSQLite.openDB("emp.db");
    }else{
      db = window.openDatabase("emp.db", '1', 'emp', 1024 * 1024 * 100); // browser
    }
        var createDB ="CREATE TABLE IF NOT EXISTS Employee (id INTEGER PRIMARY KEY AUTOINCREMENT, fname TEXT,lname TEXT,tel TEXT,email TEXT,date DATE)";
        $cordovaSQLite.execute(db,createDB);
      
    if(window.cordova && window.cordova.plugins.Keyboard) {
     
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state('main',{url:'/main',
    templateUrl:'views/main.html',
    controller:'MainController'
 })
  .state('add',{url:'/add',
    templateUrl:'views/insertEmp.html',
    controller:'AddController'
 })
   .state('edit',{url:'/edit/:id/:fname/:lname/:tel/:email',
    templateUrl:'views/editEmp.html',
    controller:'EditController'
 })
  

  $urlRouterProvider.otherwise('/main')
})

