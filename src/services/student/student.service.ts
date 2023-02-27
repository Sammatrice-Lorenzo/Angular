import { Injectable } from '@angular/core'
import { Student } from '../../models/student'
import { STUDENTS_MOCKED } from '../../mocks/students.mock'
import { BehaviorSubject, Observable } from 'rxjs/index'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
	providedIn: 'root'
})
export class StudentService {
	/**
	 * Services Documentation:
	 * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
	 */

	// private studentList: Student[] = STUDENTS_MOCKED
	private studentList: Student[] = []
	private index: number
	private studentsUrl: string = "localhost:9428/api/students"

	/**
	 * Observable which contains the list of the tickets.
	 * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
	 */
	public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList)

	constructor(
		private http: HttpClient,
	) {}

	getStudent()
	{
		this.http.get<Student[]>(this.studentsUrl).subscribe(value => {
			this.studentList = value;
			this.students$.next(this.studentList);
		});
	}
}
