let library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The HungerGames', libraryID: 3245}
];

function findDetails(id){
    let count = 0;
    library.forEach((n) => {
        if(n.libraryID === id){
            console.log(n)
            count++;
        }
    });
    if(count === 0){
         console.log('Not found')   
    }
}

findDetails(4264)