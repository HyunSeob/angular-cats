import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { CatImage } from '../models/cat-image.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  catImages: CatImage[] = [];

  constructor(private catService: CatService) {}

  ngOnInit() {
    this.catService.getImages().subscribe(catImages => {
      this.catImages = catImages;
    });
  }
}
