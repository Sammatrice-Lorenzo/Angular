import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { TicketComponent, TicketFormComponent, TicketListComponent } from './tickets'
import { TicketService } from '../services/ticket/ticket.service'
import { ReactiveFormsModule } from '@angular/forms'
import { HeaderComponent } from './header/header.component'
import { HttpClientModule } from '@angular/common/http';
import { StudentListComponent } from './student/student-list/student-list.component';
import { AppRoutingModule } from './app-routing-module/app-routing-module'

@NgModule({
	declarations: [
		AppComponent,
		TicketComponent,
		TicketFormComponent,
		TicketListComponent,
		HeaderComponent,
		StudentListComponent,
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule, // Import all dependencies
		HttpClientModule,
		AppRoutingModule
	],
	providers: [TicketService], // All the services need to be provided
	bootstrap: [AppComponent]
})
export class AppModule {
}
