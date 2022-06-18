export const Recette = {
    name: "Recette",
    properties: {
        _id: "objectId",
        titre: "string",
        contenu: "string",
        tempsPreparation: "int",
        tempsCuisson: "string"
    }   
} 

export const Outil = {
    name: "Outil",
    properties: {
        _id: "objectId",
        nom: "string",
        image: "int"
    }
}

export const Categorie = {
    name: "Categorie",
    properties: {
        _id: "objectId",
        nom: "string",
        description: "string"
    }
}

export enum TypeAliment {
    FRUIT_ET_LEGUMES,
    PRODUIT_CEREALIER,
    PRODUIT_LAITIER,
    VIANDE_POISSON,
    MATIERE_GRASSE,
    PRODUIT_SUCRE,
    SEL,
    EAU,
    ALCOOL
}

export const Aliment = {
    name: "Aliment",
    properties: {
        _id: "objectId",
        nom: "string",
        image: "string",
        description: "string",
        type: "TypeAliment",
    }
}