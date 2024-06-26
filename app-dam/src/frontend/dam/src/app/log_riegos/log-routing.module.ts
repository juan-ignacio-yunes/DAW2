import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogsPage } from './logs.page';

const routes: Routes = [
  {
    path: '',
    component: LogsPage
  },
  {path: ':id', // /logs/1
    component: LogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogsPageRoutingModule {}
