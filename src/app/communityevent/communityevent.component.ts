import { Component } from '@angular/core';

@Component({
  selector: 'app-communityevent',
  templateUrl: './communityevent.component.html',
  styleUrls: ['./communityevent.component.css']
})
export class CommunityeventComponent {

  images = [
    {
      url: 'assets/com1.png',
    },
    {
      url: "assets/com3.png",
    },
    {
      url: 'assets/com2.png',
    },
    {
      url: 'assets/com4.png',
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
