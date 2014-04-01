function todoCtrl($scope) {
    $scope.list = [
        { title: 'first', done: true },
        { title: 'second', done: false }];

    $scope.append = function () {
        $scope.list.push({ title: $scope.title, done: false });
        $scope.title = '';
    };
    $scope.remove = function (item) {
        var i = $scope.list.indexOf(item);
        $scope.list.splice(i, 1);
    };

    $scope.total = function () {
        var total = 0;
        $.each($scope.list, function (_, item) {
            if (!item.done) total += 1
        });
        return total;
    };
};