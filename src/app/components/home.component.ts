import { Component, HostBinding, OnInit, WritableSignal, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { CtaComponent } from './cta.component';
import { FooterComponent } from './footer.component';
import { NavbarComponent } from './navbar.component';
import { MenuComponent } from './menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, CtaComponent, FooterComponent,MenuComponent, NavbarComponent],
  template: `
    <div class="bg-white dark:bg-darkchampagne text-darkchampagne dark:text-white">
    <app-navbar [theme]=thememode (changeMode)="changed($event)" />
    <app-hero/>
    <app-menu/>
    <app-cta/>
    <app-footer/>
    </div>
  `,
  styles: [
  ]
})
export class HomeComponent  {
  
thememode = true;

  changed(clicked: boolean) {
    this.thememode = clicked;
  }

  @HostBinding('class.dark') get mode() {
    return this.thememode;
  }

}
