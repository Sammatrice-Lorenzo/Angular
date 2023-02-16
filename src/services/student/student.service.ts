import { Injectable } from '@angular/core';
import { Student } from '../../models/student';
import { STUDENTS_MOCKED } from '../../mocks/students.mock';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
	providedIn: 'root'
})
export class TicketService {
	/**
	 * Services Documentation:
	 * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
	 */

	private studentList: Student[] = STUDENTS_MOCKED;
	private index: number;

	/**
	 * Observable which contains the list of the tickets.
	 * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
	 */
	public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);

	constructor() {
	}

	addTicket(ticket: Student) {
		this.studentList.unshift(ticket); // Permet passer l'element en premier de la list
		this.students$.next(this.studentList);
	}

	deleteTicket(ticket: Student) {
		this.index = this.studentList.indexOf(ticket, 1);

		this.studentList.splice(this.index, 1);
		this.students$.next(this.studentList);
	}
	
}
