$(function () {
    $('#datepicker').datepicker();
});
let myASM = angular.module("myAssiment", []);

myASM.controller("menu", menuFunction);
function menuFunction($scope) {
    $scope.home = "Trang chủ"
    $scope.bookHotel = "Đặt phòng"
    $scope.contact = "Liên hệ"
};

myASM.controller("content1", contentFunction);
function contentFunction($scope) {
    $scope.title = "Thông tin tìm kiếm"
    $scope.text1 = "Top khuyến mãi"
    $scope.text2 = "Top Vip"
    $scope.text3 = "Miền Bắc"
    $scope.text4 = "Miền trung"
    $scope.text5 = "Miền Nam"
    $scope.text6 = "Khách sạn quốc tế"
    $scope.price = "Giá phòng"
    $scope.priceItems = [
        { gia: "Dưới 1 triệu" },
        { gia: "Từ 1-2 triệu" },
        { gia: "Từ 2-5 triệu" },
        { gia: "Trên 5 triệu" }
    ]
    $scope.evaluate = "Đánh giá"
    $scope.evaluateItems = [
        { danhGia: "Rất tốt" },
        { danhGia: "Tốt" },
        { danhGia: "Bình thường" },
        { danhGia: "Trung bình" }
    ]
    $scope.type = "Loại khách sạn"
    $scope.typeItems = [
        { loai: "5 sao" },
        { loai: "4 sao" },
        { loai: "3 sao" },
        { loai: "2 sao" },
        { loai: "Homestay" }
    ]
    $scope.location = "Địa điểm"
    $scope.locationItems = [
        { vitri: "Hà Nội" },
        { vitri: "Hải Phòng" },
        { vitri: "Đà Nẵng" },
        { vitri: "Khánh Hòa" },
        { vitri: "TP Hồ Chí Minh" }
    ]
};

