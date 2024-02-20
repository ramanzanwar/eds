export default function decorate(block){

//     function onButtonClick() {
//         alert('Button clicked!');
      
//     const apiUrl = 'http://localhost:8089/actions-service/v1/actions/getUsers';



// // Make a GET request
// fetch(apiUrl)
// .then(response => {
// if (!response.ok) {
// throw new Error('Network response was not ok');
// }
// return response.json();
// })
// .then(data => {
// console.log(data);
// })
// .catch(error => {
// console.error('Error:', error);
// });
//     }
function Body(){
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
    const DisplayData=data.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.user_Id}</td>
                    <td>{info.name}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
}
