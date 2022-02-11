import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "products",
    loadChildren: "../app/modules/products/products.module#ProductsModule"
  },
  {
    path: "jokes",
    loadChildren: "../app/modules/jokes/jokes.module#JokesModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
