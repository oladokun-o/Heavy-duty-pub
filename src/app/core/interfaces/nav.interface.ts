export interface NavList {
  label: string;
  route: string;
  children?:  Array<NavList>;
}
