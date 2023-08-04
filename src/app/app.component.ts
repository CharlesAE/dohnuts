import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-dohnut',
  template: `
   
   <body class="flex flex-col bg-white dark:bg-darkchampagne text-darkchampagne dark:text-white">
   <app-navbar [theme]=thememode (changeMode)="changed($event)" class=" flex-none"/>

  <main class=" min-h-screen flex-main">
    <router-outlet  ></router-outlet>
  </main>

  <app-footer class=" flex-none"/>
</body>
      
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  thememode = true;

  changed(clicked: boolean) {
    this.thememode = clicked;
  }

  @HostBinding('class.dark') get mode() {
    return this.thememode;
  }
  title = 'dohnuts';
}
