// var app = angular.module('AppComponent', []);

// function Card(num) {
//     this.url = 'images/monsters-' + num + '.png';
//     this.open = false;
//     this.matched = false;
//   }
  
//   app.controller('MyController', function($scope, $timeout) {
//     $scope.state = "first";
//     $scope.firstCard;
//     $scope.secondCard;
//     $scope.count = 0;
//     $scope.countDown = 15;
//     $scope.cards = [
//       [
//         new Card('01'),
//         new Card('02'),
//         new Card('03'),
//         new Card('04')
//       ],
//       [
//         new Card('01'),
//         new Card('02'),
//         new Card('03'),
//         new Card('04')
//       ]
  
//     ];
//   console.log($scope.cards);
  
//     $scope.click = function(card) {
//       if ($scope.state === "first") {
//           card.open = true;
//           $scope.firstCard = card;
//           $scope.state = "second";
//           console.log($scope.firstCard.url);
//         }
//       else if ($scope.state === "second") {
//           card.open = true;
//           $scope.secondCard = card;
//           console.log($scope.secondCard.url);
//           if ($scope.firstCard.url === $scope.secondCard.url) {
//             console.log("check");
//             $scope.state = "first";
//             $scope.matched = true;
//             $scope.firstCard.matched = true;
//             $scope.count += 1;
//               if ($scope.count === 4) {
//                 console.log("Win!");
//               }
//             console.log($scope.count);
//             // console.log($scope.matched);
//             // console.log($scope.firstCard.matched);
//             // console.log($scope.secondCard.matched);
//             // console.log($scope.state);
//             }
//           if ($scope.firstCard.url !== $scope.secondCard.url) {
//             console.log("not matched");
//             $scope.countDown -= 1;
//             console.log($scope.countDown);
//               if ($scope.countDown === 0) {
//                 console.log("You lose");
//               }
//             $timeout(function() {
//               $scope.firstCard.open = false;
//               $scope.secondCard.open = false;
//             }, 1000);
  
//             $scope.state = "first";
//             console.log($scope.state);
//           }
//         }
  
//     // function winner(element, index, array) {
//     //   return element >= 10;
//     // }
  
  
//   };
//     // $scope.click = function(card) {
//     //       card.open = true;
//     //     };
  
  
  
//   });