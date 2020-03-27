import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // deklasasikan base ke backend
  baseurl = "http://localhost:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http:HttpClient) { }

  getAllMovies(): Observable<any>{
    return this.http.get(this.baseurl + '/movies/',
      {headers: this.httpHeaders});
  }
  getOneMovies(id): Observable<any>{
    return this.http.get(this.baseurl + '/movies/' + id + '/',
    {headers: this.httpHeaders});
  }
  getUpdateMovies(movie): Observable<any>{
    const body = {title: movie.title, desc: movie.desc, year: movie.year};
    return this.http.put(this.baseurl + '/movies/' + movie.id + '/', body,
    {headers: this.httpHeaders});
  }
  createMovie(movie): Observable<any>{
    const body = {title: movie.title, desc: movie.desc, year: movie.year};
    return this.http.post(this.baseurl + '/movies/', body,
    {headers: this.httpHeaders});
  }
  deleteMovie(id): Observable<any>{
    return this.http.delete(this.baseurl + '/movies/' + id + '/',
    {headers: this.httpHeaders});
  }
}
