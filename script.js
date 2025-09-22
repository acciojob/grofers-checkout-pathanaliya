const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(p => {
    let value = parseInt(p.textContent.trim()) || 0;
    total += value;
  });

 
  let ansRow = document.getElementById("ans");
  if (!ansRow) {
    ansRow = document.createElement("tr");
    ansRow.setAttribute("id", "ans");
    const ansCell = document.createElement("td");
    ansCell.setAttribute("colspan", "2");
    ansRow.appendChild(ansCell);
    document.querySelector("table").appendChild(ansRow);
  }

  ansRow.querySelector("td").textContent = total;
};

getSumBtn.addEventListener("click", getSum);
