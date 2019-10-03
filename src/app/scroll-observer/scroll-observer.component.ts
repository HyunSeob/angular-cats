import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'scroll-observer',
  template: '<div #anchor></div>',
})
export class ScrollObserverComponent implements OnInit {
  @Output()
  scrolled = new EventEmitter();

  @ViewChild('anchor', {
    static: true,
  })
  anchor: ElementRef<HTMLDivElement>;

  private observer: IntersectionObserver;

  constructor() {}

  ngOnInit() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.scrolled.emit();
      }
    });

    this.observer.observe(this.anchor.nativeElement);
  }
}
