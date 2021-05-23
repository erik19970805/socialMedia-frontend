export interface IProps {
  exact: boolean;
  path: string;
  component: () => JSX.Element;
}
