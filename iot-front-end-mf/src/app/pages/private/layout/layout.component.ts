import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subject, takeUntil } from 'rxjs';

import { GetContactsAction } from '../../../core/state/contacts/contacts.actions';
import { LayoutState } from '../../../core/state/layout/layout.state';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})

export class LayoutComponent implements OnInit, OnDestroy {
  private destroy: Subject<boolean> = new Subject();
  showMenu$: Observable<boolean> = new Observable();
  isOpenMenu: boolean = false;

  constructor(private store: Store) {
    this.showMenu$ = this.store.select(LayoutState.showMenu);
  }

  ngOnInit() {
    this.subscribeState();
  }

  subscribeState() {
    this.showMenu$.pipe(takeUntil(this.destroy)).subscribe((show) => {
      this.isOpenMenu = show ? true : false;
    });
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
