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
app.shoeGenerator = () => {
    let random = Math.floor(Math.random() * 14);
    let img = app.shoeCollection[random]
    $('.randomShoe h2').text(`these are fire`)
    $('.randomShoe').append(`<img src="assets/${img}.png" alt ="">`);
    console.log('generate')
}

app.favShoeGenerator = () => {
    let random = Math.floor(Math.random() * app.favorites.length);
    // let img = app.favorites[random]
    let img = app.favorites[random]
    // console.log(app.favorites)
    if (app.favorites.length === 0) {
        $('.randomShoe h2').text(`you don't have any favorites`)
    } else {
        $('.randomShoe h2').text(`these are fire`)
        $('.randomShoe').append(`<img src="assets/${img}.png" alt ="">`);
    }
}

app.removeShoe = () => {
    $('.randomShoe h2').text('')
    $('.randomShoe img').remove()
}

app.addFavorite = () => {
    // toggle favorite button
    $('.favorite').on('click', function(){
        $(this).toggleClass('favorited');
        let shoeID = $(this).attr('id');
        app.favorites.push(shoeID);
        // console.log('clicked', this)
        console.log(shoeID)
    });
};

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

$(function() {
    // document ready
    app.toggleModal(); // control modal
    app.addFavorite(); // control favorite
});
// let favorites = document.getElementsByClassName("favorited");