import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  movies = [{ title: 'test' }];
  data = [];
  // NgModel di views
  selectedMovie;
  // baseurl = "http://localhost:8000";
  // httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private api: MovieService) {
    this.getMovies();
    this.selectedMovie = {id: -1, title: '', desc: '', year: ''};
    // this.http.get(this.baseurl + '/customers/',
    // {headers: this.httpHeaders}).subscribe(data => {
    //   this.data.push(data);
    //   console.log(data);
    //   }, error => console.error(error));
  }
  // dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 5,
    //   processing: true
    // };
  }

  getMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
        this.movies = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  movieClicked = (movie) => {
    // console.log(movie.id);
    this.api.getOneMovies(movie.id).subscribe(
      data => {
        this.selectedMovie = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateMovie = () => {
    this.api.getUpdateMovies(this.selectedMovie).subscribe(
      data => {
        this.getMovies();
      },
      error => {
        console.log(error);
      }
    );
  }
  createMovie = () => {
    this.api.createMovie(this.selectedMovie).subscribe(
      data => {
        this.movies.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteMovie = () => {
    this.api.deleteMovie(this.selectedMovie.id).subscribe(
      data => {
        this.getMovies();
      },
      error => {
        console.log(error);
      }
    );
  }

}
