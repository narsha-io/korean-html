import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChapitersComponent } from './chapiters/chapiters.component';
import { ChapiterComponent } from './chapiters/chapiter/chapiter.component';
import { HomeComponent } from './home/home.component';
import { GeneratorsComponent } from './generators/generators.component';
import { NumbersComponent } from './generators/numbers/numbers.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chapiters', component: ChapitersComponent },
  { path: 'chapiters/:id', component: ChapiterComponent },
  { path: 'generators', component: GeneratorsComponent },
  { path: 'generators/numbers', component: NumbersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
