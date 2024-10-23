// import { Injectable } from '@angular/core';
// import {map} from "rxjs";
// import {HttpClient} from "@angular/common/http";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class CommonService {
//
//   constructor(private http: HttpClient) { }
//
//   parseCsvData(url: string, method: string) {
//     return this.http.get(url, {responseType: 'text'}).pipe(
//       map((responseText: string) => {
//         const parsedData = Papa.parse(responseText, {header: true, skipEmptyLines: true});
//         const headers = parsedData.meta.fields;
//         return { headers, data: parsedData.data };
//       })
//     );
//   }
//
//
//
// }
