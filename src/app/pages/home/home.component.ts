import { MetaService } from './../../services/meta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  constructor(private metaService: MetaService) { }

  ngOnInit(): void {
    const title: string = 'Bienvenido', description: string = 'Esta es mi página personal';
    this.metaService.setMetadata(title, description)
  }

}
