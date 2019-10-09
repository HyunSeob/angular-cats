import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CatImage } from './models/cat-image.model';
import { CatCategory } from './models/cat-category.model';

const apiUrl = 'https://api.thecatapi.com/v1';
const httpHeaders = new HttpHeaders({
  'x-api-key': '63233e58-83e2-4b0b-b9db-6d13eba94a51',
});

const imagesPerPage = 10;

@Injectable({
  providedIn: 'root',
})
export class CatService {
  imageRecord: Record<string, CatImage> = {};
  categoryRecord: Record<number, CatCategory> = {};

  constructor(private http: HttpClient) {}

  fetchImages(categoryId: number | null) {
    const baseParams = {
      limit: String(imagesPerPage),
      page: String(this.images.length / imagesPerPage),
    };

    const categoryParam = categoryId ? { category_ids: [String(categoryId)] } : {};

    return this.http
      .get(`${apiUrl}/images/search`, {
        headers: httpHeaders,
        params: {
          ...baseParams,
          ...categoryParam,
        },
      })
      .pipe(
        map((images: CatImage[]) => {
          return images.map(image => new CatImage().deserialize(image));
        }),
      )
      .subscribe(images => {
        images.forEach(image => {
          this.imageRecord[image.id] = image;
        });
      });
  }

  fetchImage(id: string) {
    return this.http
      .get(`${apiUrl}/images/${id}`, {
        headers: httpHeaders,
      })
      .pipe(
        map((image: CatImage) => {
          return new CatImage().deserialize(image);
        }),
      )
      .forEach(image => {
        this.imageRecord[image.id] = image;
      });
  }

  clearImages() {
    this.imageRecord = {};
  }

  fetchCategories() {
    return this.http
      .get(`${apiUrl}/categories`, {
        headers: httpHeaders,
      })
      .pipe(
        map((categories: CatCategory[]) => {
          return categories.map(category => new CatCategory().deserialize(category));
        }),
      )
      .subscribe(categories => {
        categories.forEach(category => {
          this.categoryRecord[category.id] = category;
        });
      });
  }

  get images() {
    return Object.values(this.imageRecord);
  }

  getImage(id: string) {
    return this.imageRecord[id];
  }

  get categories() {
    return Object.values(this.categoryRecord);
  }
}
