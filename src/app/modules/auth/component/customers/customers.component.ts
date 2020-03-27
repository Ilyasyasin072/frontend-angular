import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {

  customer = [{ name: 'test' }];
  // NgModel di views
  selectedCustomer;
  constructor(private api: CustomerService) {
    this.getCustomers();
    this.selectedCustomer = { id: -1, name: '', address: '', tlp: '' };
  }

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers = () => {
    this.api.getAllCustomers().subscribe(
      data => {
        this.customer = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  movieClicked = (customer) => {
    // console.log(movie.id);
    this.api.getOneCustomer(customer.id).subscribe(
      data => {
        this.selectedCustomer = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateCustomer = () => {
    this.api.getUpdateCustomer(this.selectedCustomer).subscribe(
      data => {
        this.getCustomers();
      },
      error => {
        console.log(error);
      }
    );
  }
  createCustomer = () => {
    this.api.createCustomer(this.selectedCustomer).subscribe(
      data => {
        this.customer.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteCustomer = () => {
    this.api.deleteCustomer(this.selectedCustomer.id).subscribe(
      data => {
        this.getCustomers();
      },
      error => {
        console.log(error);
      }
    );
  }

}
