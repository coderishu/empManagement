import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  requestCount = 0;
  constructor(public loaderService: NgxSpinnerService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.requestCount++;
    this.loaderService.show();
    console.log("show", this.requestCount);

    return next.handle(req).pipe(
      finalize(() => {
        this.requestCount--;
        console.log("----", this.requestCount);
        if (this.requestCount === 0) {
          this.loaderService.hide();
        }
      })
    );
  }
}
