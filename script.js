//your JS code here. If required.
const rmitem = document.getElementById("colorSelect");
const button = document.querySelector('input[type="button"]');

button.addEventListener("click" ,()=>{
 const selectedIndex = rmitem.selectedIndex

	if(selectedIndex !== -1){
		rmitem.remove(selectedIndex);
	}
})
	

