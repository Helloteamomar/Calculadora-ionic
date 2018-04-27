import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalculadoraPage } from '../calculadora/calculadora';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
/**
 * Generated class for the EnviarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-enviar',
    templateUrl: 'enviar.html',
})
export class EnviarPage {
    /*   public  edad;
        public  colesterol;
        public  phdcolesterol;
        public  presion;
        public  diabetes;
        public  tabaquismo;
        public  riesgo;*/
    dataenviar = {
        edad: '',
        colesterol: '',
        phdcolesterol: '',
        presion: '',
        diabetes: '',
        tabaquismo: '',
        riesgo: '',
        correo: '',
        tRiesgo: '',
        recomendacion: '',
        gRiesgo: ''

    };
    correo = '';
Form: FormGroup;
    constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider,public alerCtrl: AlertController,public fb:FormBuilder) {

        this.Form = this.fb.group({
          correo: ['', [Validators.required, Validators.email]],
          nombre: ['', [Validators.required]]
        });
        this.dataenviar.edad = navParams.get("edad");
        this.dataenviar.colesterol = navParams.get("colesterol");
        this.dataenviar.phdcolesterol = navParams.get("phdcolesterol");
        this.dataenviar.presion = navParams.get("presion");
        this.dataenviar.diabetes = navParams.get("diabetes");
        this.dataenviar.tabaquismo = navParams.get("tabaquismo");
        this.dataenviar.riesgo = navParams.get("riesgo");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EnviarPage');
    }
    pCalculadora() {

        this.navCtrl.setRoot(CalculadoraPage);
    }

    pEnviar() {

       this.dataenviar.gRiesgo = this.dataenviar.riesgo.replace("assets/imgs/","");
       this.dataenviar.gRiesgo = this.dataenviar.gRiesgo.replace(".png","");
        this.dataenviar.correo = this.correo;
        if(this.dataenviar.gRiesgo.indexOf("v") == 0)
        {
          this.dataenviar.tRiesgo = 'Riesgo bajo';
          this.dataenviar.recomendacion = '1';
        }
          if(this.dataenviar.gRiesgo.indexOf("a") == 0)
        {
          this.dataenviar.tRiesgo = 'Riesgo medio';
          this.dataenviar.recomendacion = '2';
        }
          if(this.dataenviar.gRiesgo.indexOf("r") == 0)
        {
          this.dataenviar.tRiesgo = 'Riesgo alto';
          this.dataenviar.recomendacion = '3';

        }

        console.log(this.dataenviar);
        this.restProvider.correo(this.dataenviar).then((result) => {
            console.log(result);
            this.doAlert();
            this.navCtrl.setRoot(CalculadoraPage);
        }, (err) => {
            console.log(err);
        });
    }
    doAlert() {
     let alert = this.alerCtrl.create({
       title: '¡Atención!',
       message:'Datos enviados' ,
       buttons: ['Ok']
     });

     alert.present()
         this.navCtrl.setRoot(CalculadoraPage);
   }

}
