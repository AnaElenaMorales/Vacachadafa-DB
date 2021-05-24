import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertWordComponent } from './insert-word/insert-word.component';

const routes: Routes = [{path:"insertWord",component:InsertWordComponent}, {path:"",component:InsertWordComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
