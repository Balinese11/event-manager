export interface Event {
    id: number;
    name: string;
    location: string;
    date: Date;
    participants: Participant[];
    theme: string;
}

export interface Participant {
    id: number;
    name: string;
    email: string;
}
