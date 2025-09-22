const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices= element.querySelectorAll("price");
	let total = 0;
	price.forEach((prices) =>{
		total += parseInt(price.textContent); 
	})

	let table = document.querySelector("table");
	let newRow = document.createElement("tr");
	let newCell = document.createElement("td");

	newCell.setAttribute("colspan" , "2");
	newCell.style.fontWeight = "bold";
	newCell.textContent = "Total Price: Rs" + total;

	newRow.appendChild(newCell);
	table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

