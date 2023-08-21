import { Component, EventEmitter, HostBinding, Input, Output, WritableSignal, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="py-6 space-y-6" >
      
    <div class="container px-4 mx-auto">
      <div class="flex items-center justify-between relative">
        <div class="hidden md:block">
          <a class="font-bold hover:text-donutpink" href="dohnuts" >Products</a>
        </div>
        
        <div class="brand ">
          <img class="h-6" src="assets/imgs/logo.png" alt="Dark Mode Toggle"  (click) ="setTheme()" >
        <a  href="/" >
          Doh'nuts
        </a>
        </div>


        <button class="md:hidden " (click)="toggleMenu()">
          <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z" fill="#A0E7E5"></path>
          </svg>
        </button>


        <div class="absolute z-30 opacity-0 top-0 inset-x-0 pointer-events-none "
            [ngClass]="{'pointer-events-auto opacity-100': menu}">
            
            <div class=" rounded-lg shadow-lg ring-1 ring-champagne ring-opacity-5 mainbg">
                <div class="flex items-center justify-between">
                    <button (click)="toggleMenu()" class="mainbg rounded-lg p-2 inline-flex items-center justify-center text-donutblue">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
                </div>
                <div class="py-6 px-5">
                    <div class="grid gap-2">
                        <a (click)="toggleMenu()" class="font-bold text-donutpink" href="/">Home</a>
                        <a (click)="toggleMenu()" class="font-bold text-donutpink" href="dohnuts">Products</a>
                        <a (click)="toggleMenu()" class="font-bold text-donutpink" href="/">Log In</a>
                        <a (click)="toggleMenu()" class="font-bold text-donutpink" href="/">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>

        

        <div class="hidden md:block ml-auto">
          <a class="inline-block mr-8 font-bold hover:text-donutpink" href="login" >Log In</a>
        <a class="navbtns" href="signup" >Sign Up</a></div>
      </div>
    </div>
    <div class="h-[1px] gradient-donut"></div>
  </nav>
  `,
  styles: [
  ]
})
export class NavbarComponent {
  menu = false;
  
  @Input()
  theme: WritableSignal<boolean> = signal(false); 

setTheme(){
  this.theme.set(!this.theme())
  window.localStorage.setItem('darkMode', JSON.stringify(this.theme()));
}
toggleMenu() {
  this.menu = !this.menu;
}


  

  title = 'dohnuts';
}