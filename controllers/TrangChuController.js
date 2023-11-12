
window.TrangChuController = function ($scope) {
    //banner
    $scope.imageBanner = "./IMAGE/banner/slide5.png"
    //content1
    $scope.titleContent1 = "Thông tin tìm kiếm"
    $scope.textTopKM = "Top khuyến mãi"
    $scope.textTopVip = "Top Vip"
    $scope.textMienBac = "Miền Bắc"
    $scope.textMienTrung = "Miền Trung"
    $scope.textMienNam = "Miền Nam"
    $scope.textKSQT = "Khách sạn quốc tế"
    $scope.priceContent1 = "Giá phòng"
    $scope.priceItemsCT1 = [
        { gia: "Dưới 1 triệu" },
        { gia: "Từ 1-2 triệu" },
        { gia: "Từ 2-5 triệu" },
        { gia: "Trên 5 triệu" }
    ]
    $scope.evaluateCT1 = "Đánh giá"
    $scope.evaluateItemsCT1 = [
        { danhGia: "Rất tốt" },
        { danhGia: "Tốt" },
        { danhGia: "Bình thường" },
        { danhGia: "Trung bình" }
    ]
    $scope.typeHotelCT1 = "Loại khách sạn"
    $scope.typeItemsCT1 = [
        { loai: "5 sao" },
        { loai: "4 sao" },
        { loai: "3 sao" },
        { loai: "2 sao" },
        { loai: "Homestay" }
    ]
    $scope.locationCT1 = "Địa điểm"
    $scope.locationItemsCT1 = [
        { vitri: "Hà Nội" },
        { vitri: "Hải Phòng" },
        { vitri: "Đà Nẵng" },
        { vitri: "Khánh Hòa" },
        { vitri: "TP Hồ Chí Minh" }
    ]
    $scope.stayCT1 = "Loại chỗ ở"
    $scope.stayTypesCT1 = [
        { stay: "Khách sạn" }, { stay: "Căn hộ" }, { stay: "Resort" }, { stay: "Homestay" }, { stay: "Villa" }, { stay: "Nhà nghỉ" }
    ]
    //content2
    $scope.titleContentKhachSan = "Khách sạn"
    $scope.serviceCT2 = "Dịch vụ"
    $scope.evaluateCT2 = "Đánh giá"
    $scope.hotelsCT2 = [
        {
            name: "Pullman Hanoi Hotel",
            address: "40 Cát Linh, Quận Đống Đa, Hà Nội ",
            kindOfRoom: "Phòng đôi",
            hotelType: "Khách sạn 5 sao",
            price: 1939000,
            unit: "/phòng/đêm"
        },
        {
            name: "Rex Hotel (TP.HCM)",
            address: "141 Nguyễn Huệ, Bến Nghé, Q.1, Hồ Chí Minh",
            kindOfRoom: "Phòng đôi",
            hotelType: "Khách sạn 5 sao",
            price: 2689000,
            unit: "/phòng/đêm"
        },
        {
            name: "Dalat Palace (Lâm Đồng)",
            address: "12 Trần Phú, Đà Lạt, Lâm Đồng",
            kindOfRoom: "Phòng đôi",
            hotelType: "Khách sạn 5 sao",
            price: 3200000,
            unit: "/phòng/đêm"
        }
    ]
    //content3
    $scope.titleContent3 = "Địa điểm nổi bật bốn mùa"
    //content4
    $scope.titleContent4 = "Địa điểm quốc tế"
    //content5
    $scope.titleContent5 = "Dịch vụ"
    $scope.eatCT5 = "Ăn uống"
    $scope.wifiCT5 = "Wifi"
    $scope.rentalCarCT5 = "Thuê xe"
    $scope.spaCt5 = "Spa"
    $scope.fitnessCT5 = "Fitness center"
    $scope.laundryCT5 = "Giặt là"
    $scope.karaokeCt5 = "Karaoke"
    $scope.swimCT5 = "Bể bơi"
    $scope.minibarCT5 = "Mini bar"
    $scope.meetingCT5 = "Hội họp"
    //content6
    $scope.adviseCT6 = "Bạn cần hỗ trợ ngay"
    $scope.introduceCT6 = "Đội ngũ nhân viên tư vấn 24/7 nhiệt tình, nhanh chóng và tận tâm với nhiều năm kinh nghiệm."
    $scope.telephone1CT6 = "0987.876.666"
    $scope.telephone2CT6 = "0237.679.231"
    $scope.titleQuestionCT6 = "Những câu hỏi thường gặp"
    $scope.question1CT6 = "Địa điểm du lịch đẹp vào mùa xuân?"
    $scope.question2CT6 = "Khách sạn VIP có những ưu đãi nào?"
    $scope.question3CT6 = "Ở homestay có an toàn không?"
    $scope.question4CT6 = "Khách sạn đẹp nhất ở Hạ Long?"
    $scope.question5CT6 = "Thời gian xét duyệt visa là bao lâu?"
    $scope.question6CT6 = "Những khách sạn được nhiều khách hàng yêu thích nhất?"
    $scope.question7CT6 = "Du lịch Phú Quốc nên ở khách sạn nào?"
    //content7
    $scope.contactCT7 = "Kênh truyền thông"
    $scope.addresCT7 = "Số 1 Trịnh Văn Bô, Nam Từ Liêm, Hà Nội"
    $scope.hotLineCT7 = "0987.876.666 - 0237.679.231"
    $scope.emailCT7 = "hotelbooking@gmail.com"
    $scope.partnerCT7 = "Khách sạn đối tác"

    $scope.calendarConfig = {
    };
    $scope.calendarEvents = [
    ];
}

