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
              <li class="mb-4 md:mb-0 md:mr-12"><a class="footerlink" href="dohnuts" style="font-size: 14px;">Products</a></li>
              <li class="mb-4 md:mb-0 md:mr-12"><a class="footerlink" href="#" style="font-size: 14px;" >About</a></li>
              
            </ul>
          </div>
          <div class="w-full md:w-auto px-4">
            <div class=" items-center md:justify-end">
              <a class="inline-block md:mr-4 text-donutpink hover:text-donutblue" href="#">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 5.63381C19.3743 5.91106 18.7029 6.09908 17.9975 6.18303C18.7178 5.75172 19.2691 5.06761 19.5304 4.25494C18.8548 4.65436 18.1091 4.94439 17.3144 5.10161C16.6781 4.42281 15.7731 4 14.7692 4C12.8432 4 11.2816 5.56158 11.2816 7.48647C11.2816 7.75947 11.3124 8.02611 11.3719 8.28108C8.474 8.13553 5.90431 6.74711 4.18444 4.63736C3.88381 5.15153 3.71278 5.75064 3.71278 6.39017C3.71278 7.60014 4.32892 8.66775 5.26375 9.29236C4.69222 9.27325 4.15469 9.11603 3.68411 8.85469V8.89825C3.68411 10.5873 4.88664 11.997 6.48114 12.3178C6.189 12.3964 5.88094 12.44 5.56225 12.44C5.33706 12.44 5.11928 12.4177 4.90575 12.3752C5.34978 13.7615 6.63731 14.7696 8.16278 14.7972C6.96981 15.7321 5.46558 16.2876 3.83178 16.2876C3.55028 16.2876 3.273 16.2706 3 16.2398C4.54353 17.231 6.376 17.8089 8.3455 17.8089C14.7607 17.8089 18.2674 12.4952 18.2674 7.88697L18.2557 7.4355C18.9409 6.94681 19.5336 6.33281 20 5.63381Z" fill="#A0E7E5"/>
<mask id="mask1" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="4" width="17" height="14">
<path d="M20 5.63381C19.3743 5.91106 18.7029 6.09908 17.9975 6.18303C18.7178 5.75172 19.2691 5.06761 19.5304 4.25494C18.8548 4.65436 18.1091 4.94439 17.3144 5.10161C16.6781 4.42281 15.7731 4 14.7692 4C12.8432 4 11.2816 5.56158 11.2816 7.48647C11.2816 7.75947 11.3124 8.02611 11.3719 8.28108C8.474 8.13553 5.90431 6.74711 4.18444 4.63736C3.88381 5.15153 3.71278 5.75064 3.71278 6.39017C3.71278 7.60014 4.32892 8.66775 5.26375 9.29236C4.69222 9.27325 4.15469 9.11603 3.68411 8.85469V8.89825C3.68411 10.5873 4.88664 11.997 6.48114 12.3178C6.189 12.3964 5.88094 12.44 5.56225 12.44C5.33706 12.44 5.11928 12.4177 4.90575 12.3752C5.34978 13.7615 6.63731 14.7696 8.16278 14.7972C6.96981 15.7321 5.46558 16.2876 3.83178 16.2876C3.55028 16.2876 3.273 16.2706 3 16.2398C4.54353 17.231 6.376 17.8089 8.3455 17.8089C14.7607 17.8089 18.2674 12.4952 18.2674 7.88697L18.2557 7.4355C18.9409 6.94681 19.5336 6.33281 20 5.63381Z" fill="white"/>
</mask>
<g mask="url(#mask1)">
<rect width="22" height="22" fill="currentColor"/>
</g>
</svg>
              </a>
              <a class="inline-block text-donutpink hover:text-donutblue " href="#">
              <svg class=" " width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4986 19V11.7022H14.995L15.3695 8.85725H12.4986V7.04118C12.4986 6.21776 12.7308 5.65661 13.936 5.65661L15.4706 5.65599V3.11138C15.2052 3.07756 14.2942 3 13.2339 3C11.0198 3 9.50399 4.32557 9.50399 6.75942V8.85725H7V11.7022H9.50399V19H12.4986Z" fill="#A0E7E5"/>
<mask id="mask" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="7" y="3" width="9" height="16">
<path d="M12.4986 19V11.7022H14.995L15.3695 8.85725H12.4986V7.04118C12.4986 6.21776 12.7308 5.65661 13.936 5.65661L15.4706 5.65599V3.11138C15.2052 3.07756 14.2942 3 13.2339 3C11.0198 3 9.50399 4.32557 9.50399 6.75942V8.85725H7V11.7022H9.50399V19H12.4986Z" fill="white"/>
</mask>
<g mask="url(#mask)">
<rect width="22" height="22" fill="currentColor"/>
</g>
</svg>
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
