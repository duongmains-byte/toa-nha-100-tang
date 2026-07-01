const WEAPONS = [

{
id:1,
name:"Kiếm Gỗ",
rarity:"Thường",
atk:2,
price:50
},

{
id:2,
name:"Dao Săn",
rarity:"Thường",
atk:4,
price:100
},

{
id:3,
name:"Rìu Cũ",
rarity:"Thường",
atk:6,
price:150
},

{
id:4,
name:"Thương Gỉ Sét",
rarity:"Thường",
atk:8,
price:200
},

{
id:5,
name:"Kiếm Sắt",
rarity:"Thường",
atk:10,
price:300
},

{
id:6,
name:"Đại Đao",
rarity:"Hiếm",
atk:15,
price:500
},

{
id:7,
name:"Kiếm Kỵ Sĩ",
rarity:"Hiếm",
atk:18,
price:700
},

{
id:8,
name:"Thương Bạc",
rarity:"Hiếm",
atk:22,
price:900
},

{
id:9,
name:"Rìu Chiến",
rarity:"Hiếm",
atk:26,
price:1200
},

{
id:10,
name:"Song Đao",
rarity:"Hiếm",
atk:30,
price:1500
},

{
id:11,
name:"Kiếm Hắc Thiết",
rarity:"Hiếm",
atk:35,
price:1800
},

{
id:12,
name:"Đao Trảm Quỷ",
rarity:"Hiếm",
atk:40,
price:2200
},

{
id:13,
name:"Kiếm Ma Lang",
rarity:"Sử Thi",
atk:50,
price:3000
},

{
id:14,
name:"Đại Kiếm Bạo Phong",
rarity:"Sử Thi",
atk:60,
price:4000
},

{
id:15,
name:"Lôi Đình Kiếm",
rarity:"Sử Thi",
atk:70,
price:5000
},

{
id:16,
name:"Hỏa Long Đao",
rarity:"Sử Thi",
atk:80,
price:6500
},

{
id:17,
name:"Băng Phách Kiếm",
rarity:"Sử Thi",
atk:90,
price:8000
},

{
id:18,
name:"Quỷ Nhận",
rarity:"Sử Thi",
atk:100,
price:9500
},

{
id:19,
name:"Đại Kiếm Titan",
rarity:"Sử Thi",
atk:115,
price:11000
},

{
id:20,
name:"Long Nha Kiếm",
rarity:"Sử Thi",
atk:130,
price:13000
},

{
id:21,
name:"Huyết Ma Đao",
rarity:"Huyền Thoại",
atk:160,
price:18000
},

{
id:22,
name:"Kiếm Thánh",
rarity:"Huyền Thoại",
atk:190,
price:22000
},

{
id:23,
name:"Long Vương Kiếm",
rarity:"Huyền Thoại",
atk:220,
price:26000
},

{
id:24,
name:"Thiên Sứ Chi Kiếm",
rarity:"Huyền Thoại",
atk:260,
price:30000
},

{
id:25,
name:"Abyss Ma Kiếm",
rarity:"Huyền Thoại",
atk:300,
price:35000
},

{
id:26,
name:"Thần Long Thương",
rarity:"Thần Thoại",
atk:380,
price:50000
},

{
id:27,
name:"Diệt Thế Đại Đao",
rarity:"Thần Thoại",
atk:450,
price:65000
},

{
id:28,
name:"Hư Không Kiếm",
rarity:"Thần Thoại",
atk:520,
price:80000
},

{
id:29,
name:"Thần Phạt Chi Nhận",
rarity:"Thần Thoại",
atk:620,
price:100000
},

{
id:30,
name:"Kiếm Thần Chung Kết",
rarity:"Thần Thoại",
atk:800,
price:150000
}

];

