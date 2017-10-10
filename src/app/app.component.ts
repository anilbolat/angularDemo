import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl : 'app/app.component.html'
})

export class AppComponent  { 
	Status: boolean = true;
	clicked(event) {
		this.Status = !this.Status;
	}
}