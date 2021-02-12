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

class EmployeUniversiteProfesseur extends EmployeUniversite {
    constructor(nom, prenom, numeroEmploye, anneesExperience, salaire, coursEnseigne) {
        super(nom, prenom, numeroEmploye, anneesExperience);
        this.salaire = salaire;
        this.coursEnseigne = coursEnseigne;
    }

    //On ne peut pas avoir des methodes avec des noms égales au propriétés
    //Ce code donnera erreur
    salaire(){
        return this.salaire;
    }
    coursEnseigne(){
        return this.coursEnseigne;
    } 

    ajouterUnCours(nouveauCours){
        this.coursEnseigne[this.coursEnseigne.length] = nouveauCours;
    }
}