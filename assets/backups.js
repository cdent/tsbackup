var app = angular.module('app', []);

app.controller('BackupsCtrl', ['$scope', function($scope) {
	var space = {},
	    name = tiddlyweb.status.space.name,
	    timeStamp = +new Date / 1e3 | 0,
	    isMember = tiddlyweb.status.space.recipe.match(/_private$/);
	space.name = name;
	space.publicBag = space.name + '_public';
	space.privateBag = space.name + '_private';
	space.publicFileName = space.publicBag + '-' + timeStamp + '.json';
	space.privateFileName = space.privateBag + '-' + timeStamp + '.json';
	space.isSelf = (space.name === 'backups');
	space.notSelf = !space.isSelf;
	space.isMember = isMember;

	$scope.$parent.space = space;
}]);
