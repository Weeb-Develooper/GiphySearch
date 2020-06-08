const button = document.getElementById("submitRes");
const input = document.getElementById("searchRes");
button.addEventListener("click",function(){
    console.log(input.value);
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=Khj2QQ7wNcBc6MQtNeby6N6kSkjC6lvs&q=${input.value}&limit=25&offset=0&rating=G&lang=en`)
    .then(data => data.json()).then(submit => console.log(submit));
})