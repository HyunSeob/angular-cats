import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private catService: CatService) {}

  ngOnInit() {
    this.catService.fetchCategories();
  }

  get catCategories() {
    return this.catService.categories;
  }
}