myASM.controller("content2", function ($scope) {
    $scope.titleContent = "Khách sạn"
    $scope.service = "Dịch vụ"
    $scope.evaluate = "Đánh giá"
    $scope.hotels = [
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
});

myASM.controller("content3", function ($scope) {
    $scope.titleContent = "Địa điểm nổi bật bốn mùa"
});

myASM.controller("content4", function ($scope) {
    $scope.titleContent = "Địa điểm quốc tế"
});

myASM.controller("content5", function ($scope) {
    $scope.titleContent = "Dịch vụ"
    $scope.eat = "Ăn uống"
    $scope.wifi = "Wifi"
    $scope.rentalCar = "Thuê xe"
    $scope.spa = "Spa"
    $scope.fitness = "Fitness center"
    $scope.laundry = "Giặt là"
    $scope.karaoke = "Karaoke"
    $scope.swim = "Bể bơi"
    $scope.minibar = "Mini bar"
    $scope.meeting = "Hội họp"
});

myASM.controller("content6", function ($scope) {
    $scope.advise = "Bạn cần hỗ trợ ngay"
    $scope.introduce = "Đội ngũ nhân viên tư vấn 24/7 nhiệt tình, nhanh chóng và tận tâm với nhiều năm kinh nghiệm."
    $scope.telephone1 = "0987.876.666"
    $scope.telephone2 = "0237.679.231"
    $scope.titleQuestion = "Những câu hỏi thường gặp"
    $scope.question1 = "Địa điểm du lịch đẹp vào mùa xuân?"
    $scope.question2 = "Khách sạn VIP có những ưu đãi nào?"
    $scope.question3 = "Ở homestay có an toàn không?"
    $scope.question4 = "Khách sạn đẹp nhất ở Hạ Long?"
    $scope.question5 = "Thời gian xét duyệt visa là bao lâu?"
    $scope.question6 = "Những khách sạn được nhiều khách hàng yêu thích nhất?"
    $scope.question7 = "Du lịch Phú Quốc nên ở khách sạn nào?"
});

myASM.controller("content7", function ($scope) {
    $scope.contact = "Kênh truyền thông"
    $scope.address = "Số 1 Trịnh Văn Bô, Nam Từ Liêm, Hà Nội"
    $scope.hotLine = "0987.876.666 - 0237.679.231"
    $scope.email = "hotelbooking@gmail.com"
    $scope.partner = "Khách sạn đối tác"
});

myASM.controller("bookingForm", function ($scope) {
    $scope.hotelName = "Pullman Hanoi Hotel"
    $scope.priceTitle = "Giá cả"
    $scope.infoHotel = "Là nơi để tận hưởng cuộc sống, không chỉ là chốn nghỉ ngơi. Bạn cũng có thể cảm nhận một Pullman Hanoi của nhịp sống hiện đại ngay trong lịch trình bận rộn nhất. Với 242 phòng nghỉ và phòng Suite, nhà hàng La Cheminée và Mint Bar, khách sạn là nơi lý tưởng cân bằng giữa nghỉ ngơi và giao lưu."
    $scope.price = 1939000
    $scope.unit = "/phòng/đêm"

    $scope.name = "Họ và tên"
    $scope.dateOfBirth = "Ngày sinh"
    $scope.gender = "Giới tính"
    $scope.male = "Nam"
    $scope.female = "Nữ"
    $scope.email = "Email"
    $scope.telephone = "SDT"
    $scope.cccd = "CCCD"
    $scope.roomType = "Loại phòng"
    $scope.roomTypes = [
        { room: "VIP" }, { room: "Cao cấp" }, { room: "Superior" }, { room: "Standard" }
    ]
    $scope.guests = "Số lượng khách"
    $scope.checkinDate = "Ngày nhận phòng"
    $scope.checkoutDate = "Ngày trả phòng"
    $scope.service = "Dịch vụ"
    $scope.services = [
        { dv: "Thuê xe" }, { dv: "Giặt là" }, { dv: "Hội họp" }, { dv: "Buồng phòng" }, { dv: "Mini bar" }, { dv: "Fitness center" }, { dv: "Xông hơi" }, { dv: "Spa" }, { dv: "Trông trẻ" }
    ]

    $scope.feedback = "Đánh giá"
    $scope.locationFB = "Vị trí"
    $scope.priceFB = "Giá cả"
    $scope.serviceFB = "Phục vụ"
    $scope.convenientFB = "Tiện nghi"

    $scope.priceLevel = "Mức giá"
    $scope.priceLevels = [
        { gia: 500000 }, { gia: 1000000 }, { gia: 2000000 }, { gia: 5000000 }
    ];
    $scope.rankHotel = "Xếp hạng"
    $scope.stayType = "Loại chỗ ở"
    $scope.stayTypes = [
        { stay: "Khách sạn" }, { stay: "Căn hộ" }, { stay: "Resort" }, { stay: "Homestay" }, { stay: "Villa" }, { stay: "Nhà nghỉ" }
    ];
    $scope.locationHotel = "Vị trí"
    $scope.locationHotels = [
        { location: "Sapa-Lào Cai" }, { location: "Hà Giang" }, { location: "Hà Nội" },
        { location: "Quảng Ninh" }, { location: "Đà Nẵng" }, { location: "Nha Trang- Khách Hòa" },
        { location: "TP Hồ Chí Minh" }, { location: "Phú Quốc- Kiên Giang" }
    ]

});


myASM.controller("ortherHotel", function ($scope) {
    $scope.suggest = "Gợi ý của chúng tôi"
    $scope.voucher = "Giá ưu đãi"
    $scope.comment = "Đánh giá"
    $scope.hotels = [
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
});

myASM.controller("contact", function ($scope) {
    $scope.homThuGopY = "Hòm thư góp ý"
    $scope.emailTitle = "Email"
    $scope.emailAddress = "hotelbooking@gmail.com"
    $scope.hotline = "Hotline"
    $scope.phone = "0987.876.666 - 0237.679.231"
    $scope.name = "Họ và tên"
    $scope.address = "Địa chỉ"
    $scope.email = "Email"
    $scope.sdt = "SDT"
    $scope.feedback = "Ý kiến đóng góp"
    $scope.diaChiCT = "Số 1 Trịnh Văn Bô, Nam Từ Liêm, Hà Nội"
});