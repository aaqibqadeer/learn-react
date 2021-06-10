import ChildComponent from "./ChildComponent";

export default function ParentComponent(props) {
  return(
    <div>
      <h1>Parent Component</h1>
      <ChildComponent/>
    </div>
  )
}