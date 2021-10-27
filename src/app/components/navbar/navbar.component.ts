import { Link } from './../../models/link.nav';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  links: Link[] = [
    { to: ['home'], text: 'Inicio', icon: 'home' },
    { to: ['portfolio'], text: 'Portafolio', icon: 'folder' },
    { to: ['blog'], text: 'Blog', icon: 'article' },
    { to: ['about'], text: 'Sobre mí', icon: 'account_circle' },
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
