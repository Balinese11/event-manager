import { Event } from '../models/event';
import { Participant } from '../models/participant';

export class EventService {
    private events: Event[] = [];

    async createEvent(event: Event): Promise<void> {
        this.events.push(event);
    }

    async editEvent(id: number, updatedEvent: Partial<Event>): Promise<void> {
        const eventIndex = this.events.findIndex(event => event.id === id);
        if (eventIndex !== -1) {
            this.events[eventIndex] = { ...this.events[eventIndex], ...updatedEvent };
        }
    }

    async deleteEvent(id: number): Promise<void> {
        this.events = this.events.filter(event => event.id !== id);
    }

    async registerParticipant(eventId: number, participant: Participant): Promise<void> {
        const event = this.events.find(event => event.id === eventId);
        if (event) {
            event.participants.push(participant);
        }
    }

    async getEvents(): Promise<Event[]> {
        return this.events;
    }
}
