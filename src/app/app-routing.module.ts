import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'form', loadChildren: 'app/form/form.module#FormModule' },
    { path: 'summary', loadChildren: 'app/summary/summary.module#SummaryModule' },
    { path: 'step-by-step', loadChildren: 'app/step-by-step/step-by-step.module#StepByStepModule' },
    { path: '**', loadChildren: 'app/page-not-found/page-not-found.module#PageNotFoundModule' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
