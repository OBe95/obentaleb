import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  data: any = {};
  lang: string = 'fr';

  constructor(private http: HttpClient) { }

  use(lang: string): Promise<{}> {
    this.lang = lang;

    return new Promise<{}>((resolve, reject) => {
      const langPath = `../../assets/i18n/${lang || 'fr'}.json`;

      this.http.get<{}>(langPath).subscribe(
        translation => {
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        error => {
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }
}
