import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  baseurl = "http://localhost:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http:HttpClient) { }

  getAllStock(): Observable<any>{
    return this.http.get(this.baseurl + '/stocks/',
      {headers: this.httpHeaders});
  }
  getOneStocks(id): Observable<any>{
    return this.http.get(this.baseurl + '/stocks/' + id + '/',
    {headers: this.httpHeaders});
  }
  getUpdateStocks(stocks): Observable<any>{
    const body = {stock: stocks.stock, stocks: stocks.id_inventory};
    return this.http.put(this.baseurl + '/stocks/' + stocks.id + '/', body,
    {headers: this.httpHeaders});
  }
  createStock(stocks): Observable<any>{
    const body = {stock: stocks.stock, stocks: stocks.id_inventory};
    return this.http.post(this.baseurl + '/stocks/', body,
    {headers: this.httpHeaders});
  }
  deleteStock(id): Observable<any>{
    return this.http.delete(this.baseurl + '/stocks/' + id + '/',
    {headers: this.httpHeaders});
  }
}
