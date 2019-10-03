import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private catService: CatService) {}

  ngOnInit() {
    if (this.catImages.length !== 0) {
      return;
    }

    this.catService.fetchImages();
  }

  get catImages() {
    return this.catService.images;
  }

  onScroll() {
    if (this.catImages.length === 0) {
      return;
    }

    this.catService.fetchImages();
  }
}
