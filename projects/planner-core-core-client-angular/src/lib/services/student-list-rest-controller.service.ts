/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentListRestControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation execute
   */
  static readonly ExecutePath = '/api/v1/student';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `execute()` instead.
   *
   * This method doesn't expect any request body.
   */
  execute$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Student>>> {

    const rb = new RequestBuilder(this.rootUrl, StudentListRestControllerService.ExecutePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Student>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `execute$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  execute(params?: {
  },
  context?: HttpContext

): Observable<Array<Student>> {

    return this.execute$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Student>>) => r.body as Array<Student>)
    );
  }

}
