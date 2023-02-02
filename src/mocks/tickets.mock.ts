import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
	{
		title: 'SI4 in Milano',
		description: '',
		date: dateToday,
		student: 'Lorenzo',
		major: 'SI'
	},
	{
		title: 'GE5 in Paris',
		description: 'Description du voyage',
		date: dateToday,
		student: 'Anakin',
		major: 'GE'
	},
	{
		title: 'GB6 in Rome',
		description: 'Colosseo pizza chicco',
		date: dateToday,
		student: 'FabiRag',
		major: 'GB'
	},
];
