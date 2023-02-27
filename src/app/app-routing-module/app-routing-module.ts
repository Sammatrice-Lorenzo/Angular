import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketListComponent } from '../tickets';
import { StudentListComponent } from '../student/student-list';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'tickets', component: TicketListComponent },
	{ path: 'students', component: StudentListComponent },
]

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})

export class AppRoutingModule { }
