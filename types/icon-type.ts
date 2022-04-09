export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number;
  width?: number;
  height?: number;
  fill?: any;
  stroke?: any;
  type?: 'fill' | 'stroke';
}
