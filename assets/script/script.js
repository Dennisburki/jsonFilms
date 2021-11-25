//Pour utiliser fetch le live server doit etre actif - pour ca il faut ouvrir le dossier qui contient tous les ficheirs

function getInfo(){
    let toto = document.getElementById("mySearch").value

    document.getElementById("copy").innerHTML =""


fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${toto}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
		"x-rapidapi-key": "9df895f41emshe653ddb950d0a94p1784e2jsncf90d4ad6c0f"
	}
})
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log(data.titles[0].title)

    data.titles.forEach(element => {

    document.getElementById("theSearch").innerHTML = `<div class="col-lg-3 col-8" id="theSearch">

        <div class="row m-auto" id="${element.id}">

            <img src ="${element.image}" class="card col-lg-5 mt-3">

            <div class="col-lg-7">

                <div class="row mt-3">

                    <p class="col-lg-12 fw-bold">${element.title}</p>
                    <p class="text col-lg-12">${element.overview}</p>
                    <p class = "text-warning">${displayStar(element.vote_average)}</p>

                </div>
            </div>
        </div>
    </div>`
})
})
}

fetch("assets/json/movies.json")
.then(response => response.json())
.then(data => {
    // console.log(data.results[0].original_title) // pour l'original title de l'objet a l'index 0

    data.results.forEach(element => {

        document.getElementById("copy").innerHTML += `<div class="col-lg-3 col-8" id="copy">

        <div class="row m-auto" id="${element.id}">

            <img src ="${element.poster_path}" class="card col-lg-5 mt-3">

            <div class="col-lg-7">

                <div class="row mt-3">

                    <p class="col-lg-12 fw-bold">${element.original_title}</p>
                    <p class="text col-lg-12">${element.overview}</p>
                    <p class = "text-warning">${displayStar(element.vote_average)}</p>

                </div>
            </div>
        </div>
    </div>`

        // console.log(element.original_title) // pour tous les original title du fichier json  
    })

})


function displayStar(note){
    let vote_average = Number(note) / 2

    vote_average = Math.floor(vote_average)

    let stars =""

    switch(vote_average){

        case 1 :
            stars = `<i class="bi bi-tv-fill"></i> `
            break;

        case 2 :
            stars = `<i class="bi bi-tv-fill"></i> <i class="bi bi-tv-fill"></i> `
            break;

        case 3 :
            stars = `<i class="bi bi-tv-fill"></i> <i class="bi bi-tv-fill"> </i><i class="bi bi-tv-fill"></i>`
            break;

        case 4 :
            stars = `<i class="bi bi-tv-fill"></i> <i class="bi bi-tv-fill"></i> <i class="bi bi-tv-fill"></i> <i class="bi bi-tv-fill"></i>`
            break;

        case 5 :
            stars = `<i class="bi bi-tv-fill"></i><i class="bi bi-tv-fill"></i><i class="bi bi-tv-fill"></i><i class="bi bi-tv-fill"></i><i class="bi bi-tv-fill"></i>`
            break;

        default:
            break;   
    }
    return stars
}