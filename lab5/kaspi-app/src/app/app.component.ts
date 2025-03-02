import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  categories = ['Все', 'Гаджеты', 'Досуг', 'Красота', 'Бытовая техника'];
  selectedCategory = 'Все';
likedProductsCount: any;

  filterProducts(category: string) {
    this.selectedCategory = category;
  }
}
