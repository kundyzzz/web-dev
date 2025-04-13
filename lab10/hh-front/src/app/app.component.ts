import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  companies: any[] = [
    { name: 'Company 1' },
    { name: 'Company 2' },
    { name: 'Company 3' }
  ];

  selectedCompany: any = null;

  onSelectCompany(company: any) {
    this.selectedCompany = company;
  }
}
