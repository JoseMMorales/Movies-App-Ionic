import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { from, Observable, Subscription, take } from 'rxjs';

import { MethodStrings } from './loading.const';
import { Dismiss, Loading, Method, Present } from './loading.interface';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loaderObservable$!: Observable<HTMLIonLoadingElement>;
  subscription: Subscription[] = [];

  constructor(private loadingCtrl: LoadingController) {}

  loadingIonic(method: string): void {
    switch (method) {
      case MethodStrings.PRESENT:
        this.getLoading();
        this.handleLoading((load) => this.presentMethod(load));
        break;
      case MethodStrings.DISMISS:
        this.handleLoading((load) => this.dismissMethod(load));
        break;
      default:
        break;
    }
  }

  private handleLoading(method: (load?: Method) => Loading): void {
    this.loaderObservable$
      .pipe(take(1))
      .subscribe((load: HTMLIonLoadingElement) => {
        method(load);
      });
  }

  private presentMethod(load?: HTMLIonLoadingElement): Present {
    return load?.present();
  }

  private dismissMethod(load?: HTMLIonLoadingElement): Dismiss {
    return load?.dismiss();
  }

  private getLoading(): void {
    this.loaderObservable$ = from(
      this.loadingCtrl.create({
        message: 'Loading...',
        spinner: 'bubbles',
      })
    );
  }
}
