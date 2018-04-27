import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnviarPage } from '../enviar/enviar';
import { CalculadoraPage } from '../calculadora/calculadora';
/**
 * Generated class for the CalcularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-calcular',
    templateUrl: 'calcular.html',
})
export class CalcularPage {
    public edad;
    public colesterol;
    public phdcolesterol;
    public presion;
    public diabetes;
    public tabaquismo;
    public riesgo;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // this.edad = navParams.get("edad");
        switch (navParams.get("edad")) {

            case '-1':
                this.edad = '30-34';
                break;
            case '0':
                this.edad = '35-39';
                break;
            case '1':
                this.edad = '40-44';
                break;
            case '2':
                this.edad = '45-49';
                break;
            case '3':
                this.edad = '50-54';
                break;
            case '4':
                this.edad = '55-59';
                break;
            case '5':
                this.edad = '60-64';
                break;
            case '6':
                this.edad = '65-69';
                break;
            case '7':
                this.edad = '70-74';
                break;
        }
        switch (navParams.get("colesterol")) {

            case '-3':
                this.colesterol = '<160';
                break;
            case '0':
                this.colesterol = '160-199';
                break;
            case '1':
                this.colesterol = '200-239';
                break;
            case '2':
                this.colesterol = '240-279';
                break;
            case '3':
                this.colesterol = '>280';
                break;

        }
        switch (navParams.get("phdcolesterol")) {

            case '2':
                this.phdcolesterol = '<35';
                break;
            case '1':
                this.phdcolesterol = '35-44';
                break;
            case '0':
                this.phdcolesterol = '45-59';
                break;
            case '-2':
                this.phdcolesterol = '>60';
                break;

        }
        switch (navParams.get("presion")) {

            case '0':
                this.presion = '120-129';
                break;
            case '1':
                this.presion = '130-139';
                break;
            case '2':
                this.presion = '140-159';
                break;
            case '3':
                this.presion = '>160';
                break;


        }
        if (navParams.get("diabetes"))
            this.diabetes = 'Si';
        else
            this.diabetes = 'No';

        if (navParams.get("tabaquismo"))
            this.tabaquismo = 'Si';
        else
            this.tabaquismo = 'No';
        //this.colesterol = navParams.get("colesterol");
        //this.phdcolesterol = navParams.get("phdcolesterol");
        //this.presion = navParams.get("presion");
        //this.diabetes = navParams.get("diabetes");
        //this.tabaquismo = navParams.get("tabaquismo");
        this.riesgo = navParams.get("riesgo");

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CalcularPage');
    }

    pCalculadora() {
        this.navCtrl.setRoot(CalculadoraPage);
    }

    pEnviar() {
        this.navCtrl.push(EnviarPage, {
            edad: this.edad,
            colesterol: this.colesterol,
            phdcolesterol: this.phdcolesterol,
            presion: this.presion,
            diabetes: this.diabetes,
            tabaquismo: this.tabaquismo,
            riesgo: this.riesgo
        });


    }


}
