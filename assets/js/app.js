angular.module("app", [
    "emoji"
]).controller("AppCtrl", ["$scope", function ($scope) {
    $scope.message = "Hello :smiley:. You can type a :email: in here. Watch the Emoji icons appear before your :eyes: as you :pencil:. The AngularJS Emoji filter makes it easy to :unlock: the potential of Emojis in your own app.\n\nOver :eight::zero::zero: Emojis are available and bundled with the filter. Yes, even :trollface:. If that's :musical_note: to your :ear:, download it now!";
}]);