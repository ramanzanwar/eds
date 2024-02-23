export default function decorate(block){

    
        alert('Button clicked!');
      
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
    const data=[];

    const newData = [
       
      ];

// Make a GET request
// Initialize an empty array to store API responses

// Example API call using fetch
fetch('https://jsonplaceholder.typicode.com/posts/1')
 .then(response => response.json())
 .then(data => {
   // Assuming the API response is an array of objects
   // Push each response object into the apiResponses array
   newData.push(data);
   console.log('New  data:', newData);
   console.log(data);
 })
 .catch(error => {
   console.error('Error fetching API data:', error);
 });

    
    
        

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



// const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Replace with your API endpoint

// $('#fetch-button').click(function() {
//   $.ajax({
//     url: apiUrl,
//     dataType: 'json',
//     success: function(data) {
//       const formattedData = `
//         <h2>Title: ${data.title}</h2>
//         <p>Body: ${data.body}</p>
//       `;
//       $('#data-container').html(formattedData);
//     },
//     error: function(error) {
//       console.error('Error:', error);
//       $('#data-container').text('Error fetching data!');
//     }
//   });
// });
   

    
 
    
    
 }
