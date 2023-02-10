


const container = document.querySelector(".flex-container");

const button = document.querySelector(".send-button");
let oldValue = button.value;
button.value = oldValue.toUpperCase();

function createKey(name,model,price){
		
		img = "<img class='key-img' src='images/key.jpg'>"
		name = `<h2>${name}</h2>`;
		model= `<h3 id='${model}'>${model}</h3>`;
		price = `<p>price: <b>$${price}</b></p>`;

	return [img,name,model,price];

}



let documentFragment = document.createDocumentFragment();

for (let i = 1; i <= 20; i++){
	
	let modelRandom = Math.round(Math.random()*10000);
	let priceRandom = Math.round(Math.random()*10+30);
	let llave = createKey(`key ${i}`,`model ${modelRandom}`,priceRandom);
	let div = document.createElement("DIV");
	div.addEventListener("click",()=>{

			document.querySelector(".key-data").value = modelRandom;
	})
	div.tabIndex = i;
	div.classList.add(`item${i}`,'flex-item');
	div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
	
	documentFragment.appendChild(div);

}

container.appendChild(documentFragment);