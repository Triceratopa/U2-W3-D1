//prima cosa da fare è creare la classe per User
class User{
    constructor(firstName,lastName, age, location){ // uso constructor per richiamare l'oggetto nuovo di una classe precedentemente creata
        this.firstName = firstName //assegno i valori dei parametri dati a constructor alle proprietà dell'oggetto usando this
    this.lastName = lastName
    this.age = age
    this.location = location
    }

//const user1=new User('Siegmayer', 'of Catarina',58,'Catarina') // new User evocherà il costructor
//console.log(user1) esce un oggetto che presenta tutti i valori associati della classe user
//const user2= new User('Solaire','of Astora', 72, 'Astora')
//const user3= new User ('Seath', 'the Scaleless', 2057, 'Duke s Archive')
//const user4= new User ('Artoria', 'Abysswalker', 22, 'Abyss')

//comparo l'età usando il metodo compareAge
compareAge(otherUser) {
    if(this.age<otherUser.age){// mio devo ricoradare che this è il primo riferimento al valore e otherUser al secondo valore 
        return `${this.firstName} è più vecchio di ${otherUser.firstName}`;

    } else if(this.age>otherUser.age){
        return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    }
    else {
        return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
    }
    
}}

const user1=new User('Siegmayer', 'of Catarina',58,'Catarina') 
const user2= new User('Solaire','of Astora', 72, 'Astora')
const user3= new User ('Seath', 'the Scaleless', 2057, 'Duke s Archive')
const user4= new User ('Artorias', 'Abysswalker', 22, 'Abyss')
const user5= new User('Izalith', 'Witch of Izalith', 2057, 'Izalith')
console.log(user1.compareAge(user2)) 
console.log(user2.compareAge(user4))
console.log(user3.compareAge(user5))
