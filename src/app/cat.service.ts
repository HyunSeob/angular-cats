import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CatImage } from './models/cat-image.model';

const apiUrl = 'https://api.thecatapi.com/v1';
const httpHeaders = new HttpHeaders({
  'x-api-key': '63233e58-83e2-4b0b-b9db-6d13eba94a5',
});

const imagesPerPage = 10;

@Injectable({
  providedIn: 'root',
})
export class CatService {
  imageRecord: Record<string, CatImage> = {};

  constructor(private http: HttpClient) {}

  fetchImages() {
    this.http
      .get(`${apiUrl}/images/search`, {
        headers: httpHeaders,
        params: {
          limit: String(imagesPerPage),
          page: String(this.images.length / imagesPerPage),
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

  get images() {
    return Object.values(this.imageRecord);
  }

  getImages() {
    return this.http
      .get(`${apiUrl}/images/search`, {
        headers: httpHeaders,
        params: {
          limit: '10',
          page: '0',
        },
      })
      .pipe(
        map((images: CatImage[]) => {
          return images.map(image => new CatImage().deserialize(image));
        }),
      );
  }

  getImage(id: string) {
    return this.http
      .get(`${apiUrl}/images/${id}`, {
        headers: httpHeaders,
      })
      .pipe(
        map((image: CatImage) => {
          return new CatImage().deserialize(image);
        }),
      );
  }
}
