/**
 * Projet : Demostration d'utilisation de Git dans VSCode
 * Auteur : Giovana Velarde
 * Date : 05 février 2021
 */
/**
 * Cette classe représente un employé de une Université
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
}

/**
 * Cette classe représente un professeur de une Université
 */
class EmployeUniversiteProfesseur extends EmployeUniversite {
    constructor(nom, prenom, numeroEmploye, anneesExperience, salaire, coursEnseigne) {
        super(nom, prenom, numeroEmploye, anneesExperience);
        this.salaire = salaire;
        this.coursEnseigne = coursEnseigne;
    }

    ajouterUnCours(nouveauCours){
        this.coursEnseigne[this.coursEnseigne.length] = nouveauCours;
    }
}

//Code pour tester la classe d'un employé universitaire
employe = new EmployeUniversite('Pierre', 'Martel', 'E0004', 5);
employe.augmenterAnciennete();
console.log(employe.nomComplet());
console.log(employe.anneesExperience);

//Code pour tester la classe d'un professeur universitaire
prof = new EmployeUniversiteProfesseur('Carmel', 'Simon', 'P0007', 4, 65000, []);
prof.augmenterAnciennete();
console.log(prof.nomComplet());
console.log(prof.anneesExperience);
console.log(prof.salaire);
console.log(prof.coursEnseigne);

prof.ajouterUnCours('2RP');
console.log(prof.coursEnseigne);
prof.ajouterUnCours('CG2');
console.log(prof.coursEnseigne);