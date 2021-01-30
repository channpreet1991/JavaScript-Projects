function getAnimalData(){
    var Animal={
        Species:'Dog',
        Color:'Golden',
        Breed:'Golden Reteriver',
        Age:7,
        Sound:'Bark'
    }
    delete Animal.Breed;
    document.getElementById('Dictionary').innerHTML=Animal.Breed;
}