import { v4 as uuidv4 } from 'uuid' // Biblioteca para geração de ID aleatório

// Tipando as opções
interface FastSearchOptions {
    id: string
    title: string
    imageUrl: string
}

export const fastSearchOptions: FastSearchOptions[] = [
    {
        id: uuidv4(),
        title: "Cabelo",
        imageUrl: "/hair-icon.svg"
    },
    {
        id: uuidv4(),
        title: "Barba",
        imageUrl: "/beard-icon.svg"
    },
    {
        id: uuidv4(),
        title: "Acabamento",
        imageUrl: "/razor-icon.svg"
    },
    {
        id: uuidv4(),
        title: "Sobrancelha",
        imageUrl: "/eyebrow-icon.svg",
    },
    {
        id: uuidv4(),
        title: "Massagem",
        imageUrl: "/massage-icon.svg",
    },
    {
        id: uuidv4(),
        title: "Hidratação",
        imageUrl: "/hydratation-icon.svg",
    },
];
