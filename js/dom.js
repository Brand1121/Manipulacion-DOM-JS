/**
 * Obetener elementos 
 * ID
 * Clase -> obtenemos varios elementos que coincidan
 * querySelector solo regresa ell primer nodo que coincide (ID, Clase)
 * querySelectorAll obtiene una lista de nodos
 */
const title = document.getElementById('Title1');

const subtitle = document.getElementsByClassName('Subtitulo');

const secondTitle = document.querySelector('.subtitulo');
const subtitles = document.querySelectorAll('.subtitulo');

console.log(title, subtitle, secondTitle, subtitles);

secondTitle.value = "DOM API";


//Creacion del perfil de usuario
const user = {
    name: 'Jane Doe',
    age: 25,
    email: 'jane@mail.com',
    favFilms: ['Spencer', 'Ice Age 3', 'Se7en', 'Inception', 'SAW'],
}

function createUser(user) {
    document.getElementById('username').textContent = user.name;
    document.getElementById('age').textContent = user.age;
    document.getElementById('mail').textContent = user.email;

    const ul = document.getElementById('fav-films');

    user.favFilms.forEach(film => {
        const li = document.createElement('li');
        li.textContent = film;
        ul.appendChild(li);
    })
}

createUser(user);

//events

const inputName = document.getElementById('name');
const userName = document.getElementById('username');

// inputName.addEventListener('input', e => {
//    console.log(e.target.value);
//    userName.textContent = e.target.value;
// })

const users = [
    {
        id: 1,
        user_name: 'Zabdiel Diaz',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music: {
            bands: [
                'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Fernando Aguilar',
        description: 'Me gusta el calor',
        age: '22',
        fav_music: {
            bands: [
                'Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte'
            ]
        }
    }
]

const CARD_SECTION = document.getElementById('profiles');

/**
 * Obtener la info
 * crear un contenedor para perfil clase = profile
 * crear elemento para user_name
 * crear elemento para description
 * Crear elemento para age
 * Crear elemento de lista de bandas -> iterar por cada banda
 */

function createCard(){
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    return card;
}

function createDescription (){
    const userElements = {
        user_name: document.createElement('h2'),
        age: document.createElement('h3'),
        description: document.createElement("p"), 
        bands: [],
    };
    return userElements;
}

const populateElements = (user, userElements) =>{
    userElements.user_name.textContent = user.user_name;
    userElements.age.textContent = user.age;
    userElements.description.textContent = user.description;

    const bandList = user.fav_music.bands.map (e => {
        const pElements = document.createElement('p');
        pElements.textContent = e;
        return pElements;
    })

    userElements.bands = bandList;
    return userElements;
}


const renderedElements = (card, elements) =>{
    card.append(elements.user_name, elements.age, elements.description);
    elements.bands.forEach(bandas => {  // se hace la funcion de la iteracion de
        card.append(bandas); // los elementos de bands para agregarlos en la car.
    })
}

users.forEach(user => {
    const card = createCard();
    const userElements = createDescription();
    const elementsWithData = populateElements(user, userElements);
    renderedElements(card, elementsWithData);
    CARD_SECTION.append(card);
})


/** Ejercicio
 * 1.- Agregar las bandas
 * Push
 * 
 * Evitar las bandas para el ejercicios 2
 * 2.- Obtener la info del usuario desde inputs y mostrar en tarjeta.
 * AL menos deben tener 2 commits
*/
