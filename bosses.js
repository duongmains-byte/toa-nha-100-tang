const BOSSES = {

1:{
floor:1,
name:"Goblin Trưởng Làng",
hp:120,
atk:8,
def:2,
skill:"Đập Gậy"
},

2:{
floor:2,
name:"Sói Đột Biến",
hp:150,
atk:10,
def:3,
skill:"Cắn Xé"
},

3:{
floor:3,
name:"Khô Lâu Kiếm Sĩ",
hp:180,
atk:12,
def:4,
skill:"Kiếm Chém"
},

4:{
floor:4,
name:"Nhện Độc Khổng Lồ",
hp:220,
atk:14,
def:4,
skill:"Phun Độc"
},

5:{
floor:5,
name:"Thằn Lằn Lửa",
hp:260,
atk:16,
def:5,
skill:"Hỏa Cầu"
},

6:{
floor:6,
name:"Ma Lang",
hp:300,
atk:18,
def:6,
skill:"Ma Trảo"
},

7:{
floor:7,
name:"Xác Sống Tinh Anh",
hp:340,
atk:20,
def:7,
skill:"Lây Nhiễm"
},

8:{
floor:8,
name:"Kỵ Sĩ Không Đầu",
hp:400,
atk:23,
def:8,
skill:"Chém Xuyên"
},

9:{
floor:9,
name:"Quỷ Dơi Máu",
hp:450,
atk:25,
def:8,
skill:"Hút Máu"
},

10:{
floor:10,
name:"Vua Goblin",
hp:600,
atk:30,
def:10,
skill:"Gầm Thét Chiến Tranh"
},

11:{
floor:11,
name:"Thợ Săn Bóng Đêm",
hp:680,
atk:33,
def:11,
skill:"Mũi Tên Độc"
},

12:{
floor:12,
name:"Hắc Lang Vương",
hp:760,
atk:36,
def:12,
skill:"Vuốt Bóng Tối"
},

13:{
floor:13,
name:"Người Đá Cổ Đại",
hp:850,
atk:38,
def:15,
skill:"Nắm Đấm Địa Chấn"
},

14:{
floor:14,
name:"Ác Linh Than Khóc",
hp:940,
atk:41,
def:15,
skill:"Tiếng Hú Oán Hận"
},

15:{
floor:15,
name:"Mãng Xà Độc Vương",
hp:1050,
atk:45,
def:16,
skill:"Nọc Độc Chết Chóc"
},

16:{
floor:16,
name:"Chiến Binh Bóng Tối",
hp:1150,
atk:48,
def:17,
skill:"Ám Sát"
},

17:{
floor:17,
name:"Ma Nhãn",
hp:1250,
atk:52,
def:18,
skill:"Tia Hủy Diệt"
},

18:{
floor:18,
name:"Tướng Quân Xác Sống",
hp:1380,
atk:55,
def:20,
skill:"Triệu Hồi Tử Binh"
},

19:{
floor:19,
name:"Đao Phủ Địa Ngục",
hp:1500,
atk:60,
def:22,
skill:"Đao Trảm"
},

20:{
floor:20,
name:"Kỵ Sĩ Máu",
hp:1800,
atk:70,
def:25,
skill:"Cuồng Huyết"
},

21:{
floor:21,
name:"Tinh Linh Sa Ngã",
hp:1950,
atk:75,
def:26,
skill:"Mưa Tên"
},

22:{
floor:22,
name:"Nhện Chúa Địa Huyệt",
hp:2100,
atk:80,
def:27,
skill:"Tơ Trói"
},

23:{
floor:23,
name:"Cuồng Nhân Hỏa Ngục",
hp:2250,
atk:85,
def:28,
skill:"Hỏa Nộ"
},

24:{
floor:24,
name:"Bạo Quân Băng Giá",
hp:2450,
atk:90,
def:30,
skill:"Băng Phong"
},

25:{
floor:25,
name:"Ác Ma Song Kiếm",
hp:2700,
atk:100,
def:32,
skill:"Song Trảm"
},


26:{
floor:26,
name:"Ma Tướng Hắc Thiết",
hp:3000,
atk:110,
def:35,
skill:"Thiết Quyền"
},

27:{
floor:27,
name:"Hỏa Quỷ",
hp:3300,
atk:120,
def:36,
skill:"Hỏa Trụ"
},

28:{
floor:28,
name:"Địa Huyệt Chúa",
hp:3600,
atk:130,
def:38,
skill:"Địa Chấn"
},

29:{
floor:29,
name:"Song Đầu Lang",
hp:3900,
atk:140,
def:40,
skill:"Xé Xác"
},

30:{
floor:30,
name:"Ác Ma Hỏa Ngục",
hp:4500,
atk:160,
def:45,
skill:"Hỏa Diệt Thế"
},

31:{
floor:31,
name:"Tử Linh Pháp Sư",
hp:4900,
atk:170,
def:46,
skill:"Tử Vong Cầu"
},

32:{
floor:32,
name:"Quỷ Mặt Nạ",
hp:5300,
atk:180,
def:48,
skill:"Ảo Ảnh"
},

33:{
floor:33,
name:"Độc Long Non",
hp:5700,
atk:190,
def:50,
skill:"Long Tức Độc"
},

34:{
floor:34,
name:"Băng Hùng Vương",
hp:6200,
atk:200,
def:52,
skill:"Băng Trảo"
},

35:{
floor:35,
name:"Ám Ảnh Kiếm Khách",
hp:6700,
atk:220,
def:55,
skill:"Ảnh Trảm"
},

36:{
floor:36,
name:"Quỷ Nhãn",
hp:7200,
atk:230,
def:58,
skill:"Ma Quang"
},

37:{
floor:37,
name:"Kỵ Sĩ Địa Ngục",
hp:7800,
atk:240,
def:60,
skill:"Địa Ngục Xung Kích"
},

38:{
floor:38,
name:"Cự Nhân Núi Đá",
hp:8500,
atk:250,
def:65,
skill:"Sơn Hà Chấn"
},

39:{
floor:39,
name:"Huyết Ma",
hp:9200,
atk:270,
def:68,
skill:"Huyết Bạo"
},

40:{
floor:40,
name:"Ma Thần Băng Giá",
hp:10000,
atk:300,
def:75,
skill:"Tuyệt Đối Băng Phong"
},

41:{
floor:41,
name:"Lôi Điểu",
hp:10800,
atk:320,
def:78,
skill:"Thiên Lôi"
},

42:{
floor:42,
name:"Tà Linh Vương",
hp:11600,
atk:340,
def:80,
skill:"Oán Hồn Gào Thét"
},

43:{
floor:43,
name:"Hắc Long Ấu Niên",
hp:12500,
atk:360,
def:85,
skill:"Long Viêm"
},

44:{
floor:44,
name:"Bạo Quân Sa Mạc",
hp:13500,
atk:380,
def:90,
skill:"Bão Cát"
},

45:{
floor:45,
name:"Thiết Giáp Titan",
hp:14500,
atk:400,
def:95,
skill:"Titan Quyền"
},

46:{
floor:46,
name:"Độc Ma Nhện Chúa",
hp:15600,
atk:420,
def:100,
skill:"Thiên Võng"
},

47:{
floor:47,
name:"Lôi Ma",
hp:16800,
atk:450,
def:105,
skill:"Lôi Diệt"
},

48:{
floor:48,
name:"Ma Vương Hộ Vệ",
hp:18000,
atk:480,
def:110,
skill:"Ma Khiên"
},

49:{
floor:49,
name:"Huyết Long",
hp:19500,
atk:520,
def:115,
skill:"Huyết Long Trảo"
},

50:{
floor:50,
name:"Thiên Sứ Sa Ngã",
hp:22000,
atk:600,
def:130,
skill:"Thẩm Phán Hắc Ám"
},
51:{
floor:51,
name:"Chúa Tể Xác Sống",
hp:24000,
atk:650,
def:140,
skill:"Triệu Hồi Tử Quân"
},

52:{
floor:52,
name:"Ma Lang Vương",
hp:25500,
atk:680,
def:145,
skill:"Vuốt Tử Vong"
},

53:{
floor:53,
name:"Độc Long",
hp:27000,
atk:710,
def:150,
skill:"Long Tức Kịch Độc"
},

54:{
floor:54,
name:"Hỏa Ma Tướng",
hp:29000,
atk:750,
def:155,
skill:"Hỏa Diệt Thiên"
},

55:{
floor:55,
name:"Băng Ma Tướng",
hp:31000,
atk:790,
def:160,
skill:"Băng Phong Vạn Lý"
},

56:{
floor:56,
name:"Lôi Ma Tướng",
hp:33000,
atk:830,
def:165,
skill:"Lôi Đình Diệt Thế"
},

57:{
floor:57,
name:"Thạch Cự Nhân",
hp:35000,
atk:870,
def:180,
skill:"Nắm Đấm Đại Địa"
},

58:{
floor:58,
name:"Ám Ảnh Quỷ",
hp:37000,
atk:910,
def:185,
skill:"Ảnh Sát"
},

59:{
floor:59,
name:"Huyết Ma Công Tước",
hp:39000,
atk:960,
def:190,
skill:"Huyết Bạo"
},

60:{
floor:60,
name:"Long Vương Đen",
hp:45000,
atk:1100,
def:220,
skill:"Hắc Long Tức"
},

61:{
floor:61,
name:"Tà Thần Tế Tư",
hp:47000,
atk:1150,
def:225,
skill:"Nguyền Rủa"
},

62:{
floor:62,
name:"Bạo Quân Hoang Mạc",
hp:49000,
atk:1200,
def:230,
skill:"Sa Bão Hủy Diệt"
},

63:{
floor:63,
name:"Quỷ Vương Song Đao",
hp:52000,
atk:1260,
def:235,
skill:"Liên Hoàn Trảm"
},

64:{
floor:64,
name:"Linh Hồn Than Khóc",
hp:55000,
atk:1320,
def:240,
skill:"Âm Hồn Gào Thét"
},

65:{
floor:65,
name:"Kỵ Sĩ Tận Thế",
hp:58000,
atk:1380,
def:250,
skill:"Chiến Mã Địa Ngục"
},

66:{
floor:66,
name:"Địa Ngục Tam Đầu Khuyển",
hp:62000,
atk:1450,
def:260,
skill:"Tam Đầu Hỏa Diệm"
},

67:{
floor:67,
name:"Ác Ma Sừng Đỏ",
hp:66000,
atk:1520,
def:270,
skill:"Huyết Sát"
},

68:{
floor:68,
name:"Ma Long Cổ Đại",
hp:70000,
atk:1600,
def:280,
skill:"Cổ Long Nộ"
},

69:{
floor:69,
name:"Thiên Tai Hắc Vũ",
hp:74000,
atk:1680,
def:290,
skill:"Mưa Tử Vong"
},

70:{
floor:70,
name:"Titan Hủy Diệt",
hp:85000,
atk:1900,
def:330,
skill:"Diệt Thế Quyền"
},

71:{
floor:71,
name:"Bóng Ma Vô Diện",
hp:90000,
atk:1980,
def:340,
skill:"Nuốt Chửng Linh Hồn"
},

72:{
floor:72,
name:"Huyết Long Hoàng",
hp:96000,
atk:2070,
def:350,
skill:"Long Hoàng Trảo"
},

73:{
floor:73,
name:"Tà Thần Hộ Vệ",
hp:102000,
atk:2160,
def:360,
skill:"Tà Quang"
},

74:{
floor:74,
name:"Quỷ Đế",
hp:109000,
atk:2260,
def:380,
skill:"Ma Đế Chi Nộ"
},

75:{
floor:75,
name:"Ma Vương Abyss",
hp:120000,
atk:2500,
def:420,
skill:"Abyss Hủy Diệt"
},

76:{
floor:76,
name:"Hắc Ma Thần",
hp:128000,
atk:2650,
def:440,
skill:"Ma Thần Trảm"
},

77:{
floor:77,
name:"Thiên Tai Chi Long",
hp:136000,
atk:2800,
def:460,
skill:"Thiên Tai Long Tức"
},

78:{
floor:78,
name:"Đọa Lạc Thiên Sứ",
hp:145000,
atk:2950,
def:480,
skill:"Hắc Thẩm Phán"
},

79:{
floor:79,
name:"Hư Không Kẻ Canh Giữ",
hp:155000,
atk:3100,
def:500,
skill:"Hư Không Xé Rách"
},

80:{
floor:80,
name:"Vua Titan",
hp:170000,
atk:3400,
def:550,
skill:"Titan Diệt Thế"
},

81:{
floor:81,
name:"Cổ Thần Tàn Hồn",
hp:180000,
atk:3600,
def:580,
skill:"Thần Uy"
},

82:{
floor:82,
name:"Địa Ngục Chi Chủ",
hp:190000,
atk:3800,
def:600,
skill:"Ngục Viêm"
},

83:{
floor:83,
name:"Quỷ Vương Bất Tử",
hp:200000,
atk:4000,
def:620,
skill:"Tái Sinh"
},

84:{
floor:84,
name:"Long Đế",
hp:215000,
atk:4250,
def:650,
skill:"Đế Long Trảm"
},

85:{
floor:85,
name:"Thần Săn Mồi",
hp:230000,
atk:4500,
def:680,
skill:"Săn Thần"
},

86:{
floor:86,
name:"Hư Không Ma Quân",
hp:245000,
atk:4750,
def:710,
skill:"Hư Không Bạo Liệt"
},

87:{
floor:87,
name:"Cổ Ma Vương",
hp:260000,
atk:5000,
def:740,
skill:"Ma Vương Chi Nộ"
},

88:{
floor:88,
name:"Kẻ Nuốt Chửng Tinh Không",
hp:280000,
atk:5300,
def:780,
skill:"Tinh Không Thôn Phệ"
},

89:{
floor:89,
name:"Thần Hủy Diệt",
hp:300000,
atk:5600,
def:820,
skill:"Diệt Thần Quang"
},

90:{
floor:90,
name:"Abyss Đại Đế",
hp:330000,
atk:6200,
def:900,
skill:"Abyss Chung Kết"
},

91:{
floor:91,
name:"Cổ Long Tổ",
hp:360000,
atk:6800,
def:980,
skill:"Tổ Long Hủy Diệt"
},

92:{
floor:92,
name:"Ma Thần Tối Cao",
hp:390000,
atk:7400,
def:1060,
skill:"Ma Thần Giáng Thế"
},

93:{
floor:93,
name:"Đấng Canh Giữ Hư Không",
hp:430000,
atk:8100,
def:1150,
skill:"Hư Không Thẩm Phán"
},

94:{
floor:94,
name:"Thần Chiến Tranh",
hp:470000,
atk:8800,
def:1240,
skill:"Chiến Tranh Bất Tận"
},

95:{
floor:95,
name:"Thần Tai Ương",
hp:520000,
atk:9600,
def:1340,
skill:"Ngày Tận Thế"
},

96:{
floor:96,
name:"Kẻ Kết Liễu Thế Giới",
hp:580000,
atk:10500,
def:1450,
skill:"Diệt Thế"
},

97:{
floor:97,
name:"Chúa Tể Hỗn Mang",
hp:650000,
atk:11500,
def:1570,
skill:"Hỗn Mang Bạo Loạn"
},

98:{
floor:98,
name:"Đấng Vượt Ngoài Thần Linh",
hp:730000,
atk:12600,
def:1700,
skill:"Siêu Việt"
},

99:{
floor:99,
name:"Người Gác Cổng Cuối Cùng",
hp:850000,
atk:14000,
def:1900,
skill:"Phán Quyết Tối Hậu"
},

100:{
floor:100,
name:"THẦN THÁP",
hp:1000000,
atk:16000,
def:2200,
skill:"Tháp Thần Chung Kết"
}

};

function getBossByFloor(floor){

if(BOSSES[floor]){
return BOSSES[floor];
}

return {
floor:floor,
name:"Quái Lang Thang",
hp:100 + floor * 50,
atk:10 + floor * 5,
def:floor,
skill:"Tấn Công Thường"
};

}