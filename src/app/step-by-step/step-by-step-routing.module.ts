import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepByStepComponent } from './step-by-step.component';

const routes: Routes = [
  {
    path: '',
    component: StepByStepComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepByStepRoutingModule { }