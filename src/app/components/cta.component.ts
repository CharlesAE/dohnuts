import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative my-20">
    <img class="absolute -bottom-[5.5rem] md:-bottom-20 left-0 md:-right-[30rem]  h-32 md:h-60  " src="assets/imgs/mini-chocolatesprinkles.jpg" alt="">   
    
    <div class="container  px-4 mx-auto">
    
        <div class="mx-auto ">
          <div class="py-12 px-6 md:p-20 bg-donutblue rounded-xl z-50">
            <div class="flex flex-wrap -mx-4 items-center">
              <div class="w-full md:w-1/3 px-4 mb-8 lg:mb-0">
                
                  <img class="w-full md:w-1/2" src="assets/imgs/strawberry-iced.jpg" >
                
              </div>
              <div class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
                <p class="text-white" >Yet another captivating, very likely Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut nulla debitis! text about doh'nuts!</p>
              </div>
              <div class="w-full lg:w-1/3 px-4 lg:text-right"><a class="btns transition duration-200" href="#" >Buy Now</a></div>
            </div>
          </div>
          
          
        </div>
      </div>
    
    </section>

  `,
  styles: [
  ]
})
export class CtaComponent {

}
