import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' }, // Wildcard route for a 404 page
];

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forRoot(routes), CommonModule],
})
export class CoreModule {}
