import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export function FetchDateInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  // console.log('Hello form Interceptor');
  const newReq = req.clone({
    headers: req.headers.set('lang', 'en'),
    setHeaders: { name: 'Abdelaziz' },
  });
  // console.log(req);
  // console.log(newReq.params);

  return next(newReq);
}
