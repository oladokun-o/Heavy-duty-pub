export interface NavList {
  label: string;
  route: string;
  icon?: string;
  children?:  Array<NavList>;
}
