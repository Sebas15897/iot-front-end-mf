export class ShowSideBarAction {
  static readonly type = '[Layout] SidebarShow';
  constructor(public payload: boolean) {}
}

export class SetOptionMenuViewAction {
  static readonly type = '[Layout] Set Option Menu';
  constructor(public option: string) {}
}

export class SetPageTitleAction {
  static readonly type = '[Layout] Set Page Title';
  constructor(public name: string) {}
}
