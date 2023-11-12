window.DanhSachKSController = function ($scope, $http, $filter) {
    // IMG
    $scope.image = "IMAGE/datphong/star.png"
    $scope.imgEdit = "IMAGE/danhsach/edit.png"
    $scope.imgList = "IMAGE/danhsach/list.png"
    $scope.imgDelete = "IMAGE/danhsach/delete.png"
    // content
    $scope.titleDatPhong = "Đặt khách sạn mới"
    $scope.ddMucGia = "Mức giá"
    $scope.priceLevelsBKF = [
        { gia: 500000 }, { gia: 1000000 }, { gia: 2000000 }, { gia: 5000000 }
    ];
    $scope.ddXepHang = "Xếp hạng"

    $scope.ddLoaiChoO = "Loại chỗ ở"
    $scope.stayTypesBKF = [
        { stay: "Khách sạn" }, { stay: "Căn hộ" }, { stay: "Resort" }, { stay: "Homestay" }, { stay: "Villa" }, { stay: "Nhà nghỉ" }
    ];
    $scope.ddViTri = "Vị trí"
    $scope.locationHotelsBKF = [
        { location: "Sapa-Lào Cai" }, { location: "Hà Giang" }, { location: "Hà Nội" },
        { location: "Quảng Ninh" }, { location: "Đà Nẵng" }, { location: "Nha Trang- Khách Hòa" },
        { location: "TP Hồ Chí Minh" }, { location: "Phú Quốc- Kiên Giang" }
    ]

    // footer
    $scope.contactCT7 = "Kênh truyền thông"
    $scope.addressCT7 = "Số 1 Trịnh Văn Bô, Nam Từ Liêm, Hà Nội"
    $scope.hotLineCT7 = "0987.876.666 - 0237.679.231"
    $scope.emailCT7 = "hotelbooking@gmail.com"
    $scope.partnerCT7 = "Khách sạn đối tác"

    $scope.servicesBKF = [
        { dv: "Thuê xe" }, { dv: "Giặt là" }, { dv: "Hội họp" }, { dv: "Buồng phòng" }, { dv: "Mini bar" }, { dv: "Fitness center" }, { dv: "Xông hơi" }, { dv: "Spa" }, { dv: "Trông trẻ" }
    ]

    $scope.roomTypesBKF = [
        { id: 1, room: "VIP" }, { id: 2, room: "Cao cấp" }, { id: 2, room: "Superior" }, { id: 3, room: "Standard" }
    ]

    // Bảng
    const apiBookedHotel = "http://localhost:3000/bookingRoom";
    $scope.loadData = function () {
        $http.get(apiBookedHotel).then(function (res) {
            console.log(res.data);
            if (res.status == 200) {
                $scope.listBookedHotel = res.data;
            }
        })
    }

    $scope.loadData();

    // Update

    let idHotel = '';
    let flag = false;
    $scope.loaiPhong = '';
    $scope.hotelForm = '';
    $scope.openModal = function (item) {
        idHotel = item.id;
        console.log(idHotel)
        $http.get(apiBookedHotel + '/' + idHotel).then(function (response) {
            console.log(response.data.id)
            if (response.status == 200) {
                $scope.hotelForm = {
                    nameHotel: response.data.nameHotel,
                    priceRoom: response.data.priceRoom,
                    nameCustomer: response.data.nameCustomer,
                    birth: new Date(response.data.birth),
                    gender: response.data.gender,
                    email: response.data.email,
                    phoneNumber: response.data.phoneNumber,
                    CCCD: response.data.CCCD,
                    roomType: response.data.roomType,
                    guestCount: response.data.guestCount,
                    checkinDate: new Date(response.data.checkinDate),
                    checkoutDate: new Date(response.data.checkoutDate),
                    service: response.data.service,
                    servicePrice: response.data.servicePrice,
                    total: response.data.total
                };
                $scope.thueXe = false;
                $scope.giatLa = false;
                $scope.fitnessCenter = false;
                $scope.xongHoi = false;
                $scope.spa = false;
                $scope.hoiHop = false;
                $scope.buongPhong = false;
                $scope.miniBar = false;
                $scope.trongTre = false;


                $scope.hotelForm.service.forEach(sv => {
                    if (sv == "Thuê xe") {
                        $scope.hotelForm.service.thueXe = true;
                    }
                    if (sv == "Giặt là") {
                        $scope.hotelForm.service.giatLa = true;
                    }
                    if (sv == "Fitness center") {
                        $scope.hotelForm.service.fitnessCenter = true;
                    }
                    if (sv == "Xông hơi") {
                        $scope.hotelForm.service.xongHoi = true;
                    }
                    if (sv == "Spa") {
                        $scope.hotelForm.service.spa = true;
                    }
                    if (sv == "Hội họp") {
                        $scope.hotelForm.service.hoiHop = true;
                    }
                    if (sv == "Buồng phòng") {
                        $scope.hotelForm.service.buongPhong = true;
                    }
                    if (sv == "Mini bar") {
                        $scope.hotelForm.service.miniBar = true;
                    }
                    if (sv == "Trông trẻ") {
                        $scope.hotelForm.service.trongTre = true;
                    }
                });
                console.log($scope.hotelForm)     
                $('#exampleModal').modal('show');
            }
        }
        )
    };

    $scope.closeModal = function () {
        $('#exampleModal').modal('hide');
    };

    
    $scope.saveModal = function (hotelUpdate) {
       
        // Khai bao cac gia tri can check
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

        let hoTenForm = hotelUpdate.nameCustomer;
        let ngaySinhForm = hotelUpdate.birth;
        let gioTinhForm = hotelUpdate.gender;
        let emailForm = hotelUpdate.email;
        let sdtForm = hotelUpdate.phoneNumber;
        let cccdForm = hotelUpdate.CCCD;
        let loaiPhongForm = hotelUpdate.roomType;
        let soLuongPhongForm = hotelUpdate.guestCount;
        let checkInForm = hotelUpdate.checkinDate;
        let checkOutForm = hotelUpdate.checkoutDate;
        $scope.seviceFormValues = [];
        let tenKSForm = $scope.hotelForm.nameHotel;
        let giaForm = $scope.hotelForm.priceRoom;

        // Lấy giá trị của checkbox dịch vụ
        if ($scope.hotelForm.service.thueXe) {
            $scope.hotelForm.service.thueXe = "Thuê xe"
            $scope.seviceFormValues.push($scope.hotelForm.service.thueXe)
        }
        if ($scope.hotelForm.service.giatLa) {
            $scope.hotelForm.service.giatLa = "Giặt là"
            $scope.seviceFormValues.push($scope.hotelForm.service.giatLa)
        }
        if ($scope.hotelForm.service.hoiHop) {
            $scope.hotelForm.service.hoiHop = "Hội họp"
            $scope.seviceFormValues.push($scope.hotelForm.service.hoiHop)
        }
        if ($scope.hotelForm.service.buongPhong) {
            $scope.hotelForm.service.buongPhong = "Buồng phòng"
            $scope.seviceFormValues.push($scope.hotelForm.service.buongPhong)
        }
        if ($scope.hotelForm.service.miniBar) {
            $scope.hotelForm.service.miniBar = "Mini bar"
            $scope.seviceFormValues.push($scope.hotelForm.service.miniBar)
        }
        if ($scope.hotelForm.service.finessCenter) {
            $scope.hotelForm.service.finessCenter = "Fitness center"
            $scope.seviceFormValues.push($scope.hotelForm.service.finessCenter)
        }
        if ($scope.hotelForm.service.xongHoi) {
            $scope.hotelForm.service.xongHoi = "Xông hơi"
            $scope.seviceFormValues.push($scope.hotelForm.service.xongHoi)
        }
        if ($scope.hotelForm.service.spa) {
            $scope.hotelForm.service.spa = "Spa"
            $scope.seviceFormValues.push($scope.hotelForm.service.spa)
        }
        if ($scope.hotelForm.service.trongTre) {
            $scope.hotelForm.service.trongTre = "Trông trẻ"
            $scope.seviceFormValues.push($scope.hotelForm.service.trongTre)
        }

        let seviceForm = $scope.seviceFormValues;
        console.log("SL dich vu")
        console.log($scope.seviceFormValues)
        $scope.hotel = '';
        // Kiem tra cac input cua form
        let currentDate = new Date();
        let currentDateFormat = new Date(currentDate.getMonth(), currentDate.getDate(), currentDate.getFullYear())
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        console.log(hoTenForm)
        // check ten
        if (String(hoTenForm).trim().length === 0 || hoTenForm === '' || typeof hoTenForm === 'undefined') {
            $scope.checkName = true;
            check = false;
            console.log(hoTenForm)
        } 
        // check ngay sinh
        if (new Date().getFullYear() - ngaySinhForm.getFullYear() < 18) {
            $scope.checkBirth = true;
            check = false;
            console.log(" ngày ko oke")
        }
        // check  email
        if (String(emailForm).trim().length === 0 || emailForm === '' || typeof emailForm === 'undefined' || !emailForm.match(mailformat)) {
            $scope.checkEmail = true;
            check = false;
            console.log("email ko oke")
        }
        // check  sdt

        if (String(sdtForm).trim().length === 0 || sdtForm === '' || typeof sdtForm === 'undefined' || !sdtForm.match("(09|03|07|08|05)+([0-9]{8})") || String(sdtForm).trim().length != 10) {
            $scope.checkSDT = true;
            check = false;
            console.log("sdt ko oke")
        }
        // check cccd

        if (String(cccdForm).trim().length === 0 || cccdForm === '' || typeof cccdForm === 'undefined' || !cccdForm.match("([0-9]*)") || String(cccdForm).trim().length != 12) {
            $scope.checkCCCD = true;
            check = false;
            console.log("cccd ko oke")
        }
        // check so luong phong

        if (String(soLuongPhongForm).trim().length === 0 || soLuongPhongForm === '' || typeof soLuongPhongForm === 'undefined') {
            $scope.checkRoomCount = true;
            check = false;
            console.log(soLuongPhongForm)
            console.log("điẻm ko oke")
        }
        // check ngay nhan phong

        if (new Date(checkInForm.getMonth(), checkInForm.getDate(), checkInForm.getFullYear()) < currentDateFormat) {
            $scope.checkInRoom = true;
            check = false;
            console.log(" ngày check in ko oke")
            console.log(checkInForm)
        }
        // check ngay tra phong

        if (checkOutForm <= checkInForm) {
            $scope.checkOutRoom = true;
            check = false;
            console.log(" ngày check out ko oke")
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
            let checkinFormat = checkinMonth + '/' + checkinDate + '/' +checkinYear;

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
            console.log(newBookingRoom)
            $scope.dataForm = newBookingRoom;
            $http.put(apiBookedHotel + '/' + idHotel, $scope.dataForm).then(
                function (response) {
                    if (response.status === 200) {
                        $scope.loadData();
                        $('#exampleModal').modal('hide');
                    }
                })
        }
    };

    // Delete
    let idHotelDelete = '';
    $scope.openModalDelete = function (item) { 
        idHotelDelete = item.id;
        console.log("lấy id")
        console.log(idHotelDelete)
        $http.get(apiBookedHotel + '/' + idHotelDelete).then(function (response) {
            $('#staticBackdrop').modal('show');
         })
        
    }

    $scope.closeModalDelete = function () {
        console.log("Tắt modal")
        $('#staticBackdrop').modal('hide');
    };


    $scope.saveModalDelete = function () {
        // idHotelDelete = item.id;
        console.log("Id hotel")
        console.log(idHotelDelete)
        $http.delete(apiBookedHotel + '/' + idHotelDelete).then(function (response) {
            if (response.status == 200) {
                console.log("xóa ok")
                $scope.loadData();
                $('#staticBackdrop').modal('hide');
            }
            
        })
        
    }
    
}