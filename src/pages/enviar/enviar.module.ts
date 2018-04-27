import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnviarPage } from './enviar';

@NgModule({
  declarations: [
    EnviarPage,
  ],
  imports: [
    IonicPageModule.forChild(EnviarPage),
  ],
})
export class EnviarPageModule {}
