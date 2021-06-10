function ListIteration(props) {
  const numbers = [1, 2, 3, 4, 5];

  const listItems = numbers.map((num) => {
    return <li key={num.toString()}> {num} </li>
  })

  return <ul> {listItems} </ul>


  // return (
  //   <ul>
  //     {
  //       numbers.map((num) => { return <li> {num} </li> })
  //     }
  //   </ul>
  // )

}

export default ListIteration;