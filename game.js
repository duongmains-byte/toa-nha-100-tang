const player = {

name:"Người Thức Tỉnh",

level:1,
exp:0,
expNeed:100,

floor:1,

gold:0,

hp:100,
maxHp:100,

mana:50,
maxMana:50,

atk:10,
def:5,

talent:"F",

weapon:null,
armor:null,
ring:null,
necklace:null,

skills:[1],

kills:0

};

function getTalentBonus(){

if(typeof getTalent !== "function"){
return null;
}

return getTalent(player.talent);

}

function getTotalAtk(){

let total = player.atk;

if(player.weapon){
total += player.weapon.atk || 0;
}

if(player.ring){
total += player.ring.atk || 0;
}

const talent = getTalentBonus();

if(talent){
total += talent.atkBonus;
}

return total;

}

function getTotalDef(){

let total = player.def;

if(player.armor){
total += player.armor.def || 0;
}

const talent = getTalentBonus();

if(talent){
total += talent.defBonus;
}

return total;

}

function getTotalHp(){

let total = player.maxHp;

if(player.necklace){
total += player.necklace.hp || 0;
}

const talent = getTalentBonus();

if(talent){
total += talent.hpBonus;
}

return total;

}

function gainGold(amount){

player.gold += amount;

updatePlayerUI();

}

function gainExp(amount){

player.exp += amount;

while(player.exp >= player.expNeed){

player.exp -= player.expNeed;

levelUp();

}

updatePlayerUI();

}

function levelUp(){

player.level++;

player.expNeed = Math.floor(player.expNeed * 1.3);

player.maxHp += 25;
player.hp = player.maxHp;

player.maxMana += 10;
player.mana = player.maxMana;

player.atk += 5;
player.def += 2;

updateLeaderboard();

updatePlayerUI();

}

function healFull(){

player.hp = getTotalHp();
player.mana = player.maxMana;

updatePlayerUI();

}

function updatePlayerUI(){

const levelEl = document.getElementById("playerLevel");
const hpEl = document.getElementById("playerHp");
const manaEl = document.getElementById("playerMana");
const atkEl = document.getElementById("playerAtk");
const defEl = document.getElementById("playerDef");
const goldEl = document.getElementById("playerGold");
const floorEl = document.getElementById("playerFloor");
const talentEl = document.getElementById("playerTalent");

if(levelEl){
levelEl.textContent = player.level;
}

if(hpEl){
hpEl.textContent =
player.hp + " / " + getTotalHp();
}

if(manaEl){
manaEl.textContent =
player.mana + " / " + player.maxMana;
}

if(atkEl){
atkEl.textContent = getTotalAtk();
}

if(defEl){
defEl.textContent = getTotalDef();
}

if(goldEl){
goldEl.textContent = player.gold;
}

if(floorEl){
floorEl.textContent = player.floor;
}

if(talentEl){
talentEl.textContent = player.talent;
}

}

window.onload = function(){

updatePlayerUI();

};
let currentBoss = null;

function spawnBoss(){

if(typeof getBossByFloor !== "function"){
return;
}

currentBoss = getBossByFloor(player.floor);

updateBossUI();

}

function updateBossUI(){

if(!currentBoss){
return;
}

const bossName =
document.getElementById("bossName");

const bossHp =
document.getElementById("bossHp");

const bossAtk =
document.getElementById("bossAtk");

if(bossName){
bossName.textContent =
currentBoss.name;
}

if(bossHp){
bossHp.textContent =
currentBoss.hp;
}

if(bossAtk){
bossAtk.textContent =
currentBoss.atk;
}

}

function attackBoss(){

if(!currentBoss){
spawnBoss();
return;
}

let damage =
Math.max(
1,
getTotalAtk() - currentBoss.def
);

currentBoss.hp -= damage;

writeLog(
"Bạn gây " +
damage +
" sát thương lên " +
currentBoss.name
);

if(currentBoss.hp <= 0){

killBoss();

return;

}

bossAttack();

updateBossUI();

}

function bossAttack(){

if(!currentBoss){
return;
}

let damage =
Math.max(
1,
currentBoss.atk -
getTotalDef()
);

player.hp -= damage;

writeLog(
currentBoss.name +
" gây " +
damage +
" sát thương"
);

if(player.hp <= 0){

player.hp = 0;

writeLog(
"Bạn đã bị đánh bại!"
);

alert(
"Bạn đã tử vong!"
);

healFull();

}

updatePlayerUI();

}

