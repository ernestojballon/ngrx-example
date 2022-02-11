import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProductComponent } from "./modules/products/components/product/product.component";
import { ProductAddComponent } from "./modules/products/components/product-add/product-add.component";
import { ProductEditComponent } from "./modules/products/components/product-edit/product-edit.component";
import { ProductListComponent } from "./modules/products/components/product-list/product-list.component";
import { HomeComponent } from "./pages/home/home.component";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ProductsModule } from "./modules/products/products.module";
import { GlobalStoreModule } from "./store/globalStore.module";
import { JokesModule } from "./modules/jokes/jokes.module";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ProductsModule,
    JokesModule,
    GlobalStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
