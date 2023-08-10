import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DohnutService } from '../service/dohnut.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dohnut } from '../model/dohnut';

@Component({
  selector: 'app-dohnuts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section  class="overflow-hidden" >
        <div class="container mx-auto px-4">
          <div class=" mx-auto text-center ">
            <h2 class="font-semibold maintext text-6xl sm:text-7xl" >Our Dohnuts</h2>
          </div>
          <div class="flex flex-wrap my-6"> 
          <div class="w-full md:w-1/2 xl:w-1/4 p-3" *ngFor ="let dohnut of dohnutlist">
              <a (click)="gotoDohnut(dohnut)">
                <div class="group flex flex-col justify-end h-full relative overflow-hidden rounded-10">
                  <img class="mx-auto w-full transform group-hover:scale-110 transition ease-out duration-500" src={{dohnut.img}} alt="">
                  <div class="absolute bottom-0 left-0 w-full p-2">
                    <div class="p-4 w-full bg-champagne bg-opacity-70 backdrop-blur-xl rounded-lg">
                      <h2 class="mb-2 font-medium text-lg uppercase text-donutblue tracking-wide" >{{dohnut.title}}</h2>
                      <p class="font-semibold text-sm text-donutyellow " >{{dohnut.types}}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
  `,
  styles: [
  ]
})
export class DohnutsComponent {

  dohnutlist: Dohnut[] | undefined;

  constructor(dohnutService: DohnutService ,private router: Router){
    this.dohnutlist = dohnutService.getDohnutList();
    
  }


  gotoDohnut(dohnut: Dohnut) {
    
    this.router.navigateByUrl('/dohnut', { state: dohnut });
  }

  


}
