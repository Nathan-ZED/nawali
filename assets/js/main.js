const radioTerrain = document.querySelector('#terrain');
const radioConstruction = document.querySelector('#construction');
const typeDeMaison = document.querySelector('#house_type').parentElement;
const budgetTerrain = document.querySelector('.input-block.terrain');
const budgetConstruction = document.querySelector('.input-block.construction');
const copyrights = document.querySelector('#copyrights');
const actualYear = new Date().getFullYear();


//Mise à jour automatique de l'année des copyrights du footer
copyrights.textContent = `Copyrights ©${actualYear}`


//Fonction permettant d'afficher le bon budget pour terrain
//et masquer le type de maison

const changeForTerrain = () => {
    if(radioTerrain.checked) {
        !typeDeMaison.classList.contains('d-none')
        ? typeDeMaison.classList.add('d-none')
        : null

        if(budgetTerrain.classList.contains('d-none')) {
            budgetTerrain.classList.remove('d-none')
            budgetConstruction.classList.add('d-none')
        }
    }
}

//Fonction permettant d'afficher le bon budget pour construction
//et afficher le type de maison

const changeForConstruction = () => {
    if(radioConstruction.checked) {
        typeDeMaison.classList.contains('d-none')
        ? typeDeMaison.classList.remove('d-none')
        : null

        if(budgetConstruction.classList.contains('d-none')) {
            budgetTerrain.classList.add('d-none')
            budgetConstruction.classList.remove('d-none')
        }
    }
}

//Ecoute le radio bouton "terrain"
radioTerrain.addEventListener('change', () => changeForTerrain())


//Ecoute le radio bouton "construction"
radioConstruction.addEventListener('change', () => changeForConstruction())