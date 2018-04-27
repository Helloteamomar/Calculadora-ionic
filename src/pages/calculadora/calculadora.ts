import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalcularPage } from '../calcular/calcular';
import { SalirPage } from '../salir/salir';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
/**import { Storage } from '@ionic/storage';
 * Generated class for the CalculadoraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-calculadora',
    templateUrl: 'calculadora.html',
})
export class CalculadoraPage {

    // calculadora = {  vDiatebes: '', vTabaquismo: '' };
    riesgo = '';
    vDiatebes = false;
    vTabaquismo = false;
    puntos = 0;
    pEdad = '0';
    pColesterol = '0';
    pHdlColesterol = '0';
    pPresion = '0';
    cEdad: any[];
    cColesterol: any[];
    cHdlColesterol: any[];
    cPresion: any[];

    cidmedico = 0;
    cmensaje = '';
    constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, private storage: Storage) {
        // this.calculadora.vDiatebes = false;
        // this.calculadora.vTabaquismo = false;
        this.cEdad = [{
            name: 'edad',
            options: [
                {
                    text: '30-34',
                    value: -1
                },
                {
                    text: '35-39',
                    value: 0
                },
                {
                    text: '40-44',
                    value: 1
                },
                {
                    text: '45-49',
                    value: 2
                },
                {
                    text: '50-54',
                    value: 3
                },
                {
                    text: '55-59',
                    value: 4
                },
                {
                    text: '60-64',
                    value: 5
                },
                {
                    text: '65-69',
                    value: 6
                },
                {
                    text: '70-74',
                    value: 7
                }
            ]
        }];

        this.cColesterol = [{
            name: 'colesterol',
            options: [{
                    text: '<160',
                    value: -3
                },
                {
                    text: '160-199',
                    value: 0
                },
                {
                    text: '200-239',
                    value: 1
                },
                {
                    text: '240-279',
                    value: 2
                },
                {
                    text: '>280',
                    value: 3
                }
            ]
        }];
        this.cHdlColesterol = [{
            name: 'chdlcolesterol',
            options: [{
                    text: '<35',
                    value: 2
                },
                {
                    text: '35-44',
                    value: 1
                },
                {
                    text: '45-49',
                    value: -1
                },
                {
                    text: '50-59',
                    value: 0
                },
                {
                    text: '>60',
                    value: -2
                }
            ]
        }];
        this.cPresion = [{
            name: 'presion',
            options: [{
                    text: '<120',
                    value: -1
                },
                {
                    text: '120-129',
                    value: 0
                },
                {
                    text: '130-139',
                    value: 1
                },
                {
                    text: '140-159',
                    value: 2
                },
                {
                    text: '>160',
                    value: 3
                }
            ]
        }];


    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CalculadoraPage');
    }

    pCalcular() {
  if(this.pPresion=='-1')
  this.pPresion = '0';
  if(this.pHdlColesterol=='-1')
  this.pHdlColesterol = '0';
        this.puntos = parseInt(this.pEdad) + parseInt(this.pColesterol) + parseInt(this.pHdlColesterol) + parseInt(this.pPresion);
        if (this.vDiatebes)
            this.puntos += 2;
        if (this.vTabaquismo)
            this.puntos += 2;

        switch (this.pEdad) {

            case '-1':
                if (this.puntos < 1) {
                    this.riesgo = 'v_2.png';
                    break;
                }
                switch (this.puntos) {
                    case 1:
                        this.riesgo = 'a_3.png';
                        break;
                    case 2:
                        this.riesgo = 'a_4.png';
                        break;
                    case 3:
                        this.riesgo = 'a_5.png';
                        break;
                    case 4:
                        this.riesgo = 'a_7.png';
                        break;
                    case 5:
                        this.riesgo = 'r_8.png';
                        break;
                    case 6:
                        this.riesgo = 'r_10.png';
                        break;
                    case 7:
                        this.riesgo = 'r_13.png';
                        break;
                    case 8:
                        this.riesgo = 'r_16.png';
                        break;
                    case 9:
                        this.riesgo = 'r_20.png';
                        break;
                    case 10:
                        this.riesgo = 'r_25.png';
                        break;
                    case 11:
                        this.riesgo = 'r_31.png';
                        break;
                    case 12:
                        this.riesgo = 'r_37.png';
                        break;
                    case 13:
                        this.riesgo = 'r_45.png';
                        break;
                    default:
                        this.riesgo = 'r_53.png';

                }
                break;
            case '0':
                if (this.puntos < 1) {
                    this.riesgo = 'v_2.png';
                    break;
                }
                switch (this.puntos) {
                    case 1:
                        this.riesgo = 'v_3.png';
                        break;
                    case 2:
                        this.riesgo = 'v_4.png';
                        break;
                    case 3:
                        this.riesgo = 'a_5.png';
                        break;
                    case 4:
                        this.riesgo = 'a_7.png';
                        break;
                    case 5:
                        this.riesgo = 'a_8.png';
                        break;
                    case 6:
                        this.riesgo = 'a_10.png';
                        break;
                    case 7:
                        this.riesgo = 'r_13.png';
                        break;
                    case 8:
                        this.riesgo = 'r_16.png';
                        break;
                    case 9:
                        this.riesgo = 'r_20.png';
                        break;
                    case 10:
                        this.riesgo = 'r_25.png';
                        break;
                    case 11:
                        this.riesgo = 'r_31.png';
                        break;
                    case 12:
                        this.riesgo = 'r_37.png';
                        break;
                    case 13:
                        this.riesgo = 'r_45.png';
                        break;
                    default:
                        this.riesgo = 'r_53.png';

                }
                break;
            case '1':
                if (this.puntos < 1) {
                    this.riesgo = 'v_2.png';
                    break;
                }
                switch (this.puntos) {
                    case 1:
                        this.riesgo = 'v_3.png';
                        break;
                    case 2:
                        this.riesgo = 'v_4.png';
                        break;
                    case 3:
                        this.riesgo = 'v_5.png';
                        break;
                    case 4:
                        this.riesgo = 'a_7.png';
                        break;
                    case 5:
                        this.riesgo = 'a_8.png';
                        break;
                    case 6:
                        this.riesgo = 'a_10.png';
                        break;
                    case 7:
                        this.riesgo = 'r_13.png';
                        break;
                    case 8:
                        this.riesgo = 'r_16.png';
                        break;
                    case 9:
                        this.riesgo = 'r_20.png';
                        break;
                    case 10:
                        this.riesgo = 'r_25.png';
                        break;
                    case 11:
                        this.riesgo = 'r_31.png';
                        break;
                    case 12:
                        this.riesgo = 'r_37.png';
                        break;
                    case 13:
                        this.riesgo = 'r_45.png';
                        break;
                    default:
                        this.riesgo = 'r_53.png';

                }
                break;
            case '2':
                if (this.puntos < 1) {
                    this.riesgo = 'v_2.png';
                    break;
                }
                switch (this.puntos) {
                    case 1:
                        this.riesgo = 'v_3.png';
                        break;
                    case 2:
                        this.riesgo = 'v_4.png';
                        break;
                    case 3:
                        this.riesgo = 'v_5.png';
                        break;
                    case 4:
                        this.riesgo = 'v_7.png';
                        break;
                    case 5:
                        this.riesgo = 'v_8.png';
                        break;
                    case 6:
                        this.riesgo = 'a_10.png';
                        break;
                    case 7:
                        this.riesgo = 'a_13.png';
                        break;
                    case 8:
                        this.riesgo = 'r_16.png';
                        break;
                    case 9:
                        this.riesgo = 'r_20.png';
                        break;
                    case 10:
                        this.riesgo = 'r_25.png';
                        break;
                    case 11:
                        this.riesgo = 'r_31.png';
                        break;
                    case 12:
                        this.riesgo = 'r_37.png';
                        break;
                    case 13:
                        this.riesgo = 'r_45.png';
                        break;
                    default:
                        this.riesgo = 'r_53.png';

                }
                break;
            case '3':
                if (this.puntos < 1) {
                    this.riesgo = 'v_2.png';
                    break;
                }
                switch (this.puntos) {
                    case 1:
                        this.riesgo = 'v_3.png';
                        break;
                    case 2:
                        this.riesgo = 'v_4.png';
                        break;
                    case 3:
                        this.riesgo = 'v_5.png';
                        break;
                    case 4:
                        this.riesgo = 'v_7.png';
                        break;
                    case 5:
                        this.riesgo = 'v_8.png';
                        break;
                    case 6:
                        this.riesgo = 'v_10.png';
                        break;
                    case 7:
                        this.riesgo = 'a_13.png';
                        break;
                    case 8:
                        this.riesgo = 'a_16.png';
                        break;
                    case 9:
                        this.riesgo = 'r_20.png';
                        break;
                    case 10:
                        this.riesgo = 'r_25.png';
                        break;
                    case 11:
                        this.riesgo = 'r_31.png';
                        break;
                    case 12:
                        this.riesgo = 'r_37.png';
                        break;
                    case 13:
                        this.riesgo = 'r_45.png';
                        break;
                    default:
                        this.riesgo = 'r_53.png';

                }
                break;
            case '4':
                if (this.puntos < 1) {
                    this.riesgo = 'v_2.png';
                    break;
                }
                switch (this.puntos) {
                    case 1:
                        this.riesgo = 'v_3.png';
                        break;
                    case 2:
                        this.riesgo = 'v_4.png';
                        break;
                    case 3:
                        this.riesgo = 'v_5.png';
                        break;
                    case 4:
                        this.riesgo = 'v_7.png';
                        break;
                    case 5:
                        this.riesgo = 'v_8.png';
                        break;
                    case 6:
                        this.riesgo = 'v_10.png';
                        break;
                    case 7:
                        this.riesgo = 'v_13.png';
                        break;
                    case 8:
                        this.riesgo = 'a_16.png';
                        break;
                    case 9:
                        this.riesgo = 'a_20.png';
                        break;
                    case 10:
                        this.riesgo = 'r_25.png';
                        break;
                    case 11:
                        this.riesgo = 'r_31.png';
                        break;
                    case 12:
                        this.riesgo = 'r_37.png';
                        break;
                    case 13:
                        this.riesgo = 'r_45.png';
                        break;
                    default:
                        this.riesgo = 'r_53.png';

                }
                break;
            case '5':
                if (this.puntos < 1) {
                    this.riesgo = 'v_2.png';
                    break;
                }
                switch (this.puntos) {
                    case 1:
                        this.riesgo = 'v_3.png';
                        break;
                    case 2:
                        this.riesgo = 'v_4.png';
                        break;
                    case 3:
                        this.riesgo = 'v_5.png';
                        break;
                    case 4:
                        this.riesgo = 'v_7.png';
                        break;
                    case 5:
                        this.riesgo = 'v_8.png';
                        break;
                    case 6:
                        this.riesgo = 'v_10.png';
                        break;
                    case 7:
                        this.riesgo = 'v_13.png';
                        break;
                    case 8:
                        this.riesgo = 'v_16.png';
                        break;
                    case 9:
                        this.riesgo = 'a_20.png';
                        break;
                    case 10:
                        this.riesgo = 'a_25.png';
                        break;
                    case 11:
                        this.riesgo = 'r_31.png';
                        break;
                    case 12:
                        this.riesgo = 'r_37.png';
                        break;
                    case 13:
                        this.riesgo = 'r_45.png';
                        break;
                    default:
                        this.riesgo = 'r_53.png';

                }
                break;
            case '6':
                if (this.puntos < 1) {
                    this.riesgo = 'v_2.png';
                    break;
                }
                switch (this.puntos) {
                    case 1:
                        this.riesgo = 'v_3.png';
                        break;
                    case 2:
                        this.riesgo = 'v_4.png';
                        break;
                    case 3:
                        this.riesgo = 'v_5.png';
                        break;
                    case 4:
                        this.riesgo = 'v_7.png';
                        break;
                    case 5:
                        this.riesgo = 'v_8.png';
                        break;
                    case 6:
                        this.riesgo = 'v_10.png';
                        break;
                    case 7:
                        this.riesgo = 'v_13.png';
                        break;
                    case 8:
                        this.riesgo = 'v_16.png';
                        break;
                    case 9:
                        this.riesgo = 'v_20.png';
                        break;
                    case 10:
                        this.riesgo = 'a_25.png';
                        break;
                    case 11:
                        this.riesgo = 'a_31.png';
                        break;
                    case 12:
                        this.riesgo = 'r_37.png';
                        break;
                    case 13:
                        this.riesgo = 'r_45.png';
                        break;
                    default:
                        this.riesgo = 'r_53.png';

                }
                break;
            case '7':
                if (this.puntos < 1) {
                    this.riesgo = 'v_2.png';
                    break;
                }
                switch (this.puntos) {
                    case 1:
                        this.riesgo = 'v_3.png';
                        break;
                    case 2:
                        this.riesgo = 'v_4.png';
                        break;
                    case 3:
                        this.riesgo = 'v_5.png';
                        break;
                    case 4:
                        this.riesgo = 'v_7.png';
                        break;
                    case 5:
                        this.riesgo = 'v_8.png';
                        break;
                    case 6:
                        this.riesgo = 'v_10.png';
                        break;
                    case 7:
                        this.riesgo = 'v_13.png';
                        break;
                    case 8:
                        this.riesgo = 'v_16.png';
                        break;
                    case 9:
                        this.riesgo = 'v_20.png';
                        break;
                    case 10:
                        this.riesgo = 'v_25.png';
                        break;
                    case 11:
                        this.riesgo = 'a_31.png';
                        break;
                    case 12:
                        this.riesgo = 'a_37.png';
                        break;
                    case 13:
                        this.riesgo = 'r_45.png';
                        break;
                    default:
                        this.riesgo = 'r_53.png';

                }
                break;



        }

        console.log(this.pEdad + ' ' + this.pColesterol + ' ' + this.pHdlColesterol + ' ' + this.pPresion + ' ' + this.vDiatebes + ' ' + this.vTabaquismo);
        console.log(this.puntos);

        this.riesgo = 'assets/imgs/' + this.riesgo;

        this.storage.get('userdat').then((val) => {
            this.cidmedico = val.idMedico;
            //this.medico = val.idMedico;
            this.restProvider.calculo(val.idMedico, this.riesgo).then((result) => {
                console.log(result);

            }, (err) => {
                console.log(err);
            });
            console.log(val.idMedico);
        });

        // this.cmensaje = this.riesgo;
        // console.log(this.cidmedico,this.cmensaje);


        //console.log(this.riesgo);
        this.navCtrl.push(CalcularPage, {
            edad: this.pEdad,
            colesterol: this.pColesterol,
            phdcolesterol: this.pHdlColesterol,
            presion: this.pPresion,
            diabetes: this.vDiatebes,
            tabaquismo: this.vTabaquismo,
            riesgo: this.riesgo
        });
    }



}
