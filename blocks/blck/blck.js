export default function decorate(block){

    const button = document.createElement('button')
        button.innerText = 'Can you click me?'
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

}
