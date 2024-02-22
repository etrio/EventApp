export interface Product {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content?: string;
    image?: string;
    price: number;
    owner: User;
}

export interface User {
    id: number;
    email: string;
    image?: string;
    name?: string;
}