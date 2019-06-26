var app = angular.module('myApp', ['ngRoute']);

app.controller('myController', ['$scope',function($scope){
  $scope.searchItem = function(event){

    var input = document.getElementById("inputText");
    var inputData = input.value.toLowerCase();

    var data = [
      {id:1, answer:"this answer", name:"uy"},
      {id:2, answer:"this codes", name:"uopop", user_id:"bla"},
      {id:3, data:"data codes", name:"Bakkkk"},
      {id:4, data:"", threaded:"this threaded", threaded_data:"my data"},
      {id:5, data:"", threaded:"POPPPP", threaded_data:"POPPPP data"},
      {id:6, data:"ok reply", threaded:"", threaded_data:""},
      {id:7, answer:"money", name:"kiiouy"},
      {id:8, data:"this answer", name:"uppppy"},
      {id:9, answer:"POPPPP", name:"ollll"},
      {id:10, data:"mongo", name:"new"}
    ];

    data.filter(function(item){
      var bunchData = item.answer || item.data || item.threaded || item.threaded_data;
      if(bunchData.includes(inputData)){
        console.log("found");
      }
    });
  }
}]);
app.directive('myDirective',['$scope', function($scope){
  return {
    restrict: 'E',
    replace: true,
    template: `<div>Hello there</div>`
  }
}]);
