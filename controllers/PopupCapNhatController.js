window.PopupCapNhatController = function ($scope, $uibModalInstance) {
    $scope.closeModal = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveModal = function (item) {
        $uibModalInstance.close('saved');
    };

    $scope.closeModalDelete = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveModalDelete = function () {
        $uibModalInstance.close('saved');
    };
    
}