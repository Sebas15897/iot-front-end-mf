import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, filter, map, mergeMap, takeUntil } from 'rxjs';
import { LoadingState } from './core/state/loading/loading.state';
import { Store } from '@ngxs/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
  SetPageTitleAction,
  SetOptionMenuViewAction,
} from './core/state/layout/layout.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit, OnDestroy {
  private destroy: Subject<boolean> = new Subject<boolean>();
  showLoading$: Observable<boolean> = new Observable();

  constructor(
    private store: Store,
    private ngxSpinnerService: NgxSpinnerService,
    private router: Router,
  ) {
    this.showLoading$ = this.store.select(LoadingState.showLoading);
    this.subscribeState();
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.store.dispatch(new SetPageTitleAction(event.url));
      }
    });
  }


  subscribeState() {
    this.showLoading$.pipe(takeUntil(this.destroy)).subscribe((show) => {
      show ? this.ngxSpinnerService.show() : this.ngxSpinnerService.hide();
    });
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
