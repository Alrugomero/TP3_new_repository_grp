'use strict';

// /* DÉBUT variables globales */
// 

// Variables globale qui contient les données du quiz
// Il s'agit d'un tableau d'objets, chaque objet contient une question, un tableau de reponses et l'indice de la bonne choix
// Vous remplacer son contenu par votre propre quiz, vos questions et reponses, etc.
// Vous pouvez même modifier entièrement la structure de cette variable si vous le désirez
let donnees = [
    {
        question: "Quelle est la capitale de l'Autralie?",
        reponses: [
            "Canberra",
            "Sydeney",
            "Melbourne"
        ],
        choix: 0
    },
    {
        question: "Quelle est la capitale du Canada?",
        reponses: [
            "Toronto",
            "Montréal",
            "Ottawa"
        ],
        choix: 2
    },
    {
        question: "Quelle est la capitale de la côte d'ivoire?",
        reponses: [
            "Bouaké",
            "Abidjan",
            "Yamoussoukro"
        ],
        choix: 1
    },
    {
        question: "Quelle est la capitale de la France?",
        reponses: [
            "Paris",
            "Marseille",
            "Lyon"
        ],
        choix: 0
    },
    {
        question: "Quelle est la capitale du Japon?",
        reponses: [
            "Osaka",
            "Tokyo",
            "Kyoto"
        ],
        choix: 1
    },
    {
        question: "Quelle est la capitale du Mexique?",
        reponses: [
            "Guadalajara",
            "Monterrey",
            "Mexico"
        ],
        choix: 2
    },
    {
        question: "Quelle est la capitale de l'allemagne?",
        reponses: [
            "Munich",
            "Hambourg",
            "Berlin"
        ],
        choix: 2
    }

];

let iQuestion = 0;
let score = 0;

let index = 0;

//* FIN variables globales */	
// // ##########################


function init_quiz() {

    // On doit  vider le <main> et on affiche le quiz, à partir de votre source de données "donnees", qui est une variable globale¸

    const main = document.getElementById("main");
    main.innerHTML = "";

    afficherQuiz(iQuestion);


    // Vous remplacer son contenu par le contenu de votre quiz, vos questions et reponses, etc.
    console.log("init_quiz() : initialisation du quiz");
    console.log("donnees : ", donnees);



}

function afficherQuiz(iQuestion) {

    const place = document.getElementById("main");


    let div = document.createElement("div");

    let QuestionNbr = document.createElement("h2");

    let h3 = document.createElement("h3");

    let paragraphe = document.createElement("P");

    let ol = document.createElement("ol");

    let reponseText = document.createElement("input");

    reponseText.type = 'text';

    let suivant = document.createElement("button");
    suivant.style.height = "60px";
    suivant.style.width="120px";

    suivant.addEventListener('click',boutton);

    

    boutton();


    function boutton ()
    {
        if (index < donnees.length) {
            const respo = donnees[index].reponses;
    
            console.log(respo);
    
            const quest = donnees[index].question;
    
            for (let i = 0; i < respo.length; i++) {
    
    
                QuestionNbr.textContent = "Question " + (index + 1) + "/" + donnees.length;
    
                h3.textContent = quest;
    
    
                paragraphe.textContent = "Veuillez saisir la bonne réponse";
    
    
                let lesreponses = respo[i];
    
                let li = document.createElement("li");
    
                li.textContent = lesreponses;
    
                ol.appendChild(li);
    
                div.appendChild(QuestionNbr);
                div.appendChild(h3);
                div.appendChild(paragraphe);
                div.appendChild(ol);
                div.appendChild(reponseText);
                div.appendChild(suivant);
                place.appendChild(div);
    
    
    
            }
    
            deux();
        }

    }

    function deux()
    {
        index++;
        console.log(index)
    }

    //     let lesReponses = donnees[0].reponses;

    //     let li = document.createElement("li");

    //     li.textContent = lesReponses;

    //     console.log(lesReponses);

    //     ol.appendChild(li);
    //     div.appendChild(QuestionNbr);
    //     div.appendChild(h3);
    //     div.appendChild(paragraphe);
    //     div.appendChild(ol);
    //     div.appendChild(reponseText);
    //     div.appendChild(suivant);

    //     place.appendChild(div);
}

// let index = 0;

// function afficherReponses() {
//     const container = document.getElementById("main");
//     container.innerHTML = "";

//     if (index < donnees.length) {
//         const reponses = donnees[index].reponses;
//         for (let i = 0; i < reponses.length; i++) {
//             const div = document.createElement("li");
//             div.textContent = reponses[i];
//             container.appendChild(div);
//         }
//         index++;
//     } else {
//         container.textContent = "Fin du questionnaire.";
//     }
// }




function traiterReponse() {

}

function afficherResultat() {

}


// Ce fichier est inclu dans le fichier index.html et n'a pas besoin d'un addEventListener('load') car
// son point d'entrée init_quiz() sera appelé dans le fichier formulaire.js via la fonction afficherChoixJeu()