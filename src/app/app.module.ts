import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaUsuariosService } from './tabla-usuarios.service';
import { CommonModule } from '@angular/common';
import { UsuariosModule } from './usuarios/usuarios.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [TablaUsuariosService,UsuariosModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
