export default function decorate(block){

    function onButtonClick() {
        alert('Button clicked!');
      
    const apiUrl = 'http://localhost:8089/actions-service/v1/actions/getUsers';



// Make a GET request
fetch(apiUrl)
.then(response => {
if (!response.ok) {
throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
console.log(data);
})
.catch(error => {
console.error('Error:', error);
});
console.log(data);
    }
    
        const newData = [
  ["Alice", 30, "New York"],
  ["Bob", 25, "London"],
  // ... more data
];

const tableBody = document.getElementById("data-body");

for (const row of newData) {
  const tableRow = document.createElement("tr");
  for (const cellData of row) {
    const cell = document.createElement("td");
    cell.textContent = cellData;
    tableRow.appendChild(cell);
  }
  tableBody.appendChild(tableRow);
}
   

    
 
    
    
 }
