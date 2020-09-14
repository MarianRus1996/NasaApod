var baseUrl = new URL ("https://api.nasa.gov/planetary/apod?api_key=5nSE0mYWUPJlQmmKraV7MPIf2dBYfHN38GrUaUOa");

function getApod(display){
    var getTitle = document.getElementById("title");
    var getImg = document.getElementById("picture");
    getImg.src = display.hdurl;
    getTitle.innerText= display.title;
}

function displayImg(){

    fetch(baseUrl, {method:"GET"})

        .then(function(response){
        return response.json();
    })

    .then(function(jsonResponse){
        getApod(jsonResponse);
    })


}
