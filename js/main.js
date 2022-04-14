//  document.write("Java script says Hello");
console.info("Pig Rules!");
const puk=10;
var num=3;
var num_1=5;
var num_2=15;
console.info(num);
if (num==5) console.info("Жопка :",num);else console.info("Жопулька",puk);
console.log("Вычитание: "+(num_1+num_2));
var num_3=5;
console.log(num_3);
num_3=num_3+7;
num_3++;
console.log(num_3);
var arr=[6,53,12,63,75,3,46,23,76,42,34];
var stroka=arr.join(', ');
console.log(arr);
console.log(arr.join(", "));
console.log(arr.reverse());
console.log(stroka.split(", "));

i=0;
while(i<arr.length){
console.log("Элемент массива номер ",i+1,arr[i]);
  i++;
}


function Perdok(word){
  console.log("Privet");
  console.log(word +",","ты пердушка!");
}
Perdok("Миша");
var counter=0;
function Pig(el){
counter++;
  if(counter>=10)console.log("Харош уже!");else{
  console.log(counter);}
  el.innerHTML="Вы тыкнули "+counter+" раз";
  el.style.cssText="border-color:blue;background-color:green;color:red";
}

var text=document.getElementById('text');
console.log(text.title);
var spans=document.getElementsByTagName('span');
for (var i = 0; i < spans.length; i++) {
  console.log(spans[i].innerHTML);
}
var pukish=1;
function Kakaha(){for (var i = 0; i < spans.length; i++) {
  spans[i].innerHTML="Бздок"+pukish;
  pukish++;
}}
document.getElementById('main-form').addEventListener("submit",checkform);

var id=setInterval(my_func,1000);
var counter=0;
function my_func(){

  counter++;
  console.log("Counter: "+counter);
  if(counter==3) clearInterval(id);
}
setTimeout(function(){console.log("Timer is Over")},20000);

var date=new Date();

console.log(date.getHours());



function checkform(event){
  event.preventDefault();
  var el=document.getElementById('main-form');
  console.log(event);
  var fail="";
  var name=el.name.value;
var pass=el.pass.value;
var repass=el.repass.value;
var sex=el.state.value;
  console.log(name,pass,sex);
if(name==""||pass==""||sex=="") fail="Заполните все поля!";
  else if(name.length <=1||name.length>50) fail="Введите корректное имя";
  else if(pass!=repass) fail="Пароли должны совпадать!";
  else if(pass.split("&").length>1) fail= "Некорректный пароль";
if(fail !="") {document.getElementById("error").style.cssText="visibility:visible;";document.getElementById("error").innerHTML="Ошибка: "+fail;}
else {document.getElementById("error").style.cssText="visibility:visible;color:green";document.getElementById("error").innerHTML="Всё заполнено корректно)";}
}

class Person {
  constructor(name,age,happiness){
    this.name= name;
    this.age= age;
        this.happiness= happiness;}
       info(){console.log("Имя: "+this.name +" Возвраст: "+this.age+" Петух? "+ this.happiness);}
}

var alex=new Person('Alex',45,true);
alex.info();
