import { HttpClient , HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*

  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
apiUrl = 'http://griant.mx/calculadora/restapi/v1/index.php/app/';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

getUsers() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/users').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}


correo(data) {
   return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'enviadatospaciente/?med_email='+data.correo+'&edad='+data.edad+'&diabetes='+data.diabetes+'&tabaquismo='+data.tabaquismo+'&colesterolTotal='+data.colesterol+'&colesterolHDL='+data.phdcolesterol+'&presion='+data.presion+'&resultado='+data.tRiesgo+'&recomendacion='+data.recomendacion+'&grafico='+data.gRiesgo,null).subscribe(res => {
          resolve(res);

        }, (err) => {
          reject(err);
        });
    });
}


calculo(id,mensaje){
    return new Promise((resolve, reject) => {
       this.http.post(this.apiUrl+'registraresultados/?idMedico='+id+'&res_resultado='+mensaje,null).subscribe(res => {
           resolve(res);

         }, (err) => {
           reject(err);
         });
     });
}


addUser(data) {

 return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'registro/?med_nombre='+data.med_nombre+'&med_apellidos='+data.med_nombre+'&med_email='+data.med_email+'&med_pass='+data.med_pass+'&med_cedula='+data.med_cedula,null).subscribe(res => {
        resolve(res);
         console.log(data);
      }, (err) => {
        reject(err);
      });
  });
}

getNoticias() {
   return new Promise(resolve => {
     this.http.get('http://griant.mx/calculadora/restapi/v1/index.php/app/noticias/').subscribe(data => {
       resolve(data);
     }, err => {
       console.log(err);
     });
   });
 }

recuperarPass(data) {
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'recoverpass/?med_email='+data.med_email,null).subscribe(res => {
        resolve(res);
          console.log(this.apiUrl+'recoverpass/?med_email='+data.med_email);
        }, (err) => {
          reject(err);
        });
   });
 }

 log(data) {
   return new Promise((resolve, reject) => {
     this.http.post(this.apiUrl+'login/?med_email='+data.ucorreo+'&med_pass='+data.pass,null).subscribe(res => {
         resolve(res);
       }, (err) => {
         reject(err);
       });
     });
}

}
