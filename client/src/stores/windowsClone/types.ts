export interface IWindowsCloneStore {
  tabs?: IWindowTab[];
  activeTabId?: string | number;
}

export interface IWindowTab {
  type: EWindowTabs;
  name?: string;
  id?: number | string;
}

export enum EWindowTabs {
  Settings = "settings",
  Folder = "folder",
  Ban = "ban",
  Notes = "notes",
}

export enum EWindowTabsNames {
  Settings = "Настройки",
  Folder = "Папочка",
  Ban = "Запрещено открывать",
  Notes = "Заметки",
}
