import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ɵangular_packages_platform_browser_platform_browser_k } from '@angular/platform-browser';
import { PokemonsComponent } from './components/pokemons/pokemons.component';


const routes: Routes = [
  {
    path:'home', component: HomeComponent
  },
  {
    path: 'pokemons', component: PokemonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
