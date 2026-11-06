export type NavigationItem = {
  label: string;
  href: string;
  activePath?: string;
  children?: NavigationItem[];
};
