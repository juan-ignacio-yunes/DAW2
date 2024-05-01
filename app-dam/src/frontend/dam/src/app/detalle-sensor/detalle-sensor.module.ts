import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleSensorPageRoutingModule } from './detalle-sensor-routing.module';

import { DetalleSensorPage } from './detalle-sensor.page';
import { EstadoSueloPipe } from '../pipes/estado-suelo.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleSensorPageRoutingModule
  ],
  declarations: [DetalleSensorPage,EstadoSueloPipe],
  exports: [DetalleSensorPage]
})
export class DetalleSensorPageModule {}
