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

    ajouterUnCours(nouveauCours){
        this.coursEnseigne[this.coursEnseigne.length] = nouveauCours;
    }
}

employe = new EmployeUniversite('Pierre', 'Martel', 'E0004', 5);
employe.augmenterAncienneté();
console.log(employe.nomComplet());
console.log(employe.anneesExperience);

prof = new EmployeUniversiteProfesseur('Carmel', 'Simon', 'P0007', 4, 65000, []);
prof.augmenterAncienneté();
console.log(prof.nomComplet());
console.log(prof.anneesExperience);
console.log(prof.salaire);
console.log(prof.coursEnseigne);
prof.ajouterUnCours('2RP');
console.log(prof.coursEnseigne);