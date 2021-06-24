import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url="http://localhost:3000/siva";
  constructor(private service:HttpClient) { }
  savedata(id){
    return this.service.post(this.url,id);
  }
  showdata(){
    return this.service.get(this.url);
  }
  deletedata(data){
    return this.service.delete(`${this.url}/${data}`)
  }
  currentdata(id){
    return this.service.get(`${this.url}/${id}`)
  }
  transferdata(formdata,id){
    return this.service.put(`${this.url}/${formdata}`,id)
  }
}