function killBoss(){

player.kills++;

let goldReward =
player.floor * 20;

let expReward =
player.floor * 15;

gainGold(
goldReward
);

gainExp(
expReward
);

writeLog(
"Đánh bại " +
currentBoss.name
);

writeLog(
"Nhận " +
goldReward +
" vàng"
);

writeLog(
"Nhận " +
expReward +
" EXP"
);

dropRandomItem();
player.floor++;


updateLeaderboard();

updatePlayerUI();

spawnBoss();

}

function dropRandomItem(){

let roll =
Math.random();

let item = null;

if(
roll < 0.25 &&
typeof getRandomWeapon ===
"function"
){

item = getRandomWeapon();

}

else if(
roll < 0.50 &&
typeof getRandomArmor ===
"function"
){

item = getRandomArmor();

}

else if(
roll < 0.75 &&
typeof getRandomRing ===
"function"
){

item = getRandomRing();

}

else if(
typeof getRandomNecklace ===
"function"
){

item = getRandomNecklace();

}

if(item){

writeLog(
"Rơi: " +
item.name +
" [" +
item.rarity +
"]"
);

}

}

function writeLog(text){

const log =
document.getElementById("battleLog");

if(!log){
return;
}

log.innerHTML =
text +
"<br>" +
log.innerHTML;

}

window.addEventListener(
"load",
function(){

spawnBoss();

}
);
player.inventory = [];

function addItemToInventory(item){

if(!item){
return;
}

player.inventory.push(item);

renderInventory();

}

function dropRandomItem(){

let roll = Math.random();

let item = null;

if(
roll < 0.25 &&
typeof getRandomWeapon === "function"
){
item = getRandomWeapon();
}
else if(
roll < 0.50 &&
typeof getRandomArmor === "function"
){
item = getRandomArmor();
}
else if(
roll < 0.75 &&
typeof getRandomRing === "function"
){
item = getRandomRing();
}
else if(
typeof getRandomNecklace === "function"
){
item = getRandomNecklace();
}

if(item){

addItemToInventory(item);

writeLog(
"Nhặt được: " +
item.name +
" [" +
item.rarity +
"]"
);

}

}

function equipItem(index){

const item =
player.inventory[index];

if(!item){
return;
}

if(item.def !== undefined){

if(item.name.includes("Giáp")){
player.armor = item;
}

}
else if(item.hp !== undefined){

player.necklace = item;

}
else if(item.atk !== undefined){

if(item.name.includes("Nhẫn")){
player.ring = item;
}
else{
player.weapon = item;
}

}

updatePlayerUI();

renderEquipment();

writeLog(
"Trang bị " +
item.name
);

}

function renderInventory(){

const inventory =
document.getElementById(
"inventory"
);

if(!inventory){
return;
}

inventory.innerHTML = "";

player.inventory.forEach(
(item,index)=>{

const btn =
document.createElement(
"button"
);

btn.innerText =
item.name +
" [" +
item.rarity +
"]";

btn.onclick =
function(){

equipItem(index);

};

inventory.appendChild(btn);

inventory.appendChild(
document.createElement("br")
);

}
);

}

function renderEquipment(){

const weaponEl =
document.getElementById(
"equipWeapon"
);

const armorEl =
document.getElementById(
"equipArmor"
);

const ringEl =
document.getElementById(
"equipRing"
);

const necklaceEl =
document.getElementById(
"equipNecklace"
);

if(weaponEl){

weaponEl.textContent =
player.weapon ?
player.weapon.name :
"Chưa có";

}

if(armorEl){

armorEl.textContent =
player.armor ?
player.armor.name :
"Chưa có";

}

if(ringEl){

ringEl.textContent =
player.ring ?
player.ring.name :
"Chưa có";

}

if(necklaceEl){

necklaceEl.textContent =
player.necklace ?
player.necklace.name :
"Chưa có";

}

}

window.addEventListener(
"load",
function(){

renderInventory();

renderEquipment();

}
);
function saveGame(){

const saveData = {

player:player

};

localStorage.setItem(
"tower100_save",
JSON.stringify(saveData)
);

writeLog(
"Đã lưu game"
);

}

