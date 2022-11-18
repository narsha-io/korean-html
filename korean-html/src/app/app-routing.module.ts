import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChapitersComponent } from './chapiters/chapiters.component';
import { ChapiterComponent } from './chapiters/chapiter/chapiter.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chapiters', component: ChapitersComponent },
  { path: 'chapiters/:id', component: ChapiterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
