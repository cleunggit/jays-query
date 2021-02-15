const app = {};

// variables
app.shoeCollection = [
    "aj1.png",
    "aj2.png",
    "aj3.png",
    "aj4.png",
    "aj5.png",
    "aj6.png",
    "aj7.png",
    "aj8.png",
    "aj9.png",
    "aj10.png",
    "aj11.png",
    "aj12.png",
    "aj13.png",
    "aj14.png",
]

// functions
app.shoeGenerator = () => {
    let random = Math.floor(Math.random() * 14);
    let img = app.shoeCollection[random]
    $('.randomShoe').append(`<img src="assets/${img}" alt ="">`);
}

app.removeShoe = () => {
    $('.randomShoe img').remove()
}

app.addFavorite = () => {
    // toggle favorite button
    $('.favorite').on('click', function(){
        $(this).toggleClass('favorited');
        console.log('clicked')
        // let favorited = $(this).find('.favorited');
        // app.favorites.push('added')
    });
};

app.toggleModal = () => {
    $('.wtw').on('click', function() {
        $('.modal').toggleClass('show-modal');
        app.shoeGenerator();
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
let favorites = document.getElementsByClassName("favorited");