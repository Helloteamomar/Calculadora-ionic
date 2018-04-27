import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';
import { BienvenidaPage } from '../bienvenida/bienvenida';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
* Generated class for the RecuperacionPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
 selector: 'page-recuperacion',
 templateUrl: 'recuperacion.html',
})
export class RecuperacionPage {

user = {  med_email: ''};
reForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public alerCtrl: AlertController,public fb: FormBuilder) {
      this.reForm = this.fb.group({
        correo: ['', [Validators.required, Validators.email]]});

  }

   ionViewDidLoad() {
     console.log('ionViewDidLoad RecuperacionPage');
   }



  recuperar() {
   this.restProvider.recuperarPass(this.user).then((result) => {
   console.log(result);
    }, (err) => {
   console.log(err);
    });
    let alert = this.alerCtrl.create({
      title: '¡Atención!',
      message: 'Se ha enviado tu contraseña nueva al correo registrado',
      buttons: ['Ok']
    });
    alert.present()
        this.navCtrl.setRoot(BienvenidaPage);
  }


}
