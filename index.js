"use strict";
//Day 14
//Question 40
function music(song, artist, tracks) {
    let album = { artist, song };
    if (tracks !== undefined) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(music("Lovely", "Billie Eilish"));
console.log(music("Husn", "Anuv Jain"));
console.log(music("Titanic", "James Horner"));
//Question 41
let magicians = ["Alice", "Harry", "Harmoine"];
function magic(magicians) {
    magicians.forEach(magicians => {
        console.log(`${magicians} is showing us magic.`);
    });
}
magic(magicians);
//Question 42
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]} The Great`;
    }
}
makeGreat(magicians);
magic(magicians);
