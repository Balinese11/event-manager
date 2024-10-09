import { EventService } from './services/eventService';
import { Event } from './models/event';
import { Participant } from './models/participant';

// Példányosítsd az EventService-t
const eventService = new EventService();

// Rendezvény létrehozása
const birthdayParty: Event = {
    id: 1,
    name: 'Birthday Party',
    location: 'Home',
    date: new Date('2024-10-10T18:00:00'),
    participants: [],
    theme: 'Birthday'
};

// Rendezvény hozzáadása
eventService.createEvent(birthdayParty);
console.log("Event created:", birthdayParty);

// Résztvevő létrehozása
const participant1 = new Participant(1, 'John Doe', 'john@example.com');

// Résztvevő regisztrálása a rendezvényre
eventService.registerParticipant(birthdayParty.id, participant1);
console.log("Participant registered:", participant1);

// Rendezvények listázása
const events = eventService.getEvents();
console.log("All Events:", events);

// Rendezvény szerkesztése
eventService.editEvent(birthdayParty.id, { location: 'Park' });
console.log("Updated Event:", eventService.getEvents());

// Rendezvény törlése
eventService.deleteEvent(birthdayParty.id);
console.log("Events after deletion:", eventService.getEvents());