function loadGame(){

const saveData =
localStorage.getItem(
"tower100_save"
);

if(!saveData){

return false;

}

try{

const data =
JSON.parse(saveData);

Object.assign(
player,
data.player
);

updatePlayerUI();

renderInventory();

renderEquipment();

renderSkills();

spawnBoss();

writeLog(
"Đã tải dữ liệu"
);

return true;

}
catch(error){

console.log(error);

return false;

}

}

function deleteSave(){

localStorage.removeItem(
"tower100_save"
);

location.reload();

}

function autoSave(){

saveGame();

}

setInterval(
autoSave,
30000
);

window.addEventListener(
"beforeunload",
function(){

saveGame();

}
);

window.addEventListener(
"load",
function(){

const loaded =
loadGame();

if(!loaded){

spawnBoss();

}

}
);
function buyRandomWeapon(){

const item =
getRandomWeapon();

if(
player.gold <
item.price
){

writeLog(
"Không đủ vàng!"
);

return;
}

player.gold -=
item.price;

addItemToInventory(
item
);

updatePlayerUI();

writeLog(
"Mua " +
item.name
);

}

function buyRandomArmor(){

const item =
getRandomArmor();

if(
player.gold <
item.price
){

writeLog(
"Không đủ vàng!"
);

return;
}

player.gold -=
item.price;

addItemToInventory(
item
);

updatePlayerUI();

writeLog(
"Mua " +
item.name
);

}

function buyRandomRing(){

const item =
getRandomRing();

if(
player.gold <
item.price
){

writeLog(
"Không đủ vàng!"
);

return;
}

player.gold -=
item.price;

addItemToInventory(
item
);

updatePlayerUI();

writeLog(
"Mua " +
item.name
);

}

function buyRandomNecklace(){

const item =
getRandomNecklace();

if(
player.gold <
item.price
){

writeLog(
"Không đủ vàng!"
);

return;
}

player.gold -=
item.price;

addItemToInventory(
item
);

updatePlayerUI();

writeLog(
"Mua " +
item.name
);

}

function buyRandomSkill(){

const skill =
getRandomSkill();

const price = 5000;

if(
player.gold <
price
){

writeLog(
"Không đủ vàng!"
);

return;
}

player.gold -=
price;

learnSkill(
skill.id
);

updatePlayerUI();

writeLog(
"Học kỹ năng " +
skill.name
);
 
}  

let leaderboard = [];

function updateLeaderboard(){

const playerData = {

name:player.name,

level:player.level,

floor:player.floor,

gold:player.gold,

kills:player.kills

};

leaderboard = [];

leaderboard.push(
playerData
);

leaderboard.sort(
(a,b)=>
b.floor - a.floor
);

localStorage.setItem(
"tower100_leaderboard",
JSON.stringify(
leaderboard
)
);

renderLeaderboard();

}

function loadLeaderboard(){

const data =
localStorage.getItem(
"tower100_leaderboard"
);

if(!data){

renderLeaderboard();

return;
}

try{

leaderboard =
JSON.parse(data);

}
catch(error){

leaderboard = [];

}

renderLeaderboard();

}

function renderLeaderboard(){

const board =
document.getElementById(
"leaderboard"
);

if(!board){
return;
}

board.innerHTML = "";

leaderboard.forEach(
(playerData,index)=>{

const row =
document.createElement(
"div"
);

row.innerHTML =

"#" +
(index + 1) +

" | " +

playerData.name +

" | Tầng: " +

playerData.floor +

" | Level: " +

playerData.level +

" | Vàng: " +

playerData.gold +

" | Boss: " +

playerData.kills;

board.appendChild(
row
);

}

);

}

window.addEventListener(
"load",
function(){

loadLeaderboard();

}
);
player.skillCooldowns = {};

function renderSkills(){

const container =
document.getElementById(
"skillPanel"
);

if(!container){
return;
}

container.innerHTML = "";

if(!player.skills){
player.skills = [];
}

player.skills.forEach(
skillId=>{

const skill =
getSkillById(skillId);

if(!skill){
return;
}

const btn =
document.createElement(
"button"
);

btn.innerText =
skill.name;

btn.onclick =
function(){

useSkill(skillId);

};

container.appendChild(btn);

}
);

}
function healPlayer(){

    player.hp += 50;

    if(player.hp > getTotalHp()){
        player.hp = getTotalHp();
    }

    updatePlayerUI();

    writeLog("Hồi 50 HP");

}