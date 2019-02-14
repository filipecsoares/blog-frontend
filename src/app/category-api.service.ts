import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Category } from './models/category';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched categories')),
        catchError(this.handleError('getCategories', []))
      );
  }

  getCategory(id: string): Observable<Category> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Category>(url).pipe(
      tap(_ => console.log(`fetched Category id=${id}`)),
      catchError(this.handleError<Category>(`getCategory id=${id}`))
    );
  }

  addCategory(category): Observable<Category> {
    return this.http.post<Category>(apiUrl, category, httpOptions).pipe(
      tap((categ: Category) => console.log(`added Category w/ id=${categ.id}`)),
      catchError(this.handleError<Category>('addCategory'))
    );
  }

  updateCategory(id, category): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, category, httpOptions).pipe(
      tap(_ => console.log(`updated Category id=${id}`)),
      catchError(this.handleError<any>('updateCategory'))
    );
  }

  deleteCategory(id): Observable<Category> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Category>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Category id=${id}`)),
      catchError(this.handleError<Category>('deleteCategory'))
    );
  }
}
