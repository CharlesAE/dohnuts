import { Component, HostBinding, signal } from '@angular/core';

@Component({
  selector: 'app-dohnut',
  template: `
   
   <body class="flex flex-col mainbg maintext">
   <app-navbar [theme]=sitetheme  class=" flex-none"/>

  <main class=" min-h-screen flex-main">
    <router-outlet  ></router-outlet>
  </main>

  <app-footer class=" flex-none"/>
</body>
      
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sitetheme = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  );

  @HostBinding('class.dark') get theme() {
    return this.sitetheme();
  }
 
  title = 'dohnuts';
}
