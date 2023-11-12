window.PopupDatPhongController = function ($scope, $uibModalInstance) {

    $scope.closeModal = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.saveModal = function () {
        $uibModalInstance.close('saved');
    };

}