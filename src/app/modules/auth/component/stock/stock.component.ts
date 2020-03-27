import { Component, OnInit } from '@angular/core';
import { StockService } from './stock.service';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
  providers: [StockService]
})
export class StockComponent implements OnInit {
  stocks = [{stock: ''}];
  data = [];
  selectedStock;
  constructor(private api: StockService) {
    this.getStocks();
    this.selectedStock = [{id: -1, stocks: '', id_inventori: ''}];
   }
  ngOnInit(): void {
  }

  getStocks = () => {
    this.api.getAllStock().subscribe(
      data => {
        this.stocks = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  StockClicked = (stocks) => {
    // console.log(movie.id);
    this.api.getOneStocks(stocks.id).subscribe(
      data => {
        this.selectedStock = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateStock = () => {
    this.api.getUpdateStocks(this.selectedStock).subscribe(
      data => {
        this.getStocks();
      },
      error => {
        console.log(error);
      }
    );
  }
  createStock = () => {
    this.api.createStock(this.selectedStock).subscribe(
      data => {
        this.stocks.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteStock = () => {
    this.api.deleteStock(this.selectedStock.id).subscribe(
      data => {
        this.getStocks();
      },
      error => {
        console.log(error);
      }
    );
  }

}
