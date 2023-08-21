import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  template: `
    
    <section  class=" overflow-x-hidden">
        <div class="relative container md:py-20 px-4 mx-auto">
          <div class="relative max-w-4xl mx-auto">
            <div class="absolute inset-0 bg-donutpink my-14 -ml-4 -mr-4 md:rounded-lg"></div>
            <div class="relative py-8 md:py-20 md:px-4 px-8 bg-donutblue rounded-lg">
              <div class="max-w-lg mx-auto text-center">
                <a class="inline-block mb-6 text-3xl" href="/" >
                  <img class="h-12" src="assets/imgs/logo.png" alt="" width="auto">
                </a>
                <h3 class="mainheading text-white">Sign up</h3>
                <div class="flex flex-wrap -mx-2 mb-10 justify-between pb-10 border-b border-darkchampagne">
                  <div class="w-full md:w-1/3 px-2 mb-2 md:mb-0">
                    <a class="inline-flex items-center justify-center w-full h-16 border-2 border-darkchampagne hover:border-champagne rounded-md" href="#">
                      <img src="assets/imgs/google.svg" alt="" >
                      <span class="ml-4 text-white uppercase font-bold font-heading">Google</span>
                    </a>
                  </div>
                  <div class="w-full md:w-1/3 px-2 mb-2 md:mb-0">
                    <a class="inline-flex items-center justify-center w-full h-16 border-2 border-darkchampagne hover:border-champagne rounded-md" href="#">
                      <img src="assets/imgs/apple.svg" alt="" >
                      <span class="ml-4 text-white uppercase font-bold font-heading">Apple</span>
                    </a>
                  </div>
                  <div class="w-full md:w-1/3 px-2">
                    <a class="inline-flex items-center justify-center w-full h-16 border-2 border-darkchampagne hover:border-champagne rounded-md" href="#">
                      <img src="assets/imgs/facebook.svg" alt="" >
                      <span class="ml-4 text-white uppercase font-bold font-heading">Facebook</span>
                    </a>
                  </div>
                </div>
                <form action="">
                <h2 class="mb-10 text-xl text-white font-bold font-heading">Or with Email:</h2>
                  <input class="donutinput mb-4 " type="text" placeholder="steven@example.dev">
                  <input class="donutinput mb-4" type="password" placeholder="Password">
                  <input class="donutinput mb-8" type="password" placeholder="Repeat password">
                  
                  <button class="btns" >JOIN</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  `,
  styles: [
  ]
})
export class SignupComponent {

}
