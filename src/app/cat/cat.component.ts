import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
})
export class CatComponent implements OnInit {
  constructor(private route: ActivatedRoute, private catService: CatService) {}

  ngOnInit() {
    if (this.catImage !== undefined) {
      return;
    }

    this.catService.fetchImage(this.catId);
  }

  get catId() {
    return this.route.snapshot.paramMap.get('cat-id');
  }

  get catImage() {
    return this.catService.getImage(this.catId);
  }
}
