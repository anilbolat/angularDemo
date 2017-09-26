import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { AppInventory } from './Inventory.component';
import { Appproduct } from './product.component';
import { PageNotFoundComponent } from './NotFound.component';

const appRoutes: Routes = [
{ path: 'Product', component: Appproduct },
{ path: 'Inventory', component: AppInventory },
{ path: '**', component: PageNotFoundComponent},
];

@NgModule({
	imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
	declarations: [ AppComponent,AppInventory,Appproduct,PageNotFoundComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
