class Pet{
    constructor(petName, ownerName, species, breed){ // creo la classe pet con i valori del costrutto
        this.petName=petName
        this.ownerName=ownerName
        this.species=species
        this.breed=breed
    }
    sameOwner(otherPet){ //sameOwner è il metodo per testare se due animali hanno lo stesso padrone
        return this.ownerName===otherPet.ownerName
    }
}
const pets[] //qui verranno memorizzati tutti gli animali dal form
//quindi ora creiamo la funzione che legge i dati del form e li raccoglie nell'array
function addPet(){
    const petName = document.getElementById("petName").value // raccolgo tutti i valori
    const ownerName = document.getElementById("ownerName").value
    const species = document.getElementById("species").value
    const breed = document.getElementById("breed").value


    const newPet = new Pet(petName, ownerName, species, breed) //crea un nuovo oggetto che riporti i valori della classe
    pets.push (newPet) // quando verrà completato il form, questo push inserirà nel nuovo array i valori
    displayPets() // serve per mostrare i dati nella lista creata in html
}
//riprendo il displayPets per creare la funzione che li registra nella lista
function displayPets(){
    const petList= document.getElementById(petList)
    petList.innerHTML=''
    for (let i=0;i<pets.lenght;i++){
        const pet =pets[i];
        const petItem=document.createElement('li')
        petItem.innerHTML = `
      <strong>${pet.petName}</strong> (${pet.species} - ${pet.breed})<br>
      Padrone: ${pet.ownerName};`
      petList.appendChild(petItem);
    }
}
