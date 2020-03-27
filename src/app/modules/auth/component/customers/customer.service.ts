import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // deklasasikan base ke backend
  baseurl = "http://localhost:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http:HttpClient) { }

  getAllCustomers(): Observable<any>{
    return this.http.get(this.baseurl + '/customers/',
      {headers: this.httpHeaders});
  }
  getOneCustomer(id): Observable<any>{
    return this.http.get(this.baseurl + '/customers/' + id + '/',
    {headers: this.httpHeaders});
  }
  getUpdateCustomer(customer): Observable<any>{
    const body = {name: customer.name, address: customer.address, tlp: customer.tlp};
    return this.http.put(this.baseurl + '/customers/' + customer.id + '/', body,
    {headers: this.httpHeaders});
  }
  createCustomer(customer): Observable<any>{
    const body = {name: customer.name, address: customer.address, tlp: customer.tlp};
    return this.http.post(this.baseurl + '/customers/', body,
    {headers: this.httpHeaders});
  }
  deleteCustomer(id): Observable<any>{
    return this.http.delete(this.baseurl + '/customers/' + id + '/',
    {headers: this.httpHeaders});
  }
}
