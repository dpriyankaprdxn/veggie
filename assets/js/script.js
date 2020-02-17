var bannerbutton = document.querySelector('.banner-button');
var getAllImages = document.querySelectorAll('.veggieimgs li');

bannerbutton.addEventListener('click',scrolltoTop);

console.log(getAllImages)
for (var i = 0; i < getAllImages.length; i++) {
  (function(x) {
    getAllImages[x].addEventListener('click', function() {
      console.log('kkkhc');
      console.log(getAllImages[x].figure);
	  
	      console.log(document.querySelector('.veggieimgs img'));

		
    });
  }(i));
}

function scrolltoTop(e) {
	e.preventDefault();
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}

var button = document.querySelector(".showmore");
var result = document.querySelector(".menulist");

button.addEventListener('click',showmoredata);

var request1 = new XMLHttpRequest();
request1.open('get','http://localhost/veggie/assets/menudata.json');
request1.onload  = function() {
	if(this.readyState == 4 && this.status == 200) {
		var data = JSON.parse(request1.responseText);
		console.log(data.length);
		console.log(request1.responseText);
		menudata(data,0,4);
	}
};
request1.send();


function menudata(data,j,k){
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

var j=0,id=0;
function showmoredata(e) {
	e.preventDefault();
	var request = new XMLHttpRequest();
request.open('get','http://localhost/veggie/assets/menudata.json');
		request.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(request.responseText);
			rem = data.length%4;
	    id =data.length-rem;
			for(var i=j; i<j+4;i++) {
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
	};
  j=j+4;
	if(id==j) {
		button.style.display="none";
		request.onreadystatechange = function() {
			if(this.readyState == 4 && this.status == 200) {
				var data = JSON.parse(request.responseText);
				for(var i=j; i<data.length;i++) {
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
		};
	}
	request.send();
}
