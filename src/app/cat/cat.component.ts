import { Component, OnInit } from '@angular/core';
import { CatImage } from '../models/cat-image.model';
import { CatService } from '../cat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
})
export class CatComponent implements OnInit {
  catImage: CatImage | null = null;

  constructor(private route: ActivatedRoute, private catService: CatService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('cat-id');

    this.catService.getImage(id).subscribe(catImage => {
      this.catImage = catImage;
    });
  }
}
