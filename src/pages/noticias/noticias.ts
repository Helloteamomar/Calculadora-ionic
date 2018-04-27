import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
* Generated class for the NoticiasPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
selector: 'page-noticias',
templateUrl: 'noticias.html',
})
export class NoticiasPage {
users: any;
constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider,public modalCtrl : ModalController) {
this.getNoticias();
}
ionViewDidLoad() {
  console.log('ionViewDidLoad NoticiasPage');
}

getNoticias() {
    this.restProvider.getNoticias().then(data => {
     this.users = data;
      console.log(data);
    });
  }

}
