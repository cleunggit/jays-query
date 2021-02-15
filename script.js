// my app object
const app = {};

// variables
app.shoeCollection = [
    "aj1",
    "aj2",
    "aj3",
    "aj4",
    "aj5",
    "aj6",
    "aj7",
    "aj8",
    "aj9",
    "aj10",
    "aj11",
    "aj12",
    "aj13",
    "aj14",
];
app.favorites = [];

// functions
// generates a random shoe from the collection
app.shoeGenerator = () => {
    let random = Math.floor(Math.random() * 14);
    let img = app.shoeCollection[random]
    $('.randomShoe h2').text(`these are fire`)
    $('.randomShoe').append(`<img src="assets/${img}.png" alt ="">`);
    console.log('generate')
}

// generates a random shoe from selected favorites
app.favShoeGenerator = () => {
    let random = Math.floor(Math.random() * app.favorites.length);
    let img = app.favorites[random]
    if (app.favorites.length === 0) {
        $('.randomShoe h2').text(`you don't have any favorites`)
    } else {
        $('.randomShoe h2').text(`these are fire`)
        $('.randomShoe').append(`<img src="assets/${img}.png" alt ="">`);
    }
}

// add and remove shoe from favorites
app.addRemoveFavorite = () => {
    $('.favorite').on('click', function(){
        $(this).toggleClass('favorited');
        console.log(app.favorites)
        let shoeID = $(this).attr('id');
        let shoeIdx = 0;
        // check if shoe is already in favorites
        if (app.favorites.includes(shoeID)) {
            // if it exists return the index
            shoeIdx = app.favorites.indexOf(shoeID)
            // remove the index value from favorites
            app.favorites.splice(shoeIdx, 1)
            console.log('removed', shoeID)
        } else {
            // else add shoeID to the array
            app.favorites.push(shoeID)
            console.log('added',shoeID)
        }
    });
}

app.toggleModal = () => {
    $('.pfc').on('click', function() {
        $('.modal').toggleClass('show-modal');
        app.shoeGenerator();
    });

    $('.pff').on('click', function() {
        $('.modal').toggleClass('show-modal');
        app.favShoeGenerator();
    });
    
    $('.close-button').on('click', function() {
        $('.modal').toggleClass('show-modal');
        app.removeShoe();
    })
}

// reset modal
app.removeShoe = () => {
    $('.randomShoe h2').text('')
    $('.randomShoe img').remove()
}

app.init = function() {
    app.toggleModal();
    app.addRemoveFavorite();
}

// document ready
$(function() {
    app.init()
});