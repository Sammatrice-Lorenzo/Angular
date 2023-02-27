import { Component, OnInit } from '@angular/core';
import { Student } from 'src/models/student';
import { StudentService } from 'src/services/student/student.service';

@Component({
	selector: 'app-student-list',
	templateUrl: './student-list.component.html',
	styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

	public studentList: Student[] = [];

	constructor(public studentService: StudentService) {
		this.studentService.students$.subscribe((students) => this.studentList = students);
	}

	ngOnInit() {
	}

}
