import { Component } from '@angular/core';

@Component({
  selector: 'app-socialevent',
  templateUrl: './socialevent.component.html',
  styleUrls: ['./socialevent.component.css']
})
export class SocialeventComponent {


images = [
  {
    url: 'assets/social4.png',
  },
  {
    url: "assets/social1.png",
  },
  {
    url: 'assets/social3.png',
  },
  {
    url: 'assets/social2.png',
  },
];

activeIndex = 0;
timer: any;

ngOnInit() {
  this.startSlideshow();
}

startSlideshow() {
  this.timer = setInterval(() => {
    this.nextSlide1();
  }, 6000);
}

nextSlide1() {
  this.activeIndex = (this.activeIndex + 1) % this.images.length;
}

prevSlide1() {
  this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
}

manuallyChangeSlide(index: number) {
  this.activeIndex = index;
  clearInterval(this.timer);
  this.startSlideshow();
}
}