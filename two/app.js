//JSON vs Array in JS
var personJSON = { "name": "John", "age": 30, "car": null };
var personsJSON = [
    { "name": "John", "age": 30, "car": null },
    { "name": "Smith", "age": 20, "car": "Nisan" } 
];


//Kreiranje klase 
function Person (firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
}

//Instanciranje klase
var osoba = new Person('John', 'Smith', 'Male');

//Nasledjivanje klase
function Worker (firstName, lastName, gender, company) {
    Person.call(this, firstName, lastName, gender);

    this.company = company;
}

//Dodavanje staticke varijable i metode u klasu Person
Person.job = 'jobless';

Person.work = function(){
    console.log('Work Work!');
}
//Kreiranje nove osobe da bi se test varijabla i funkcija
var osoba2 = new Person('Mark', 'Logic', 'Male');

Person.work();
console.log(Person.job);

//Promise

var coffeeState = 'Hot';

var isProgrammerEfficient = new Promise(
    function(resolve, reject) {
        if(coffeeState == 'Hot') {
            var programmer = {
                state: 'Happy',
                efficiency: '150%'
            };
            resolve(programmer);
        } else {
            var reason = new Error('Coffee is cold.');
            reject(reason);
        }
    }
)

var tryCoffee = function () {
    isProgrammerEfficient
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error.message);
        })
}

tryCoffee();

function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
}
function alertFinished() {
    alert('Finished my homework');
}

doHomework('math', alertFinished);