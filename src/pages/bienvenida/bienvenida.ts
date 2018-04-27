import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { RegistroPage } from '../registro/registro';
import { RecuperacionPage } from '../recuperacion/recuperacion';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { CalculadoraPage } from '../calculadora/calculadora';
import { MenuController } from 'ionic-angular';
//&import { Storage, LocalStorage } from 'ionic-angular';
@IonicPage()
@Component({
 selector: 'page-bienvenida',
 templateUrl: 'bienvenida.html',
})
export class BienvenidaPage {

myForm: FormGroup;
user = {  ucorreo: '',pass: ''};

userdata : any;
 userdat = { med_nombre: '', med_apellidos: '', med_email: '', med_pass: '', med_cedula: '',med_conf_pass:''};

 constructor(public navCtrl: NavController, public menuCtrl: MenuController, public navParams: NavParams, public fb: FormBuilder,  public restProvider: RestProvider, private storage: Storage, public alerCtrl: AlertController) {

   this.menuCtrl.enable(false, 'myMenu');
   this.myForm = this.fb.group({
     correo: ['', [Validators.required, Validators.email]],
     contraseña: ['', [Validators.required]],
   });

   this.storage.remove(this.userdata);

   //storage.set('userdat', this.userdata);
 }

 ionViewDidLoad() {
   console.log('ionViewDidLoad BienvenidaPage');
 }

 doAlert() {
  let alert = this.alerCtrl.create({
    title: '¡Atención!',
    message: 'El usuario/contraseña ingresados es erroneo',
    buttons: ['Ok']
  });

  alert.present()
      this.navCtrl.setRoot(BienvenidaPage);
}

 pPerfil(){
     this.restProvider.log(this.user).then((result) => {
       //this.navCtrl.setRoot(PerfilPage);
        //console.log(result.data.idMedico);
        this.userdata = result;
        console.log(this.userdata);
      if(this.userdata.msg=='Usuario encontrado.')
        {
            this.storage.set('userdat', this.userdata);
             console.log('aceptado');
            //localStorage.setItem('datauser',this.userdata);
            this.navCtrl.setRoot(CalculadoraPage);
             this.menuCtrl.enable(true, 'myMenu');

        }

        else{
          this.doAlert();
          this.navCtrl.setRoot(BienvenidaPage);

       //     this.navCtrl.push(PerfilPage);
   }

        // this.users =result['result'];
        // this.users.msg;
     }, (err) => {
       console.log(err);
   });

 }

 pRegistro(){
   this.navCtrl.push(RegistroPage,{ userdata: this.userdat});
 }

 pRecuperacion(){
 this.navCtrl.push(RecuperacionPage);
 }

}
