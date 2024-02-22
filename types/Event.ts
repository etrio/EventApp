export interface Event {
    id: number;
    author: string;
    authorFirstName: string;
    authorLastName: string;
    authorImageUrl: string;
    title: string;
    content: string;
    image?: string;
    createdAt: string;
}