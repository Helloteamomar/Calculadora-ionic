import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BienvenidaPage } from '../bienvenida/bienvenida';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  userRegister : any;
  user = { med_nombre: '', med_apellidos: '', med_email: '', med_pass: '', med_cedula: '',med_conf_pass:''};
mensaje='error';
rForm: FormGroup;
  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams, public restProvider: RestProvider, private storage: Storage, public alerCtrl: AlertController) {
      this.user = navParams.get("userdata");
      this.rForm = this.fb.group({
        correo: ['', [Validators.required, Validators.email]],
        nombre: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        apellidos: ['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        password: ['', [Validators.required]],
        cedula: ['', [Validators.required,Validators.maxLength(8),Validators.minLength(7)]],
        confirmPassword: ['', Validators.required],
    }, {validator: this.matchingPasswords('password', 'confirmPassword')});

  }
  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
      return (group: FormGroup): {[key: string]: any} => {
        let password = group.controls[passwordKey];
        let confirmPassword = group.controls[confirmPasswordKey];

        if (password.value !== confirmPassword.value) {
          return {
            mismatchedPasswords: true
          };
        }
      }
    }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  doAlert2() {
   let alert = this.alerCtrl.create({
     title: '¡Atención!',
     message: 'Usuario registrado exitosamente',
     buttons: ['Ok']
   });

   alert.present();
      // this.navCtrl.setRoot(BienvenidaPage);
 }

  doAlert() {
   let alert = this.alerCtrl.create({
     title: '¡Atención!',
     message: this.mensaje,
     buttons: ['Ok']
   });

   alert.present();

 }

saveUser() {
  this.restProvider.addUser(this.user).then((result) => {
    this.userRegister = result;
    console.log(result);
    if(this.userRegister.msg=="Se ha registrado con &eacute;xito.")
      {

           console.log('aceptado');
          //localStorage.setItem('datauser',this.userdata);
          this.doAlert2();
          this.navCtrl.setRoot(BienvenidaPage);

      }

      else{
          if(this.userRegister.msg=="Favor de proporcionar el nombre del m&eacute;dico.")
          this.mensaje = 'Proporcionar nombre del médico';
          if(this.userRegister.msg=="Favor de proporcionar los apellidos.")
          this.mensaje = 'Favor de proporcionar los apellidos.';
          if(this.userRegister.msg=="Favor de proporcionar el email.")
          this.mensaje = 'Favor de proporcionar el email valido.';
          if(this.userRegister.msg=="El correo que esta usando ya se encuentra registrado.")
          this.mensaje = 'El correo ya se encuentra registrado.';
          if(this.userRegister.msg=="Favor de proporcionar su contrase&ntilde;a.")
          this.mensaje = 'Favor de proporcionar su contraseña.';
          if(this.userRegister.msg=="Favor de proporcionar una c&eacute;dula profecional v&aacute;lida.")
          this.mensaje = 'Cédula profesional no valida.';
          if(this.userRegister.msg=="La c&eacute;dula que ha proporcionado ya esta registrada.")
          this.mensaje = 'Cédula profesional existente.';
        this.doAlert();
        this.navCtrl.push(RegistroPage,{ userdata: this.user});
     //     this.navCtrl.push(PerfilPage);
 }
  }, (err) => {
    console.log(err);
  });
}

pBienvenida(){
  this.navCtrl.push(BienvenidaPage);
}

}
