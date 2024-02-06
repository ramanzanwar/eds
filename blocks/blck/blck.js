export default function decorate(block){

    function onButtonClick() {
  alert('Button clicked!');
}

    const footerMeta = getMetadata('blck');
  block.textContent = '';
    // 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("did something");
});
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
