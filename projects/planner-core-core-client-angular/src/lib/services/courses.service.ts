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

import { Course } from '../models/course';
import { CourseDto } from '../models/course-dto';


/**
 * Gestion des cours
 */
@Injectable({
  providedIn: 'root',
})
export class CoursesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation listCourses
   */
  static readonly ListCoursesPath = '/api/v1/courses';

  /**
   * Liste des cours.
   *
   * Liste les cours existants en base de données
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `listCourses()` instead.
   *
   * This method doesn't expect any request body.
   */
  listCourses$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Course>>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.ListCoursesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Course>>;
      })
    );
  }

  /**
   * Liste des cours.
   *
   * Liste les cours existants en base de données
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `listCourses$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  listCourses(params?: {
  },
  context?: HttpContext

): Observable<Array<Course>> {

    return this.listCourses$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Course>>) => r.body as Array<Course>)
    );
  }

  /**
   * Path part for operation addCourse
   */
  static readonly AddCoursePath = '/api/v1/courses';

  /**
   * Ajoute un cours.
   *
   * Ajoute un nouveau cours en base de données avec un identifiant généré
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addCourse()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCourse$Response(params: {
    body: CourseDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CourseDto>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.AddCoursePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CourseDto>;
      })
    );
  }

  /**
   * Ajoute un cours.
   *
   * Ajoute un nouveau cours en base de données avec un identifiant généré
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addCourse$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addCourse(params: {
    body: CourseDto
  },
  context?: HttpContext

): Observable<CourseDto> {

    return this.addCourse$Response(params,context).pipe(
      map((r: StrictHttpResponse<CourseDto>) => r.body as CourseDto)
    );
  }

  /**
   * Path part for operation deleteCourse
   */
  static readonly DeleteCoursePath = '/api/v1/courses/{id}';

  /**
   * Supprimer un cours.
   *
   * Supprime un cours de la base de données avec son identifiant
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCourse()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCourse$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CoursesService.DeleteCoursePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Supprimer un cours.
   *
   * Supprime un cours de la base de données avec son identifiant
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCourse$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCourse(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteCourse$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
