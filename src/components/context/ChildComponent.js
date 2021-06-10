import { useContext } from 'react';
import { ThemeContext } from "../../App";

export default function ChildComponent() {
  const context = useContext(ThemeContext);
  return(
    <div>
      <h1>Child Component</h1>
      <h3>Theme is: { context } </h3>
    </div>
  )
}