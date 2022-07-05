import { useTheme } from "../Context/themeContext";

export const UseCon = () => {
  const theme  = useTheme();
  return <div style={{color:theme.primary,backgroundColor:theme.secondary}}>Apply theme context on me</div>;
};
