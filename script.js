'use strict';

function getDogz() {
    let breed = document.getElementById("dogbreed").value;
    console.log(breed)
    let apibreed = `https://dog.ceo/api/breed/${breed}/images/random`
        fetch(apibreed)
            .then(response => response.json() ) 
            .then(responseJson => 
                showDogz(responseJson))
            .catch(error => alert('Sorry, that breed is not available. Try using all lowercase letters'));
}
function showDogz(responseJson) {
    console.log(responseJson);
    console.log(responseJson.message);
    if (responseJson.status === 'success'){
    $('.picture').append(`<img src="${responseJson.message}" class="imagen">`)
    }
    else if (response.status === 'error'){
        // alert('Sorry, that breed is not available. Try using all lowercase letters')
    }
    // $('.picture').removeClass('hidden')
}

function itsHappening() {
    $('.ask-doggos').on('submit', function(){
        event.preventDefault();
        getDogz(); 
    })
}

$(function runIt() {
    $(document).ready() 
    console.log('Locked n Loaded');
    itsHappening();
    
});
