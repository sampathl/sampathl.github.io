interface MaterialIconProps {
  name: string;
  className?: string;
}

export const MaterialIcon = ({ name, className = "" }: MaterialIconProps) => (
  <span className={`material-icons ${className}`}>{name}</span>
);

export default MaterialIcon;
