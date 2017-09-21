import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  { 
	appTitle: string = 'WelcomeYOOO';
	appStatus: boolean = true;
	appList: any[] = [
	{
		"Id": "1",
		"Name": "tarik"
	},
	{
		"Id": "2",
		"Name": "elmander"
	}
	];
}
