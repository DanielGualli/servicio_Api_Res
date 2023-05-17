import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  productHttp: any;
  products: any;

  constructor(private httpClient: HttpClient) {

  }
  ngOnInit(): void {
    this.getProducts();
    this.getProduct();
    this.createProduct();
    this.updatProduct();
    this.deleteProduct();
  }

  getProducts(){
    const url = 'https://api.escuelajs.co/api/v1/products';
    const response = this.httpClient.get(url).subscribe
    (response => {console.log(response);
    });
  }

  getProduct(){
    const url = 'https://api.escuelajs.co/api/v1/products/20';
    const response = this.httpClient.get(url).subscribe
    (response => {console.log(response);
    });
  }

  createProduct(){
    const data = {
      title:'Zapatos',
      price: 45,
      description: 'calzado / Daniel Gualli',
      images: ["https://api.lorem.espace/image/shoes?w=640&h=480&r=1883"],
      categoryId:1,
    }
    const url = 'https://api.escuelajs.co/api/v1/products';
    this.httpClient.post(url, data).subscribe
    (response => {console.log(response);
    });
  }

  updatProduct(){
    const data = {
      title:'Camisetas',
      price: 25,
      description: 'camisetas deportivas / Daniel Gualli',
    }
    const url = 'https://api.escuelajs.co/api/v1/products/277';
    this.httpClient.put(url, data).subscribe
    (response => {console.log(response);
    });
  }

  deleteProduct(){
    const url = 'https://api.escuelajs.co/api/v1/products/226';
    this.httpClient.delete(url).subscribe
    ((response) => {console.log(response);
    });
  }
}
