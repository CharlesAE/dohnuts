import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section >
    <div class="h-[1px] gradient-donut"></div>
<div class="bg-champagne dark:bg-darkchampagne py-16 text-center text-donutblue">
    <div class="py-16 ">
      <div class="container px-4 mx-auto">
        <div class="flex flex-wrap  justify-between  items-center">
          <div class="w-full md:w-auto px-4 mb-6 md:mb-0">
            <p class="text-sm " >&copy; Doh'nuts.nom by 
            <a href="https://www.charlesae.dev" class="footerlink" >charlesae.dev</a>
  
            </p>
          </div>
          <div class="w-full md:w-auto px-4 mb-6 md:mb-0">
            <ul class="md:flex justify-center text-donutpink">
              <li class="mb-4 md:mb-0 md:mr-12"><a class="footerlink" href="#" style="font-size: 14px;">Products</a></li>
              <li class="mb-4 md:mb-0 md:mr-12"><a class="footerlink" href="#" style="font-size: 14px;" >About</a></li>
              
            </ul>
          </div>
          <div class="w-full md:w-auto px-4">
            <div class=" items-center md:justify-end">
              <a class="inline-block md:mr-4" href="#">
                <img src="assets/svgs/twitter.svg" alt="" >
              </a>
              <a class="inline-block" href="#">
                <img src="assets/svgs/facebook.svg" alt="" >
              </a>
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
export class FooterComponent {

}
