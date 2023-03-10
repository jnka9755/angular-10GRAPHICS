import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor(private http: HttpClient) { }

  getDataDonutGraphic(){

    return this.http.get('http://localhost:3000/grafica');
  }

  getDataDonutGraphicData(){
    
    return this.getDataDonutGraphic()
            .pipe(
              delay(1000),
              map( data => {
                const labels = Object.keys(data);
                const values = Object.values(data);

                return { labels, values };
              })
            )
  }
}
