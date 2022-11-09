// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

// Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const arrEmployers = [
    {
        name: 'Wayne Barnett',
        roule: 'Founder & CEO',
        image: '..img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        roule: 'Chief Editor',
        image: '..img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        roule: 'Office Manager',
        image: '..img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        roule: 'Social Media Manager',
        image: '..img/anela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        roule: 'Developer',
        image: '..img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        roule: 'Graphic Designer',
        image: '..img/barbara-ramos-graphic-designer.jpg'
    },
];

// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
console.log('Dipendenti del team')
for(let key in arrEmployers){
    console.log(`${arrEmployers[key].name}: ${arrEmployers[key].roule}`);

}