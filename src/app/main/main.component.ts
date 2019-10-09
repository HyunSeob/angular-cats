import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatService } from '../cat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  oldCategoryId: number = this.categoryId;

  constructor(private route: ActivatedRoute, private catService: CatService) {}

  ngOnInit() {
    if (this.catImages.length !== 0) {
      return;
    }

    this.catService.fetchImages(this.categoryId);
  }

  ngOnDestroy() {}

  ngDoCheck() {
    if (this.oldCategoryId !== this.categoryId) {
      this.catService.clearImages();
      this.catService.fetchImages(this.categoryId);
      this.oldCategoryId = this.categoryId;
    }
  }

  get catImages() {
    return this.catService.images;
  }

  get categoryId() {
    const slug = this.route.snapshot.paramMap.get('category');

    if (slug === 'all') {
      return null;
    }

    const [, categoryId] = slug.split('-');

    return categoryId ? Number(categoryId) : null;
  }

  onScroll() {
    if (this.catImages.length === 0) {
      return;
    }

    this.catService.fetchImages(this.categoryId);
  }
}
