import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';

// Нет необходимости объявлять AppComponent в @NgModule

bootstrapApplication(AppComponent, {
  providers: [
    // Можно добавить провайдеры, если нужны
  ]
}).catch(err => console.error(err));
