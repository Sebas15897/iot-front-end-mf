import { Injectable } from '@angular/core';
import { State, StateContext, Action, Selector } from '@ngxs/store';
import {
  SetOptionMenuViewAction,
  SetPageTitleAction,
  ShowSideBarAction,
} from './layout.actions';

export interface LayoutStateModel {
  show: boolean;
  option_menu: string;
  name_page: string;
}

@State<LayoutStateModel>({
  name: 'layout',
  defaults: {
    show: true,
    option_menu: '',
    name_page: '',
  },
})

@Injectable()
export class LayoutState {
  @Selector() static showMenu(state: LayoutStateModel): boolean {
    return state?.show;
  }

  constructor() {}

  @Action(ShowSideBarAction)
  ShowSideBarAction(
    ctx: StateContext<LayoutStateModel>,
    { payload }: ShowSideBarAction
  ) {
    ctx.patchState({
      show: payload,
    });
  }

  @Action(SetOptionMenuViewAction)
  SetOptionMenuView(
    ctx: StateContext<LayoutStateModel>,
    { option }: SetOptionMenuViewAction
  ) {
    ctx.patchState({
      option_menu: option,
    });
  }

  @Action(SetPageTitleAction)
  SetPageTitle(
    ctx: StateContext<LayoutStateModel>,
    { name }: SetPageTitleAction
  ) {
    ctx.patchState({
      name_page: name,
    });
  }
}
