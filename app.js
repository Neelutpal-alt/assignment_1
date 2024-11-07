// js/app.js
var app = angular.module('myApp', []);

app.controller('MainController', function($scope) {
   $scope.name = "Your Name";
   $scope.aboutMe = "A brief introduction about yourself.";
   
   $scope.hobbies = ["Reading", "Traveling", "Coding"];
   
   $scope.family = [
      { name: "John", relation: "Father" },
      { name: "Jane", relation: "Mother" },
      { name: "Doe", relation: "Sibling" }
   ];
   
   $scope.education = [
      { level: "High School", institution: "Your High School" },
      { level: "College", institution: "Your College" }
   ];
   
   $scope.achievements = ["Certificate in XYZ", "Reward for ABC"];
   
   $scope.contributions = "Describe your contributions to society.";
});
