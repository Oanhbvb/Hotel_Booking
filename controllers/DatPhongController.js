
window.DatPhongController = function ($scope, $http, $location) {
    //Image
    $scope.image = "./IMAGE/datphong/star.png"


    $scope.feedbackBKF = "Đánh giá"
    $scope.locationFBBKF = "Vị trí"
    $scope.priceFBBKF = "Giá cả"
    $scope.serviceFBBKF = "Phục vụ"
    $scope.convenientFBBKF = "Tiện nghi"

    $scope.priceLevelBKF = "Mức giá"
    $scope.priceLevelsBKF = [
        { gia: 500000 }, { gia: 1000000 }, { gia: 2000000 }, { gia: 5000000 }
    ];
    $scope.rankHotelBKF = "Xếp hạng"
    $scope.stayTypeBKF = "Loại chỗ ở"
    $scope.stayTypesBKF = [
        { stay: "Khách sạn" }, { stay: "Căn hộ" }, { stay: "Resort" }, { stay: "Homestay" }, { stay: "Villa" }, { stay: "Nhà nghỉ" }
    ];
    $scope.locationHotelBKF = "Vị trí"
    $scope.locationHotelsBKF = [
        { location: "Sapa-Lào Cai" }, { location: "Hà Giang" }, { location: "Hà Nội" },
        { location: "Quảng Ninh" }, { location: "Đà Nẵng" }, { location: "Nha Trang- Khách Hòa" },
        { location: "TP Hồ Chí Minh" }, { location: "Phú Quốc- Kiên Giang" }
    ]

    //otherHotel
    $scope.suggestOTH = "Gợi ý của chúng tôi"
    $scope.voucherOTH = "Giá ưu đãi"
    $scope.commentOTH = "Đánh giá"
    $scope.hotelsOTH = [
        {
            name: "Pullman Hanoi Hotel",
            address: "40 Cát Linh, Quận Đống Đa, Hà Nội ",
            info: "Là nơi để tận hưởng cuộc sống, không chỉ là chốn nghỉ ngơi. Với 242 phòng nghỉ và phòng Suite, nhà hàng La Cheminée và Mint Bar, khách sạn là nơi lý tưởng cân bằng giữa nghỉ ngơi và giao lưu.",
            kindOfRoom: "Phòng đôi",
            hotelType: "Khách sạn 5 sao",
            price: 1939000,
            unit: "/phòng/đêm"
        },
        {
            name: "Rex Hotel (TP.HCM)",
            address: "141 Nguyễn Huệ, Bến Nghé, Q.1, Hồ Chí Minh",
            info: "Là một khách sạn với chất lượng phục vụ 5 sao một nơi lý tưởng để cho khách du lịch có thể nghỉ ngơi thư giãn trong chuỗi ngày du lịch, công tác,…của mình. ",
            kindOfRoom: "Phòng đôi",
            hotelType: "Khách sạn 5 sao",
            price: 2689000,
            unit: "/phòng/đêm"
        },
        {
            name: "Dalat Palace (Lâm Đồng)",
            address: "12 Trần Phú, Đà Lạt, Lâm Đồng",
            info: "Dalat Palace là khách sạn duy nhất trên cả nước có hệ thống sân Golf nằm giữa trung tâm thành phố với diện tích sử dụng lên đến 62,5 hecta.",
            kindOfRoom: "Phòng đôi",
            hotelType: "Khách sạn 5 sao",
            price: 3200000,
            unit: "/phòng/đêm"
        },
        {
            name: "JW Marriott Hotel Hanoi",
            address: "8 Đỗ Đức Dục, Quận Nam Từ Liêm, TP. Hà Nội",
            info: "Với thiết kế hiện đại, sang trọng, dịch vụ đạt chuẩn quốc tế, khách sạn JW Marriott Hanoi đảm bảo đem đến cho du khách trải nghiệm dịch vụ hoàn hảo nhất.",
            kindOfRoom: "Phòng đôi",
            hotelType: "Khách sạn 5 sao",
            price: 4000000,
            unit: "/phòng/đêm"
        },
        {
            name: "La Veranda Phú Quốc",
            address: "Trần Hưng Đạo, TP. Phú Quốc, Kiên Giang",
            info: "Khách sạn La Veranda Phú Quốc được xây dựng theo phong cách các dinh thự Pháp thập niên 1920, nằm giữa những khu vườn nhiệt đới bên bãi biển dài xanh mát. ",
            kindOfRoom: "Phòng đôi",
            hotelType: "Khách sạn 5 sao",
            price: 3000000,
            unit: "/phòng/đêm"
        },
        {
            name: "Vinpearl Luxury Nha Trang",
            address: "Đảo Hòn Tre, Phường Vĩnh Nguyên, TP. Nha Trang, Khánh Hòa",
            info: "Tọa lạc nơi bờ biển thiên đường, 84 căn biệt thự xinh đẹp nằm trải mình giữa những khu vườn nhiệt đới mướt mát, lắng nghe tiếng sóng rì rào khúc nhạc thư thái của thiên nhiên.",
            kindOfRoom: "Phòng đôi",
            hotelType: "Khách sạn 5 sao",
            price: 2800000,
            unit: "/phòng/đêm"
        }

    ]
    //content7
    $scope.contactCT7 = "Kênh truyền thông"
    $scope.addressCT7 = "Số 1 Trịnh Văn Bô, Nam Từ Liêm, Hà Nội"
    $scope.hotLineCT7 = "0987.876.666 - 0237.679.231"
    $scope.emailCT7 = "hotelbooking@gmail.com"
    $scope.partnerCT7 = "Khách sạn đối tác"



    //bookingForm
    $scope.hotelNameBKF = "Pullman Hanoi Hotel"
    $scope.priceTitleBKF = "Giá cả"
    $scope.infoHotelBKF = "Là nơi để tận hưởng cuộc sống, không chỉ là chốn nghỉ ngơi. Bạn cũng có thể cảm nhận một Pullman Hanoi của nhịp sống hiện đại ngay trong lịch trình bận rộn nhất. Với 242 phòng nghỉ và phòng Suite, nhà hàng La Cheminée và Mint Bar, khách sạn là nơi lý tưởng cân bằng giữa nghỉ ngơi và giao lưu."
    $scope.priceBKF = 1939000
    $scope.unitBKF = "/phòng/đêm"

    $scope.nameBKF = "Họ và tên"
    $scope.dateOfBirthBKF = "Ngày sinh"
    $scope.genderBKF = "Giới tính"
    $scope.maleBKF = "Nam"
    $scope.femaleBKF = "Nữ"
    $scope.emailBKF = "Email"
    $scope.telephoneBKF = "SDT"
    $scope.cccdBKF = "CCCD"
    $scope.roomTypeBKF = "Loại phòng"
    $scope.roomTypesBKF = [
        { room: "VIP" }, { room: "Cao cấp" }, { room: "Superior" }, { room: "Standard" }
    ]
    $scope.guestsBKF = "Số lượng phòng"
    $scope.checkinDateBKF = "Ngày nhận phòng"
    $scope.checkoutDateBKF = "Ngày trả phòng"
    $scope.serviceBKF = "Dịch vụ"
    $scope.servicesBKF = [
        { dv: "Thuê xe" }, { dv: "Giặt là" }, { dv: "Hội họp" }, { dv: "Buồng phòng" }, { dv: "Mini bar" }, { dv: "Fitness center" }, { dv: "Xông hơi" }, { dv: "Spa" }, { dv: "Trông trẻ" }
    ]
    //ASM2

    // $scope.showModal = function (newBookingRoom) {
    //     $scope.openModal = function () {
    //         $('#exampleModal').modal('show');
    //     };

    //     $scope.closeModal = function () {
    //         $('#exampleModal').modal('hide');
    //     };

    //     $scope.saveModal = function () {
    //         $http.post(apiBookingRoom, newBookingRoom).then(function (res1) {
    //             if (res1.status == 200) {
    //                 console.log('ok')
    //             }
    //         });
    //         $('#exampleModal').modal('hide');
    //     };
    // }

    let newBookingRoom = '';
    const apiBookingRoom = "http://localhost:3000/bookingRoom";
    $scope.bookingRoom = function () {

        // Khai bao cac gia tri can check
        let flag = true;
        let check = true;
        $scope.checkName = false;
        $scope.checkBirth = false;
        $scope.checkGender = false;
        $scope.checkEmail = false;
        $scope.checkEmailFormat = false;
        $scope.checkSDT = false;
        $scope.checkSDTFotmat = false;
        $scope.checkCCCD = false;
        $scope.checkCCCDFormat = false;
        $scope.checkRoomType = false;
        $scope.checkRoomCount = false;
        $scope.checkInRoom = false;
        $scope.checkInRoomFormat = false;
        $scope.checkOutRoom = false;
        $scope.checkOutRoomFormat = false;

        // Khai bao cac thuoc tinh lay tu form

        let hoTenForm = $scope.form.hoTen;
        let ngaySinhForm = $scope.form.ngaySinh;
        let gioTinhForm = $scope.form.gioiTinh;
        let emailForm = $scope.form.email;
        let sdtForm = $scope.form.sdt;
        let cccdForm = $scope.form.cccd;
        let loaiPhongForm = $scope.form.loaiPhong;
        let soLuongPhongForm = $scope.form.soLuongPhong;
        let checkInForm = $scope.form.ngayNhanPhong;
        let checkOutForm = $scope.form.ngayTraPhong;
        $scope.seviceFormValues = [];
        let tenKSForm = $scope.hotelNameBKF;
        let giaForm = $scope.priceBKF;

        // formate ngay



        // Lấy giá trị của checkbox dịch vụ
        if ($scope.thueXe) {
            $scope.thueXe = "Thuê xe"
            $scope.seviceFormValues.push($scope.thueXe)
        }
        if ($scope.giatLa) {
            $scope.giatLa = "Giặt là"
            $scope.seviceFormValues.push($scope.giatLa)
        }
        if ($scope.hoiHop) {
            $scope.hoiHop = "Hội họp"
            $scope.seviceFormValues.push($scope.hoiHop)
        }
        if ($scope.buongPhong) {
            $scope.buongPhong = "Buồng phòng"
            $scope.seviceFormValues.push($scope.buongPhong)
        }
        if ($scope.miniBar) {
            $scope.miniBar = "Mini bar"
            $scope.seviceFormValues.push($scope.miniBar)
        }
        if ($scope.finessCenter) {
            $scope.finessCenter = "Fitness center"
            $scope.seviceFormValues.push($scope.finessCenter)
        }
        if ($scope.xongHoi) {
            $scope.xongHoi = "Xông hơi"
            $scope.seviceFormValues.push($scope.xongHoi)
        }
        if ($scope.spa) {
            $scope.spa = "Spa"
            $scope.seviceFormValues.push($scope.spa)
        }
        if ($scope.trongTre) {
            $scope.trongTre = "Trông trẻ"
            $scope.seviceFormValues.push($scope.trongTre)
        }

        let seviceForm = $scope.seviceFormValues;

        // Kiem tra cac input cua form
        let currentDate = new Date();
        let currentDateFormat = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        // check ten
        if (!$scope.form || String(hoTenForm).trim().length === 0 || hoTenForm === '' || typeof hoTenForm === 'undefined') {
            $scope.checkName = true;
            flag = false;
            check = false;
        }
        // check ngay sinh
        if (ngaySinhForm === null || new Date().getFullYear() - ngaySinhForm.getFullYear() < 18) {
            $scope.checkBirth = true;
            flag = false;
            check = false;
        }
        // check  gioi tinh
        if (typeof gioTinhForm === 'undefined') {
            $scope.checkGender = true;
            flag = false;
            check = false;
        }
        // check  email
        if (String(emailForm).trim().length === 0 || emailForm === '' || typeof emailForm === 'undefined') {
            $scope.checkEmail = true;
            flag = false;
            check = false;
        } else if (!emailForm.match(mailformat)) {
            $scope.checkEmailFormat = true;
        }
        // check  sdt

        if (String(sdtForm).trim().length === 0 || sdtForm === '' || typeof sdtForm === 'undefined') {
            $scope.checkSDT = true;
            flag = false;
            check = false;
        } else if (!sdtForm.match("(09|03|07|08|05)+([0-9]{8})") || String(sdtForm).trim().length != 10) {
            $scope.checkSDTFotmat = true;
            flag = false;
            check = false;
        }
        // check cccd

        if (String(cccdForm).trim().length === 0 || cccdForm === '' || typeof cccdForm === 'undefined') {
            $scope.checkCCCD = true;
            flag = false;
            check = false;
        } else if (!cccdForm.match("([0-9]*)") || String(cccdForm).trim().length != 12) {
            $scope.checkCCCDFormat = true;
            flag = false;
            check = false;
        }
        // check loai phong

        if (typeof loaiPhongForm === 'undefined') {
            $scope.checkRoomType = true;
            flag = false;
            check = false;
        }
        // check so luong phong

        if (String(soLuongPhongForm).trim().length === 0 || soLuongPhongForm === '' || typeof soLuongPhongForm === 'undefined') {
            $scope.checkRoomCount = true;
            flag = false;
            check = false;
        }
        // check ngay nhan phong

        if (checkInForm === null || new Date(checkInForm.getFullYear(), checkInForm.getMonth(), checkInForm.getDate()) < currentDateFormat) {
            $scope.checkInRoom = true;
            flag = false;
            check = false;
        }

        // check ngay tra phong

        if (checkOutForm === null || checkOutForm <= checkInForm) {
            $scope.checkOutRoom = true;
            flag = false;
            check = false;
        }
        if (check) {
            console.log("Thỏa mãn")
            checkInForm = new Date(checkInForm.getFullYear(), checkInForm.getMonth(), checkInForm.getDate())

            checkOutForm = new Date(checkOutForm.getFullYear(), checkOutForm.getMonth(), checkOutForm.getDate())
            // Tính số ngày 
            let soGiayTrongNgay = 24 * 60 * 60 * 1000;
            let soNgayChechLech = checkOutForm - checkInForm;
            let soNgay = Math.floor(soNgayChechLech / soGiayTrongNgay);
            // Tính tiền dịch vụ
            let tienDichVu = $scope.seviceFormValues.length * 100000;
            // Tính tiền phòng
            let tienPhong = ((giaForm * soNgay) * soLuongPhongForm) + ((tienDichVu * soNgay) * soLuongPhongForm);
            // Formate ngày
            let ngaySinhYear = ngaySinhForm.getFullYear();
            let ngaySinhMonth = ngaySinhForm.getMonth() + 1;
            let ngaySinhDate = ngaySinhForm.getDate();
            if (ngaySinhDate < 10) ngaySinhDate = '0' + ngaySinhDate;
            if (ngaySinhMonth < 10) ngaySinhMonth = '0' + ngaySinhMonth;
            let ngaySinhFormat = ngaySinhMonth + '/' + ngaySinhDate + '/' + ngaySinhYear;

            let checkinYear = checkInForm.getFullYear();
            let checkinMonth = checkInForm.getMonth() + 1;
            let checkinDate = checkInForm.getDate();
            if (checkinDate < 10) checkinDate = '0' + checkinDate;
            if (checkinMonth < 10) checkinMonth = '0' + checkinMonth;
            let checkinFormat = checkinMonth + '/' + checkinDate + '/' + checkinYear;

            let checkoutYear = checkOutForm.getFullYear();
            let checkoutMonth = checkOutForm.getMonth() + 1;
            let checkoutDate = checkOutForm.getDate();
            if (ngaySinhDate < 10) ngaySinhDate = '0' + ngaySinhDate;
            if (checkoutMonth < 10) checkoutMonth = '0' + checkoutMonth;
            let checkoutFormat = checkoutMonth + '/' + checkoutDate + '/' + checkoutYear;

            // Khai báo đối tượng mới
            newBookingRoom = {
                nameHotel: tenKSForm,
                priceRoom: giaForm,
                nameCustomer: hoTenForm,
                birth: ngaySinhFormat,
                gender: gioTinhForm,
                email: emailForm,
                phoneNumber: sdtForm,
                CCCD: cccdForm,
                roomType: loaiPhongForm,
                guestCount: soLuongPhongForm,
                checkinDate: checkinFormat,
                checkoutDate: checkoutFormat,
                service: seviceForm,
                servicePrice: tienDichVu,
                total: tienPhong
            };

            $scope.dataForm = newBookingRoom;

            $scope.openModal = function () {
                $('#exampleModal').modal('show');
            };

            $scope.closeModal = function () {
                $('#exampleModal').modal('hide');
            };

            $scope.saveModal = function () {
                $http.post(apiBookingRoom, newBookingRoom).then(function (res1) {
                    if (res1.status === 201) {
                        $location.path('/danh-sach-khach-san-da-dat');
                        console.log("ok");
                    }
                });
                $('#exampleModal').modal('hide');
            };

        } else {
            console.log("ko ok");
            return
        }

    }



}

