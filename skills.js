const SKILLS = [

{
id:1,
name:"Hỏa Cầu",
rarity:"Thường",
manaCost:10,
cooldown:3,
damage:50,
description:"Phóng một quả cầu lửa gây sát thương."
},

{
id:2,
name:"Lôi Kích",
rarity:"Thường",
manaCost:15,
cooldown:4,
damage:80,
description:"Triệu hồi tia sét đánh trúng kẻ địch."
},

{
id:3,
name:"Hồi Phục",
rarity:"Thường",
manaCost:20,
cooldown:5,
heal:100,
description:"Hồi phục HP cho bản thân."
},

{
id:4,
name:"Kiếm Khí",
rarity:"Hiếm",
manaCost:25,
cooldown:5,
damage:140,
description:"Chém ra một đạo kiếm khí."
},

{
id:5,
name:"Cuồng Bạo",
rarity:"Hiếm",
manaCost:30,
cooldown:8,
buffAtk:50,
description:"Tăng công kích trong thời gian ngắn."
},

{
id:6,
name:"Mưa Tên",
rarity:"Hiếm",
manaCost:35,
cooldown:6,
damage:180,
description:"Bắn liên tiếp hàng chục mũi tên."
},

{
id:7,
name:"Băng Phong",
rarity:"Sử Thi",
manaCost:40,
cooldown:8,
damage:250,
description:"Đóng băng và gây sát thương lớn."
},

{
id:8,
name:"Lôi Đình Diệt Thế",
rarity:"Sử Thi",
manaCost:50,
cooldown:10,
damage:350,
description:"Gọi xuống sấm sét hủy diệt."
},

{
id:9,
name:"Huyết Bạo",
rarity:"Huyền Thoại",
manaCost:60,
cooldown:12,
damage:500,
description:"Tiêu hao máu để gây sát thương cực mạnh."
},

{
id:10,
name:"Long Tức",
rarity:"Huyền Thoại",
manaCost:70,
cooldown:12,
damage:700,
description:"Phun long tức thiêu đốt kẻ địch."
},

{
id:11,
name:"Thiên Phạt",
rarity:"Thần Thoại",
manaCost:90,
cooldown:15,
damage:1000,
description:"Sức mạnh trừng phạt từ bầu trời."
},

{
id:12,
name:"Diệt Thế",
rarity:"Thần Thoại",
manaCost:120,
cooldown:20,
damage:1500,
description:"Kỹ năng tối thượng hủy diệt mọi thứ."
}

];

function getSkillById(id){

return SKILLS.find(
skill => skill.id === id
);

}

function getRandomSkill(){

return SKILLS[
Math.floor(
Math.random()*SKILLS.length
)
];

}