function getRandomWeapon(){

return WEAPONS[
Math.floor(
Math.random()*WEAPONS.length
)
];

}
const ARMORS = [

{
id:1,
name:"Áo Vải Cũ",
rarity:"Thường",
def:2,
price:50
},

{
id:2,
name:"Áo Da",
rarity:"Thường",
def:4,
price:100
},

{
id:3,
name:"Giáp Da Gia Cố",
rarity:"Thường",
def:6,
price:150
},

{
id:4,
name:"Giáp Đồng",
rarity:"Thường",
def:8,
price:250
},

{
id:5,
name:"Giáp Sắt",
rarity:"Thường",
def:10,
price:400
},

{
id:6,
name:"Giáp Thợ Săn",
rarity:"Hiếm",
def:14,
price:700
},

{
id:7,
name:"Giáp Lính Gác",
rarity:"Hiếm",
def:18,
price:1000
},

{
id:8,
name:"Giáp Kỵ Sĩ",
rarity:"Hiếm",
def:22,
price:1400
},

{
id:9,
name:"Giáp Bạc",
rarity:"Hiếm",
def:26,
price:1800
},

{
id:10,
name:"Giáp Tinh Cương",
rarity:"Hiếm",
def:30,
price:2300
},

{
id:11,
name:"Giáp Hắc Thiết",
rarity:"Hiếm",
def:35,
price:3000
},

{
id:12,
name:"Giáp Chiến Trường",
rarity:"Hiếm",
def:40,
price:3800
},

{
id:13,
name:"Giáp Ma Lang",
rarity:"Sử Thi",
def:48,
price:5000
},

{
id:14,
name:"Giáp Hỏa Diệm",
rarity:"Sử Thi",
def:56,
price:6500
},

{
id:15,
name:"Giáp Băng Sương",
rarity:"Sử Thi",
def:64,
price:8000
},

{
id:16,
name:"Giáp Lôi Đình",
rarity:"Sử Thi",
def:72,
price:9500
},

{
id:17,
name:"Giáp Địa Long",
rarity:"Sử Thi",
def:82,
price:11500
},

{
id:18,
name:"Giáp Quỷ Tộc",
rarity:"Sử Thi",
def:92,
price:13500
},

{
id:19,
name:"Giáp Titan",
rarity:"Sử Thi",
def:104,
price:16000
},

{
id:20,
name:"Giáp Cự Long",
rarity:"Sử Thi",
def:118,
price:19000
},

{
id:21,
name:"Giáp Huyết Ma",
rarity:"Huyền Thoại",
def:140,
price:25000
},

{
id:22,
name:"Giáp Thánh Kỵ",
rarity:"Huyền Thoại",
def:165,
price:30000
},

{
id:23,
name:"Giáp Long Vương",
rarity:"Huyền Thoại",
def:190,
price:36000
},

{
id:24,
name:"Giáp Thiên Sứ",
rarity:"Huyền Thoại",
def:220,
price:43000
},

{
id:25,
name:"Giáp Abyss",
rarity:"Huyền Thoại",
def:260,
price:50000
},

{
id:26,
name:"Thần Giáp Thanh Long",
rarity:"Thần Thoại",
def:320,
price:70000
},

{
id:27,
name:"Thần Giáp Titan",
rarity:"Thần Thoại",
def:390,
price:90000
},

{
id:28,
name:"Thần Giáp Hư Không",
rarity:"Thần Thoại",
def:470,
price:115000
},

{
id:29,
name:"Thần Giáp Diệt Thế",
rarity:"Thần Thoại",
def:560,
price:140000
},

{
id:30,
name:"Thần Giáp Chung Kết",
rarity:"Thần Thoại",
def:700,
price:180000
}

];

