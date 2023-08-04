import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section >
   <div class="container px-4 mx-auto">
              <div class=" flex flex-wrap md:items-center  justify-between">
              
                <div class=" gradient-donut rounded-xl text-white background-animate px-6 md:px-14 py-14 xl:py-20 xl:px-24 mb-14 md:max-w-sm md:max-w-lg xl:max-w-2xl">
                  <div class="md:max-w-lg ">
                   
                  <h1 class="mb-6 text-6xl md:text-7xl font-extrabold leading-[1.25] tracking-wide drop-shadow-lg">
                      <span >Doh'nuts </span>
                      <span class="block text-champagne dark:text-white" >.</span>
                      <span >nom</span>
                    </h1>
                    <p class="max-w-md text-lg leading-8 mb-6 drop-shadow-md" >Doh'nuts. Some captivating, very likely Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aut nulla debitis! text about doh'nuts.</p>
                    <a class="btns" href="#" >Details</a>
                  </div>
                </div>

                
                <div class="w-full md:w-1/2 p-8 ">
                  

            <div class="w-full md:w-1/2 xl:w-auto p-8 xl:p-12 relative">
            <img class="absolute -bottom-20 md:bottom-0 right-0 md:-right-[10rem]  h-32 md:h-60 z-20 " src="assets/imgs/mini-strawberry.jpg" alt="">
       
                <div class="md:inline-block relative ">
                
                <div class="overflow-hidden  mb-4 md:mb-0">
                  
                    <img class="w-full md:w-auto rounded-lg transform hover:scale-[.9] transition ease-in-out duration-1000" src="assets/imgs/logo.png" alt="">
                  </div>

                  <div class="md:p-8 md:absolute md:left-1/2 md:md:transform md:-translate-x-1/2 bottom-0 left-0 w-full md:w-3/4 ">
                    
                    <div class="relative w-full p-2 md:p-10 bg-champagne bg-opacity-70 backdrop-blur-xl rounded-lg">
                   
                    <div class="flex items-center">
                      
                      <div>
                        <span class="text-xl xs:text-5xl font-semibold text-white" >18k+</span>
                        <span class="block font-bold uppercase text-sm text-donutblue">Donuts Sold</span>
                      </div>

                      <div class="h-12 w-px mx-auto bg-donutpink"></div>

                      <div>
                        <span class="text-xl xs:text-5xl font-semibold text-white" >20+</span>
                        <span class="block font-bold uppercase text-sm text-donutblue" >Awards Won</span>
                      </div>

                    </div>

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
export class HeroComponent {

}
