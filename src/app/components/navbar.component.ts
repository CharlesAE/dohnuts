import { Component, EventEmitter, HostBinding, Input, Output, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="py-10 space-y-10" >
      
    <div class="container px-4 mx-auto">
      <div class="flex items-center justify-between relative">
        <div class="hidden md:block">
          <a class="font-bold hover:text-donutpink" href="#" >Products</a>
        </div>
        
        <div class="brand ">
          <img class="h-6" src="assets/imgs/logo.png" alt="Dark Mode Toggle"  (click) ="change(!theme)" >
        <a  href="/" >
          Doh'nuts
        </a>
        </div>
        <button class="md:hidden ">
          <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 7C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H20.5C20.7761 6 21 6.22386 21 6.5C21 6.77614 20.7761 7 20.5 7H3.5ZM3.5 12C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H20.5C20.7761 11 21 11.2239 21 11.5C21 11.7761 20.7761 12 20.5 12H3.5ZM3 16.5C3 16.7761 3.22386 17 3.5 17H20.5C20.7761 17 21 16.7761 21 16.5C21 16.2239 20.7761 16 20.5 16H3.5C3.22386 16 3 16.2239 3 16.5Z" fill="#A0E7E5"></path>
          </svg>
        </button>
        <div class="hidden lg:block ml-auto"><a class="inline-block mr-8 font-bold hover:text-donutpink" href="#" >Log In</a><a class="navbtns" href="#" >Sign Up</a></div>
      </div>
    </div>
    <div class="h-[1px] gradient-donut"></div>
  </nav>
  `,
  styles: [
  ]
})
export class NavbarComponent {
  
  @Input()
  theme: boolean = true; 

  @Output() changeMode = new EventEmitter<any>();

  change(clicked:boolean){
    this.changeMode.emit(clicked)
  }

  title = 'dohnuts';
}