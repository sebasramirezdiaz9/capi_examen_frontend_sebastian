import { Component, OnInit } from '@angular/core';
import { TablaUsuariosService } from 'src/app/tabla-usuarios.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  users: any;

  constructor(private service:TablaUsuariosService) { 
    this.service.getUsers().subscribe(data =>{
      this.users = data;
    });
  }

  ngOnInit(): void {
    
  }

}
