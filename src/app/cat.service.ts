import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CatImage } from './models/cat-image.model';

const apiUrl = 'https://api.thecatapi.com/v1';
const httpHeaders = new HttpHeaders({
  'x-api-key': '63233e58-83e2-4b0b-b9db-6d13eba94a5',
});

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor(private http: HttpClient) {}

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
