import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  website: string = 'Franco Hernandez';

  constructor(private title: Title, private meta: Meta) { }

  setMetadata(title: string = 'Hola', description: string = 'Esta no es la descripción oficial.', date?: Date): void {
    let tags: any[] = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { name: 'description', content: description }
    ];

if (date) {
  tags.push({ name: 'author', content: 'Franco Hernandez' });
  tags.push({ name: 'date', content: new Date(date).toISOString().substr(0, 10) });
}

    this.title.setTitle(`${title} | ${this.website}`);
    this.meta.addTags(tags);
  }
}
