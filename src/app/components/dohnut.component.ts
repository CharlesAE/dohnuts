import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Dohnut } from '../model/dohnut';

@Component({
  selector: 'app-dohnut',
  standalone: true,
  imports: [CommonModule],
  template: `
     <section  class="relative py-8 overflow-hidden">
        <div class="container mx-auto px-4">
          
          <div class="flex flex-wrap items-center -m-6">
            <div class="w-full md:w-7/12 p-8 md:p-16">
              <div class=" rounded-2xl items-center justify-center bg-repeat-x bg-bottom bg-50" style="background-image: url({{dohnut.bannerUrl}})">
                <img class="relative top-3 w-full transform hover:scale-105 transition ease-in-out duration-500 
                md:p-24" src={{dohnut.img}} alt={{dohnut.imgAlt}} >
              </div>
            </div>
            <div class="w-full lg:w-5/12 p-8 lg:p-16">
              <div class="lg:max-w-md ">
                <h2 class="mb-10 font-heading font-bold text-4xl sm:text-5xl text-donutblue" >{{dohnut.title}}</h2>
                <div>
                  <div class="mb-6 gradient-donut h-px"></div>
                  <p class="mb-4">{{dohnut.description}}</p>
                  <div class="mb-4 flex flex-wrap items-center justify-between">
                    <h3 class="font-heading font-bold text-lg text-donutpink" >Toppings </h3>
                    
                  </div>
                  <div class="flex space-x-2">
                  <div class=" " *ngFor ="let topping of toppings">
                  <p >{{topping}}</p>
                  </div>
                  </div>

                  
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
        
      </section>
  `,
  styles: [
  ]
})
export class DohnutComponent {

  dohnut: any | undefined;
  toppings: string[] = []
  constructor(private router: Router){
    this.dohnut = this.router.getCurrentNavigation()?.extras.state
    this.toppings = this.dohnut.types
  }
  
}
