'use strict';


/* DÉBUT variables globales */ 
// ##########################

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const descriptionPseudo = /^[a-zA-Z]{3,25}$/;

/* FIN variables globales */ 
// ##########################

function afficherChoixJeu()
{
	// Vide le <main> et affiche le choix du jeu
	// Il faut prévoir une image, un titre et une description pour chaque jeu
	// Il faut savoir quel jeu a été choisi par l'utilisateur, et ensuite appeler soit fonction init_jeu_memoire() ou init_quiz()
	// Ces fonctions sont le point d'entrée pour le jeu choisi par l'utilisateur et se trouvent respectivement 
	// dans les fichiers js/jeu_memoire.js et js/quiz.js
	// À la fin de cette fonction, on doit vider le <main> et afficher le jeu choisi par l'utilisateur

	const main = document.querySelector('main');
	main.innerHTML ="";

	const h2 = document.createElement('h2');
    h2.textContent = "Choisissez votre jeu";
    main.appendChild(h2);


	const divChoix = document.createElement('div');
    divChoix.style.display = 'flex';
    divChoix.style.justifyContent = 'center';
    divChoix.style.gap = '40px';


	//Choix

	const divQuiz = document.createElement('div');
    const imgQuiz = document.createElement('img');
    imgQuiz.src = "Maquettes/Quiz.png"; 
    imgQuiz.alt = 'Quiz';
    imgQuiz.style.cursor = 'pointer';
    imgQuiz.style.width = '200px';
    imgQuiz.addEventListener('click', init_quiz); // Appelle ton quiz
    const labelQuiz = document.createElement('p');
    labelQuiz.textContent = "Quiz de connaissances";
    labelQuiz.style.textAlign = 'center';
    divQuiz.append(imgQuiz, labelQuiz);



	// Jeu mémoire
	const divMemoire = document.createElement('div');
	const imgMemoire = document.createElement('img');
	imgMemoire.src = "Maquettes/jeuMemoire.png"; // Assure-toi que cette image existe
	imgMemoire.alt = 'Jeu de mémoire';
	imgMemoire.style.cursor = 'pointer';
	imgMemoire.style.width = '200px';
	imgMemoire.addEventListener('click', init_jeu_memoire); // À définir dans jeu_memoire.js
	const labelMemoire = document.createElement('p');
	labelMemoire.textContent = "Jeu de mémoire";
	labelMemoire.style.textAlign = 'center';
	divMemoire.append(imgMemoire, labelMemoire);
	
	divChoix.append(divQuiz, divMemoire);
	main.appendChild(divChoix);
}

function validerPrenom()
{
	const lePrenom = document.getElementById("prenom").value.trim();

	if(lePrenom === "")
	{
		document.getElementById("prenomError").textContent = "Champ prénom est requis.";

		return false;
	}

	return true;
	
}

function validerNom()
{
	const leNom = document.getElementById("nom").value.trim();

	if(leNom==="")
	{
		document.getElementById("nomError").textContent ="Le champ nom est requis";
		return false;
	}
	return true;
}

function validerPseudo()
{
	const lePseudo = document.getElementById("pseudo").value.trim();

	if(lePseudo ===""){
		document.getElementById("pseudoError").textContent = "Le champ pseudo est requis";
		return false;
	}
	else if(!descriptionPseudo.test(lePseudo))
	{
		document.getElementById("pseudoError").textContent = "Le pseudo doit contenir uniquement des lettres, entre 3 et 25 caractères."
		return false;
	}
	else if(descriptionPseudo.test(lePseudo))
	{
		document.getElementById("pseudoError").textContent = "Parfait";
		return true;
	}
}

function validerCourriel()
{
	const leCourriel = document.getElementById("courriel").value.trim();

	if(leCourriel==="")
	{
		document.getElementById("courrielError").textContent ="Champ courriel est requis";
		return false;
	}
	else if(!emailRegex.test(leCourriel))
	{
		document.getElementById("courrielError").textContent ="Adresse email incorrecte";
		return false;
	}
	else if (emailRegex.test(leCourriel))
	{
		document.getElementById("courrielError").textContent = "Parfait"
		return true;
	}

}

function validerConfirmation()
{
	const confirmation = document.getElementById("confirmCourriel").value.trim();
	const leCourriel = document.getElementById("courriel").value.trim();

	if(confirmation ==="")
	{
		document.getElementById("confirmCourrielError").textContent="Champ courriel de confirmation est requis"
		return false;
	}
	else if(confirmation!==leCourriel)
	{
		document.getElementById("confirmCourrielError").textContent="Les adresses email ne correspondent pas"
		return false;
	}
	else if(confirmation === leCourriel)
	{
		document.getElementById("confirmCourrielError").textContent= "Bien";
		return true;
	}
}

function validerFormulaire(e)
{
	e.preventDefault();

	const prenomValide = validerPrenom();
	const nomValide = validerNom();
	const pseudoValide = validerPseudo();
	const courrielValide = validerCourriel();
	const confirmationValide = validerConfirmation();

	
	// console.log('validerFormulaire() : à la fin de cette fonction, si tout est valide, on peut appeler afficherChoixJeu()');

	if(prenomValide && nomValide && pseudoValide && courrielValide && confirmationValide)
	{
		afficherChoixJeu();
	}
	

}

function gererBtnInvite()
{
	const pseudo = "invité"
	
	// Test direct au quiz
	// init_quiz();

	// Test direct au jeu de mémoire
	// init_jeu_memoire();
}

function init_formulaire() {

	// Simple bouton pour passer le formulaire et aller au jeu de mémoire directement
	let btnInvite = document.getElementById("btnInvite");
	btnInvite.addEventListener("click", gererBtnInvite, false);

	// let btnSoumet = document.getElementById("btnSoumettre");
	// btnSoumet.addEventListener('click',validerFormulaire);

	document.getElementById("prenom").addEventListener('input',validerPrenom);
	document.getElementById("nom").addEventListener('input',validerNom);
	document.getElementById("pseudo").addEventListener('input',validerPseudo);
	document.getElementById("courriel").addEventListener('input',validerCourriel);
	document.getElementById("confirmCourriel").addEventListener('input',validerConfirmation);
	document.getElementById("btnSoumettre").addEventListener('click',validerFormulaire)

}

	
addEventListener('load', init_formulaire, false);