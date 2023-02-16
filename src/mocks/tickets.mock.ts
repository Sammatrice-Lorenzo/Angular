import { major, Ticket } from '../models/ticket'
import { Student } from '../models/student'
import { STUDENTS_MOCKED } from './students.mock';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
	{
		title: 'SI4 in Milano',
		description: '',
		date: dateToday,
		student: STUDENTS_MOCKED.values[0],
		major: major.SI,
		archived: true
	},
	{
		title: 'GE5 in Paris',
		description: 'Description du voyage',
		date: dateToday,
		student: STUDENTS_MOCKED.values[1],
		major: major.GE,
		archived: false
	},
	{
		title: 'GB6 in Rome',
		description: 'Colosseo pizza chicco',
		date: dateToday,
		student: STUDENTS_MOCKED.values[2],
		major: major.GB,
		archived: false
	},
];
