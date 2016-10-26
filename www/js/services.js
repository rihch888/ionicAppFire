angular.module('app.services', [])

/** Fabrica para tener la referencia al objeto en firebase */
.factory("ToDos", function($firebaseArray) {
  var toDosRef = new Firebase("https://appejemplo-5d53f.firebaseio.com/ToDos");
  return $firebaseArray(toDosRef);
})

