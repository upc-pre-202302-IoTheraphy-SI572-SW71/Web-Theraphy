import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhysiotherapistListComponent} from "./therapy-coordination/pages/physiotherapist-list/physiotherapist-list.component";
import {BookConsultationComponent} from "./appointments/pages/book-consultation/book-consultation.component";
import {AddReviewComponent} from "./social/pages/add-review/add-review.component";

const routes: Routes = [
  {path: 'physiotherapist-list', component: PhysiotherapistListComponent},
  {path: 'book-consultation', component: BookConsultationComponent},
  {path: 'add-review', component: AddReviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