function getRandomArmor(){

return ARMORS[
Math.floor(
Math.random()*ARMORS.length
)
];

}
const RINGS = [

{
id:1,
name:"Nhẫn Đồng",
rarity:"Thường",
atk:1,
price:50
},

{
id:2,
name:"Nhẫn Gỗ",
rarity:"Thường",
atk:2,
price:100
},

{
id:3,
name:"Nhẫn Đá",
rarity:"Thường",
atk:3,
price:150
},

{
id:4,
name:"Nhẫn Thợ Săn",
rarity:"Thường",
atk:4,
price:200
},

{
id:5,
name:"Nhẫn Chiến Binh",
rarity:"Thường",
atk:5,
price:300
},

{
id:6,
name:"Nhẫn Sắt",
rarity:"Hiếm",
atk:7,
price:500
},

{
id:7,
name:"Nhẫn Bạc",
rarity:"Hiếm",
atk:9,
price:700
},

{
id:8,
name:"Nhẫn Hắc Thiết",
rarity:"Hiếm",
atk:12,
price:1000
},

{
id:9,
name:"Nhẫn Cuồng Chiến",
rarity:"Hiếm",
atk:15,
price:1400
},

{
id:10,
name:"Nhẫn Sức Mạnh",
rarity:"Hiếm",
atk:18,
price:1800
},

{
id:11,
name:"Nhẫn Hỏa Diệm",
rarity:"Hiếm",
atk:22,
price:2300
},

{
id:12,
name:"Nhẫn Băng Sương",
rarity:"Hiếm",
atk:26,
price:3000
},

{
id:13,
name:"Nhẫn Lôi Đình",
rarity:"Sử Thi",
atk:32,
price:4000
},

{
id:14,
name:"Nhẫn Độc Long",
rarity:"Sử Thi",
atk:38,
price:5200
},

{
id:15,
name:"Nhẫn Ma Lang",
rarity:"Sử Thi",
atk:45,
price:6500
},

{
id:16,
name:"Nhẫn Quỷ Tộc",
rarity:"Sử Thi",
atk:52,
price:8000
},

{
id:17,
name:"Nhẫn Titan",
rarity:"Sử Thi",
atk:60,
price:9500
},

{
id:18,
name:"Nhẫn Huyết Ma",
rarity:"Sử Thi",
atk:70,
price:11500
},

{
id:19,
name:"Nhẫn Cự Long",
rarity:"Sử Thi",
atk:82,
price:13500
},

{
id:20,
name:"Nhẫn Thần Săn",
rarity:"Sử Thi",
atk:95,
price:16000
},

{
id:21,
name:"Nhẫn Long Vương",
rarity:"Huyền Thoại",
atk:120,
price:22000
},

{
id:22,
name:"Nhẫn Thiên Sứ",
rarity:"Huyền Thoại",
atk:145,
price:28000
},

{
id:23,
name:"Nhẫn Hắc Long",
rarity:"Huyền Thoại",
atk:175,
price:34000
},

{
id:24,
name:"Nhẫn Abyss",
rarity:"Huyền Thoại",
atk:210,
price:41000
},

{
id:25,
name:"Nhẫn Ma Thần",
rarity:"Huyền Thoại",
atk:250,
price:50000
},

{
id:26,
name:"Nhẫn Thanh Long",
rarity:"Thần Thoại",
atk:320,
price:70000
},

{
id:27,
name:"Nhẫn Hư Không",
rarity:"Thần Thoại",
atk:400,
price:90000
},

{
id:28,
name:"Nhẫn Diệt Thế",
rarity:"Thần Thoại",
atk:500,
price:115000
},

{
id:29,
name:"Nhẫn Cổ Thần",
rarity:"Thần Thoại",
atk:620,
price:145000
},

{
id:30,
name:"Nhẫn Thần Tháp",
rarity:"Thần Thoại",
atk:800,
price:200000
}

];

