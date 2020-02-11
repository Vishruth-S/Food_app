var img = document.querySelectorAll(".hotel-img");
var hotelname = document.querySelectorAll(".hotel-name");
var vegorno = document.querySelectorAll(".veg-or-no");
var hotelrating = document.querySelectorAll(".hotel-rating");
var deltime = document.querySelectorAll(".hotel-del-time"); 
var hotelprice = document.querySelectorAll(".hotel-price");

var favbtn = document.querySelectorAll(".fav");
var vegbtn = document.getElementById("veg-only");

var imgs_arr = ["hotel-imgs/mcdonalds.jpg","hotel-imgs/indian1.jpg" , "hotel-imgs/pizzahut.jpg", "hotel-imgs/kerala1.jpg","hotel-imgs/starbucks.jpg","hotel-imgs/mings.jpg","hotel-imgs/icecream.jpg","hotel-imgs/indian2.jpg","hotel-imgs/subway.jpg","hotel-imgs/arabic.jpg","hotel-imgs/baskin.jpg","hotel-imgs/indian3.jpg","hotel-imgs/burger.jpg","hotel-imgs/chaat.jpg","hotel-imgs/shake.jpg"];
var name_arr = ["McDonalds","Aaryas","Pizza Hut","Gokul Ootupura","Starbucks","Ming's Dumplings","Cold Stone Creamery","Saravana Bhavan","Subway","Zaatar Arabic","Baskin Robbins","The Taj","Burger King","The Chaat street","Keventers Shakes"];
var rating_arr = ["4.5","4.2","4.0","4.7","4.1","4.3","4.2","4.5","4.2","4.0","4.2","4.8","4.0","4.5","4.8"];
var deltime_arr = ["20 mins","10 mins","30 mins","15 mins","15 mins","20mins","10mins","20mins","10mins","20mins","10mins","20mins","15mins","10mins","20mins"];
var hotelprice_arr = ["200","200","500","150","400","150","400","200","200","300","250","500","150","100","400"];
var vegorno_arr = ["0","1","0","1","0","0","1","1","0","0","1","1","0","1","1"];

function assignitems(){
	for (var i = 0; i < img.length; i++) {
		img[i].src=imgs_arr[i];
		
	}
	for (var i = 0; i < hotelname.length; i++) {
		hotelname[i].textContent = name_arr[i];
		
	}
	for (var i = 0; i < hotelrating.length; i++) {
		hotelrating[i].textContent = rating_arr[i];
		
	}
	for (var i = 0; i < deltime.length; i++) {
		deltime[i].textContent = deltime_arr[i];
		
	}
	for (var i = 0; i < hotelprice.length; i++) {
		hotelprice[i].textContent = hotelprice_arr[i];
		
	}
	for (var i = 0; i < vegorno.length; i++) {
		vegorno[i].value = vegorno_arr[i];
	}
}
assignitems();


vegbtn.addEventListener("click",function(){
	if(vegbtn.checked){
	for (var i = 0; i < vegorno.length; i++) {
		if(vegorno[i].value==0)
		{
			vegorno[i].classList.add("veg-no");
		}
	}
    }
	else{
		for (var i = 0; i < vegorno.length; i++) {
			vegorno[i].classList.remove("veg-no");
	}
	}
});

for(var i=0; i<favbtn.length; i++){
    favbtn[i].addEventListener("click",function(){
    this.classList.toggle("fav-selected");
});
}    



