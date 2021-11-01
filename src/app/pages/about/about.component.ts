import { MetaService } from './../../services/meta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {
techs: any[] = [
  { tech: 'Angular', description: 'Typescript' },
  { tech: 'VueJS', description: 'Javascript' },
  { tech: 'Spring Boot', description: 'Java' },
  { tech: 'Bases de datos', description: 'SQL Server, MySQL, MongoDB' },
  { tech: 'Pandas', description: 'Python' },
  { tech: 'Selenium', description: 'Python' },
];

  constructor(private metaService: MetaService) { }

  ngOnInit(): void {
    const title: string = 'Sobre mí', description: string = 'En esta página conocerás las tecnologías que he usado, que estoy aprendiendo y qué me gusta hacer en mi tiempo libre';
    this.metaService.setMetadata(title, description);
  }

}
