'use strict';

window.onload = function(){
    var searchButton = document.getElementsByClassName("btn")[0];
    document.getElementById("superHeroName").innerHTML.trim();
    var result = document.getElementById("result");

    searchButton.addEventListener("click", function(event){
        event.preventDefault();
        fetch("superheroes.php")
            .then(response => response.text())
            .then(data => {
                console.log(data);
            })
        // document.getElementsByTagName("form")[0].submit();
    });
}