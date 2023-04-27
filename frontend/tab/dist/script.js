var tabs = document.querySelectorAll(".tabs_wrap ul li");
var globals = document.querySelectorAll(".global");
var continentals = document.querySelectorAll(".continental");
var shorts = document.querySelectorAll(".short");
var all = document.querySelectorAll(".item_wrap");
const sleeps = document.querySelectorAll("[data-sleeps]");

tabs.forEach((tab)=>{
	tab.addEventListener("click", ()=>{
		tabs.forEach((tab)=>{
			tab.classList.remove("active");
		})
		tab.classList.add("active");
		var tabval = tab.getAttribute("data-tabs");

		all.forEach((item)=>{
			item.style.display = "none";
		})

		if(tabval == "global"){
			globals.forEach((global)=>{
				global.style.display = "block";
			})
		}
		else if(tabval == "short"){
			shorts.forEach((short)=>{
				short.style.display = "block";
			})
		}		
		else if(tabval == "continental"){
			continentals.forEach((continental)=>{
				continental.style.display = "block";
			})
		}
		else{
			all.forEach((item)=>{
				item.style.display = "block";
			})
		}

	})
})

const
  range = document.getElementById('range'),
  rangeV = document.getElementById('rangeV'),
  setValue = ()=>{
    const
      newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
      newPosition = 10 - (newValue * 0.2);
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;

	for (const name of sleeps) {
		console.log($(name).data("sleeps"))

		if($(name).data("sleeps") < range.value){
			$(name).hide();
		}else {
			$(name).show();
		}
	}



  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);