function getRandomRing(){

return RINGS[
Math.floor(
Math.random()*RINGS.length
)
];

}
const NECKLACES = [

{
id:1,
name:"Dây Chuyền Gỗ",
rarity:"Thường",
hp:20,
price:50
},

{
id:2,
name:"Dây Chuyền Đồng",
rarity:"Thường",
hp:40,
price:100
},

{
id:3,
name:"Dây Chuyền Đá",
rarity:"Thường",
hp:60,
price:150
},

{
id:4,
name:"Dây Chuyền Thợ Săn",
rarity:"Thường",
hp:80,
price:200
},

{
id:5,
name:"Dây Chuyền Chiến Binh",
rarity:"Thường",
hp:100,
price:300
},

{
id:6,
name:"Dây Chuyền Sắt",
rarity:"Hiếm",
hp:130,
price:500
},

{
id:7,
name:"Dây Chuyền Bạc",
rarity:"Hiếm",
hp:160,
price:700
},

{
id:8,
name:"Dây Chuyền Hắc Thiết",
rarity:"Hiếm",
hp:200,
price:1000
},

{
id:9,
name:"Dây Chuyền Cuồng Chiến",
rarity:"Hiếm",
hp:240,
price:1400
},

{
id:10,
name:"Dây Chuyền Sức Mạnh",
rarity:"Hiếm",
hp:280,
price:1800
},

{
id:11,
name:"Dây Chuyền Hỏa Diệm",
rarity:"Hiếm",
hp:330,
price:2300
},

{
id:12,
name:"Dây Chuyền Băng Sương",
rarity:"Hiếm",
hp:380,
price:3000
},

{
id:13,
name:"Dây Chuyền Lôi Đình",
rarity:"Sử Thi",
hp:450,
price:4000
},

{
id:14,
name:"Dây Chuyền Độc Long",
rarity:"Sử Thi",
hp:520,
price:5200
},

{
id:15,
name:"Dây Chuyền Ma Lang",
rarity:"Sử Thi",
hp:600,
price:6500
},

{
id:16,
name:"Dây Chuyền Quỷ Tộc",
rarity:"Sử Thi",
hp:700,
price:8000
},

{
id:17,
name:"Dây Chuyền Titan",
rarity:"Sử Thi",
hp:820,
price:9500
},

{
id:18,
name:"Dây Chuyền Huyết Ma",
rarity:"Sử Thi",
hp:950,
price:11500
},

{
id:19,
name:"Dây Chuyền Cự Long",
rarity:"Sử Thi",
hp:1100,
price:13500
},

{
id:20,
name:"Dây Chuyền Thần Săn",
rarity:"Sử Thi",
hp:1300,
price:16000
},

{
id:21,
name:"Dây Chuyền Long Vương",
rarity:"Huyền Thoại",
hp:1600,
price:22000
},

{
id:22,
name:"Dây Chuyền Thiên Sứ",
rarity:"Huyền Thoại",
hp:1900,
price:28000
},

{
id:23,
name:"Dây Chuyền Hắc Long",
rarity:"Huyền Thoại",
hp:2300,
price:34000
},

{
id:24,
name:"Dây Chuyền Abyss",
rarity:"Huyền Thoại",
hp:2800,
price:41000
},

{
id:25,
name:"Dây Chuyền Ma Thần",
rarity:"Huyền Thoại",
hp:3400,
price:50000
},

{
id:26,
name:"Dây Chuyền Thanh Long",
rarity:"Thần Thoại",
hp:4200,
price:70000
},

{
id:27,
name:"Dây Chuyền Hư Không",
rarity:"Thần Thoại",
hp:5200,
price:90000
},

{
id:28,
name:"Dây Chuyền Diệt Thế",
rarity:"Thần Thoại",
hp:6500,
price:115000
},

{
id:29,
name:"Dây Chuyền Cổ Thần",
rarity:"Thần Thoại",
hp:8000,
price:145000
},

{
id:30,
name:"Dây Chuyền Thần Tháp",
rarity:"Thần Thoại",
hp:10000,
price:200000
}

];

function getRandomNecklace(){

return NECKLACES[
Math.floor(
Math.random()*NECKLACES.length
)
];

};
