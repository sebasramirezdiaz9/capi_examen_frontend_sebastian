import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaUsuariosComponent } from './usuarios/tabla-usuarios/tabla-usuarios.component';
import { TablaUsuariosService } from './tabla-usuarios.service';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    TablaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [TablaUsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
