import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuConfig, MenuData } from '../../../../core/models/menu.data';
import { Select } from '@ngxs/store';
import { Subject, Observable, takeUntil } from 'rxjs';
import {
  LayoutState,
  LayoutStateModel,
} from '../../../../core/state/layout/layout.state';
import moment from 'moment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent implements OnInit, OnDestroy {
  private destroy: Subject<boolean> = new Subject<boolean>();

  @Select(LayoutState) layout$: Observable<LayoutStateModel>;

  listMenu = [];
  actualOption = null;
  date = '';
  hour = '';

  constructor() {}

  ngOnInit() {
    this.loadMenu();

    setInterval(() => {
      this.date = this.getDateNow().format('dddd, DD MMMM YYYY');
      this.hour = this.getDateNow().format('hh:mm:ss A');
    }, 1000);

    this.layout$.pipe(takeUntil(this.destroy)).subscribe((res) => {
      const option = res?.name_page;
      this.actualOption = option;
      setTimeout(() => {
        this.loadActive();
      }, 100);
    });
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

  async loadMenu() {
    const menu: MenuData[] = this.copyJson(MenuConfig);
    const listMenu = [];
    const verify_item_menu = async (element) => {
      element.active = false;
      if (element.items) {
        const childrens = [];
        for (let i = 0; i < element.items.length; i++) {
          const item = element.items[i];
          const verify = await verify_item_menu(item);
          if (verify) {
            childrens.push(item);
          }
        }
        if (childrens.length > 0) {
          element.items = childrens;
          return element;
        } else {
          return null;
        }
      } else {
        return element;
      }
    };
    for (let j = 0; j < menu.length; j++) {
      const element = menu[j];
      const verify = await verify_item_menu(element);
      if (verify) {
        listMenu.push(verify);
      }
    }
    this.listMenu = listMenu;
  }

  async loadActive() {
    const listMenu: MenuData[] = this.copyJson(this.listMenu);
    const verify_item_menu = async (element) => {
      console.log(element);
      if (element?.items) {
        let actives = 0;
        for (let i = 0; i < element.items.length; i++) {
          const item = element.items[i];
          const verify = await verify_item_menu(item);
          if (verify?.active) {
            actives++;
          }
        }
        element.active = false;
        if (actives > 0) {
          element.active = true;
        }
      } else {
        console.log('entre 22');
        element.active = false;
        if (element?.path === this.actualOption) {
          element.active = true;
        }
      }
      return element;
    };
    for (let j = 0; j < listMenu.length; j++) {
      const element = listMenu[j];
      await verify_item_menu(element);
    }
    this.listMenu = listMenu;
  }

  copyJson(data) {
    return JSON.parse(JSON.stringify(data));
  }

  getDateNow() {
    const localLocale = moment();
    return localLocale;
  }
}
