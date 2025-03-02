import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
  category: string;
  liked: boolean;
}

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() like = new EventEmitter<Product>();

  onLike() {
    this.like.emit(this.product);
  }

  share(product: Product) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(telegramUrl, '_blank');
}
}
