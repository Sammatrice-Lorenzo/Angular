import { Student } from "./student";

export interface Ticket {
	title?: string;
	description?: string;
	date?: Date;
	student?: Student;
	major?: major;
	archived?: boolean;
}

export enum major {
	SI = 'SI',
	GE = 'GE',
	GB = 'GB'
}
