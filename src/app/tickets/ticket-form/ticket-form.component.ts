import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { major, Ticket } from '../../../models/ticket';
import { TicketComponent } from '../ticket/ticket.component';
import { Student } from 'src/models/student';
import { STUDENTS_MOCKED } from 'src/mocks/students.mock';

@Component({
	selector: 'app-ticket-form',
	templateUrl: './ticket-form.component.html',
	styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

	// Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
	// avoid TemplateDrivenForm (another type of form)
	/**
	 * TicketForm: Object which manages the form in our component.
	 * More information about Reactive Forms: https://angular.io/guide/reactive-forms
	 */
	public ticketForm: FormGroup;
	public majors: major[] = [major.SI, major.GE, major.GB]
	public students: Student[] = [];

	constructor(public formBuilder: FormBuilder, public ticketService: TicketService) {
		// Form creation
		this.ticketForm = this.formBuilder.group({
			title: [''],
			description: [''],
			major: [''],
			student: []
		});
		// You can also add validators to your inputs such as required, maxlength or even create your own validator!
		// More information: https://angular.io/guide/reactive-forms#simple-form-validation
		// Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
	}

	ngOnInit() {
		this.getStudents()
	}

	addTicket(): void
	{
		const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
		ticketToCreate.date = new Date();
		ticketToCreate.student = this.getStudent(parseInt(this.ticketForm.getRawValue().student))
		this.ticketService.addTicket(ticketToCreate);
	}

	getStudents(): void
	{
		for (const student of STUDENTS_MOCKED) {
			this.students.push(student)
		}
	}

	getStudent(id: number): Student
	{
		for (const student of this.students) {
			if (id === student.id) {
				return student
			}
		}
	}

}
