import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CatComponent } from './cat/cat.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: ':cat-id',
    component: CatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
