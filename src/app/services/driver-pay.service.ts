// import { Injectable } from '@angular/core';
// import {ActivatedRoute} from "@angular/router";
// import {Observable} from "rxjs";
//
// @Injectable({
//   providedIn: 'root'
// })
// export class DriverPayService {
//
//   constructor() { }
//
//   rfidListUrl = `${environment.api.baseUrl}${environment.api.routes.apis.setExitEventLabel}`;
//
//
//   constructor(private commonService: CommonService,
//               private route: ActivatedRoute) {}
//
//
//   queryParams: any = {};
//
//
//   getShrinkEventsList(contextParams?: any, isSelfRefresh = false): Observable<any> {
//     let {cardId, ...queryParams} = this.route.snapshot.queryParams
//     queryParams = !isSelfRefresh ? queryParams :{}
//     this.commonService.updateQueryParamsWithShrink()
//     this.queryParams = {
//       ...this.commonService.queryParams,
//       ...contextParams,
//       ...queryParams,
//     }
//     const url = "assets/data/epcData.csv";
//     return this.commonService.parseCsvData(url, "Shrink Events");
//   }
// }
//
