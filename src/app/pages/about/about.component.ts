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

  constructor() { }

  ngOnInit(): void {
  }

}
