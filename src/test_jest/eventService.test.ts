import { EventService } from '../services/eventService';
import { Event } from '../models/event'; 
import { Participant } from '../models/participant';

describe('EventService', () => {
    let eventService: EventService;

    beforeEach(() => {
        eventService = new EventService();
    });

    test('should create a new event', () => {
        const event: Event = {
            id: 1,
            name: 'Concert',
            location: 'Arena',
            date: new Date('2024-11-01T20:00:00'),
            participants: [],
            theme: 'Music'
        };
        eventService.createEvent(event);
        expect(eventService.getEvents()).toContainEqual(event);
    });

    test('should register a participant to an event', async () => {
        const event: Event = {
            id: 1,
            name: 'Concert',
            location: 'Arena',
            date: new Date('2024-11-01T20:00:00'),
            participants: [],
            theme: 'Music'
        };
        await eventService.createEvent(event);
        const participant = new Participant(1, 'Alice', 'alice@example.com');
        await eventService.registerParticipant(event.id, participant);
        expect((await eventService.getEvents())[0].participants).toContainEqual(participant);
    });

    test('should delete an event', () => {
        const event: Event = {
            id: 1,
            name: 'Concert',
            location: 'Arena',
            date: new Date('2024-11-01T20:00:00'),
            participants: [],
            theme: 'Music'
        };
        eventService.createEvent(event);
        eventService.deleteEvent(event.id);
        expect(eventService.getEvents()).not.toContainEqual(event);
    });
});
