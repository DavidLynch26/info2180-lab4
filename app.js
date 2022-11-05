'use strict';

window.onload = function(){


    var searchButton = document.getElementsByClassName("btn")[0];
    var superHeroName = document.getElementById("superHeroName");
    var result = document.getElementById("result");

    searchButton.addEventListener("click", function(){
        fetch("http://localhost/info2180-lab4/superheroes.php")
            .then(response => response.text())
            .then(data => {
                alert
            }) 
    });
}