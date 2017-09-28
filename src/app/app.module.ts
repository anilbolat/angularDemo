import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppInventory } from './Inventory.component';
import { Appproduct } from './product.component';
import { PageNotFoundComponent } from './NotFound.component';
import { ProductFormComponent } from './product-form.component';

const appRoutes: Routes = [
{ path: 'Product', component: Appproduct },
{ path: 'Inventory', component: AppInventory },
{ path: '**', component: PageNotFoundComponent},
];

@NgModule({
	imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), FormsModule ],
	declarations: [ AppComponent,AppInventory,Appproduct,PageNotFoundComponent,ProductFormComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
