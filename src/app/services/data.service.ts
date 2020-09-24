import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://127.0.0.1:8000/';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

getDescription(id) {
    return this.http.get(`${baseUrl}data/${id}`);
  }

getAllData(category) {
    return this.http.get(`${baseUrl}data/?category=${category}`);
}

getAllAlerts(id) {
  return this.http.get(`${baseUrl}alert/?id=${id}`);
}

getAllComments(id) {
  return this.http.get(`${baseUrl}comment/?id=${id}`);
}

getAllDataSegment(submit_type) {
  return this.http.get(`${baseUrl}data/?submit_type=${submit_type}`);
}

getCategoryAlerts(category){
  return this.http.get(`${baseUrl}alert/?category=${category}`);
}

getDataInfo(URL){
  return this.http.get(`${URL}`);
}

postId: "";

// interface Alert {
//     name: string;
//     data: string;
//     description: string;
//     created_by: string;
//     condition: string;
//     amount: number;
//     status: string;
// }

createAlert(name, amount, created_by, condition, data){
   let url = `${baseUrl}data/` + data + '/';
   console.log(url)
  return this.http.post<any>(`${baseUrl}alert/`, { name: name, amount: amount, created_by: created_by, condition: condition, data: url, status: "active"}).subscribe(data => {
    this.postId = data.id;
});
}}
