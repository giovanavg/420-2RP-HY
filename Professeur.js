/**
 * Projet : Demostration d'utilisation de Git dans VSCode
 * Auteur : Giovana Velarde
 * Date : 05 février 2021
 */

class Cours{
    constructor(code, nom){
        this.code = code;
        this.nom = nom;
    }
    lireInformation(){
        return this.code + " " + this.nom;
    }
}
/**
 * Cette classe représente un employé d'une Université
 */
class EmployeUniversite {
    constructor(nom, prenom, numeroEmploye, anneesExperience) {
        this.nom = nom;
        this.prenom = prenom;
        this.numeroEmploye = numeroEmploye;
        this.anneesExperience = anneesExperience;
    }

    augmenterAnciennete() {
        this.anneesExperience++;
    }

    nomComplet() {
        return this.prenom + ", " + this.nom;
    }

    lireInformation() {
        return this.numeroEmploye + " - "
            + this.nomComplet() +
            " - Ancienneté: " + this.anneesExperience;
    }
}

/**
 * Cette classe représente un professeur d'une Université
 */
class EmployeUniversiteProfesseur extends EmployeUniversite {
    constructor(nom, prenom, numeroEmploye, anneesExperience, salaire, coursEnseigne) {
        super(nom, prenom, numeroEmploye, anneesExperience);
        this.salaire = salaire;
        this.coursEnseigne = coursEnseigne;
    }

    lireInformation(){
        return super.lireInformation() + " " + this.salaire + 
        " Cours enseigne: {" + this.lireCoursEnseigne() + "}";
    }

    lireCoursEnseigne(){
        var s = "";
        for(let i=0; i<this.coursEnseigne.length; i++){
            s += this.coursEnseigne[i].lireInformation() + ", "
        }
        return s;
    }

    ajouterUnCours(nouveauCours) {
        this.coursEnseigne[this.coursEnseigne.length] = nouveauCours;
    }
}

//Code pour tester la classe d'un employé universitaire
var employe = new EmployeUniversite('Pierre', 'Martel', 'E0004', 5);
employe.augmenterAnciennete();
console.log(employe.nomComplet());
console.log(employe.anneesExperience);

var cours1 = new Cours("2RP", "Prog. Client-Serveur");
var cours2 = new Cours("2DP", "Prog. Orientée Objet");

//Code pour tester la classe d'un professeur universitaire
var prof = new EmployeUniversiteProfesseur('Carmel', 'Simon', 'P0007', 4, 65000, [cours1]);
prof.augmenterAnciennete();
console.log(prof.nomComplet());
console.log(prof.anneesExperience);
console.log(prof.salaire);
console.log(prof.coursEnseigne);
console.log(prof.lireInformation());

prof.ajouterUnCours(cours2);
console.log(prof.coursEnseigne);

console.log(prof.lireInformation());