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
          <div class="w-full lg:w-auto px-4 mb-6 lg:mb-0">
            <p class="text-sm " >&copy; Doh'nuts.nom 2023</p>
          </div>
          <div class="w-full lg:w-auto px-4 mb-6 lg:mb-0">
            <ul class="lg:flex justify-center text-donutpink">
              <li class="mb-4 lg:mb-0 lg:mr-12"><a class="inline-block font-bold hover:text-donutblue" href="#" style="font-size: 14px;">Hello</a></li>
              <li class="mb-4 lg:mb-0 lg:mr-12"><a class="inline-block font-bold hover:text-donutblue" href="#" style="font-size: 14px;" >Story</a></li>
              <li ><a class="inline-block font-bold hover:text-donutblue" href="#" style="font-size: 14px;" >About us</a></li>
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
