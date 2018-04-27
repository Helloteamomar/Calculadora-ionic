import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
* Generated class for the PerfilPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
 selector: 'page-perfil',
 templateUrl: 'perfil.html',
})
export class PerfilPage {
userdata : any;
idmedico = 0;
nombre = '';
correo = '';
cedula = '';
 constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
 //this.idMedico = navParams.get('idMedico');
 //console.log(this.idMedico);
 //this.userdata = localStorage.getItem('datauser');
 //this.userdata = navParams.get("userdat");
  storage.get('userdat').then((val) => {
  this.idmedico = val.idMedico;
  this.nombre = val.med_nombre +' '+ val.med_apellidos;
  this.correo = val.med_email;
  this.cedula = val.med_cedula;

//console.log(val.idMedico);


});
//this.userdata = this.userdata;

 console.log(this.userdata);
 }

 ionViewDidLoad() {
   //console.log('ionViewDidLoad PerfilPage');
 }

}
