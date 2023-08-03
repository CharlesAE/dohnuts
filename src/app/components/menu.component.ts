import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section  class=''>
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -mx-4 items-center">
        <div class="w-full lg:w-1/2 px-4 mb-10 md:mb-0">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0 md:mt-8 ">
              <div class="relative w-full h-96 bg-donutgreen mb-10 rounded-xl">
               <img class="donuts" src="assets/imgs/glazed-cinnamon.jpg" alt="">
              </div>
              <div class="relative w-full h-96 bg-donutpink rounded-xl">
                <img class="donuts" src="assets/imgs/chocolate-sprinkles.jpg" alt="">
              </div>
            </div>
            <div class=" w-full md:w-1/2 px-4">
              <div class="relative w-full h-96 bg-donutyellow mb-10 rounded-xl">
                <img class="donuts" src="assets/imgs/strawberry-sprinkles.jpg" alt="">
              </div>
              <div class="relative w-full h-96 bg-donutblue rounded-xl">
                <img class="donuts" src="assets/imgs/ny-cheesecake.jpg" alt="">
              </div>
             
             </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-4">
          <div class="max-w-md lg:mx-auto">
            <h2 class="text-4xl lg:text-5xl font-heading mb-9">These donuts are the truth<span class="text-donutblue">.</span></h2>
            <p class="leading-8 mb-14" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit id dicta corporis est officia praesentium mollitia quae obcaecati, go nuts for Doh'nuts.</p>
            <div>
              <div class="flex items-center mb-8">
                <img class="block mr-5" src="assets/svgs/check.svg" alt="" >
                <p >New York Cheesecake</p>
              </div>
              <div class="flex items-center mb-8">
                <img class="block mr-5"  src="assets/svgs/check.svg" alt="" >
                <p >Strawberry Iced with sprinkles</p>
              </div>
              <div class="flex items-center">
                <img class="block mr-5"  src="assets/svgs/check.svg" alt="" >
                <p >Oreo Cookie</p>
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
export class MenuComponent {

}
