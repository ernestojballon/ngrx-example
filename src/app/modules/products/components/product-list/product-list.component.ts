import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { select, Store } from "@ngrx/store";
import ProductState,{Actions,Selectors} from "../../product-store";  

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  // products$: Observable<Product[]>;

  constructor(
      private productService: ProductService,
      public router: Router,
      private store:Store<ProductState>
  ) {}

  ngOnInit() {
    this.store.dispatch(Actions.loadProducts());
    this.loadProducts();
  }

  loadProducts() {
    this.store.pipe(select(Selectors.selectProducts)).subscribe(products => {
      console.log({products})
      this.products = products
    })
  }

  deleteProduct(id: number) {
    const productsObserver = {
      next: () => {
        console.log("Product Deleted");
        this.ngOnInit();
      },
      error: err => console.error(err)
    };
    this.productService.deleteProduct(id).subscribe(productsObserver);
  }
}
