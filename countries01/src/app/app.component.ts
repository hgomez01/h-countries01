import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';
import { Country } from './country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  countries: Country[] = [];

  products:any = [];

  constructor(private countryService: CountriesService){}

  ngOnInit(): void {
    console.log("going ngOnInit");
    // console.log(this.countryService.getCountries());
    this.countryService.getCountries().subscribe(val => console.log(val));
  }
  
  // ngOnInit(): void {
  //   console.log("going ngOnInit");
  //   // console.log( this.getCountries() );

  //   console.log("get products");
  //   this.getProducts();
  //   console.log(this.products);


  //   console.log("one more attempt");
  //   console.log(this.countryService.getOrders());
  // }

  // getCountries(): void {
  //   console.log("get countries method");
  //   console.log(this.countryService);
  //   console.log(this.countryService.getCentralAmericaCountries());


  //   this.countryService.getCentralAmericaCountries()
  //     .subscribe(countries => this.countries);
  // }

  // getProducts() {
  //   this.products = [];
  //   this.countryService.getUsers().subscribe((data: {}) => {
  //     console.log("inside method before printing data:")
  //     console.log(data);
  //     this.products = data;
  //   });
  // }


}