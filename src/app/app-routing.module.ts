import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ListSegmentComponent } from './components/segment/table/table.component';

const routes: Routes = [

  { path: '**', component: ListSegmentComponent }, 
];
@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
