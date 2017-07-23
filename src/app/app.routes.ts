import { fourPageComponent } from './pages/four-page/four-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { Component } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
//home
{
path: '',
component: HomePageComponent
},

//products all
{
path: 'products',
component: ProductPageComponent
},
//products sigle
{
path: 'products/test/:id',
component: ProductPageComponent
},
//products all
{ 
path: '**',
component: fourPageComponent
}

];

export const RoutingModule = RouterModule.forRoot(routes);