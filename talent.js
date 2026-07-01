const TALENTS = {

F:{
rank:"F",
name:"Người Bình Thường",
atkBonus:0,
defBonus:0,
hpBonus:0,
dropBonus:0,
skill:"Không có",
description:"Thiên phú thấp nhất."
},

E:{
rank:"E",
name:"Chiến Binh Sơ Cấp",
atkBonus:5,
defBonus:5,
hpBonus:50,
dropBonus:2,
skill:"Sức Mạnh Nhỏ",
description:"Tăng nhẹ thuộc tính."
},

D:{
rank:"D",
name:"Thợ Săn",
atkBonus:10,
defBonus:10,
hpBonus:100,
dropBonus:5,
skill:"Mắt Thợ Săn",
description:"Tăng tỷ lệ rơi đồ."
},

C:{
rank:"C",
name:"Kỵ Sĩ",
atkBonus:20,
defBonus:20,
hpBonus:200,
dropBonus:8,
skill:"Tinh Thần Kỵ Sĩ",
description:"Tăng khả năng sinh tồn."
},

B:{
rank:"B",
name:"Cuồng Chiến Sĩ",
atkBonus:40,
defBonus:25,
hpBonus:400,
dropBonus:10,
skill:"Cuồng Bạo",
description:"Tăng mạnh công kích."
},

A:{
rank:"A",
name:"Long Huyết Chiến Sĩ",
atkBonus:70,
defBonus:40,
hpBonus:800,
dropBonus:15,
skill:"Long Huyết",
description:"Sức mạnh của Long tộc."
},

S:{
rank:"S",
name:"Thiên Tài",
atkBonus:120,
defBonus:70,
hpBonus:1500,
dropBonus:20,
skill:"Thiên Tài Chi Tâm",
description:"Thiên phú vượt xa người thường."
},

SS:{
rank:"SS",
name:"Thiên Mệnh Giả",
atkBonus:200,
defBonus:120,
hpBonus:3000,
dropBonus:30,
skill:"Thiên Mệnh",
description:"Được thế giới ưu ái."
},

SSS:{
rank:"SSS",
name:"Chúa Tể Tháp",
atkBonus:350,
defBonus:200,
hpBonus:6000,
dropBonus:50,
skill:"Thức Tỉnh Tối Thượng",
description:"Thiên phú mạnh nhất."
}

};

function getTalent(rank){

return TALENTS[rank];

}

function upgradeTalent(rank){

switch(rank){

case "F":
return "E";

case "E":
return "D";

case "D":
return "C";

case "C":
return "B";

case "B":
return "A";

case "A":
return "S";

case "S":
return "SS";

case "SS":
return "SSS";

default:
return "SSS";

}

}
