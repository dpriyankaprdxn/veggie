var bannerbutton = document.querySelector('.banner-button');
var getAllli = document.querySelectorAll('.veggieimgs li');
var modal = document.querySelector('.modal');
var modalimg = document.querySelector('.modal-content');
var close = document.querySelector('.close');
var closespan = document.getElementsByClassName("close")[0];
var srcvalue;
var button = document.querySelector(".showmore");
var result = document.querySelector(".menulist");
var hamburger = document.querySelector(".hamburger");
var navigation = document.getElementsByTagName('nav')[0];
var k;

button.addEventListener('click',showmoredata);
hamburger.addEventListener('click',navshow);

bannerbutton.addEventListener('click',scrolltoTop);
modal.addEventListener('click',closemodal);

for (var i = 0; i < getAllli.length; i++) {
  (function(x) {
    getAllli[x].addEventListener('click', function() {
      this.classList.add('selectedli');
	    var selectedimg = document.querySelector('.selectedli img');
	    srcvalue =selectedimg.src;
	    showimg();
      this.classList.remove('selectedli');	
    });
  }(i));
}

function closemodal(e) {
	if (e.target == modal) {
    modal.style.display = "none";
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
  }
}

closespan.onclick = function() { 
  modal.style.display = "none";
  document.documentElement.style.overflow = 'scroll';
  document.body.scroll = "yes";
}

function showimg() {
  modal.style.display = 'block';
	modalimg.src = srcvalue;
  document.documentElement.style.overflow = 'hidden';
  document.body.scroll = "no";
}

function scrolltoTop(e) {
	e.preventDefault();
	var elmntToView = document.querySelector(".turnip");
  elmntToView.scrollIntoView(); 
}

var request1 = new XMLHttpRequest();
request1.open('get','http://localhost/priyanka/veggie/assets/menudata.json');
request1.onload  = function() {
	if(this.readyState == 4 && this.status == 200) {
		var data = JSON.parse(request1.responseText);
		j=0;
		menudata(data,4)
	}
};
request1.send();

var j=0,id=0;
function showmoredata(e) {
	e.preventDefault();
	var request = new XMLHttpRequest();
	request.open('get','http://localhost/priyanka/veggie/assets/menudata.json');
	request.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			k=j+4;
			var data = JSON.parse(request.responseText);	
			rem = data.length%4;
	    id =data.length-rem;
	    if(id==j) {
				button.style.display="none";
				k=data.length;
   		}
			menudata(data,k);
	  }
	};
  j=j+4;
	request.send();
}

function menudata(data,k){
	for(var i=j; i<k;i++) {
		var customli = document.createElement('li');
		var heading = document.createElement('h4');
		var text =document.createTextNode(data[i].menu);
		heading.appendChild(text);			
		customli.appendChild(heading);
		var para = document.createElement('p');
		var paratext = document.createTextNode(data[i].typ);
		para.appendChild(paratext);
		customli.appendChild(para);
		result.appendChild(customli);		
	}
}

function navshow() {
	if (navigation.style.display === "block") {
    navigation.style.display = "none";
  } else {
    navigation.style.display = "block";
  }
	hamburger.classList.toggle('open');
}


