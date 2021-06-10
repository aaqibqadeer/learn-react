function ConditionalRendering(props) {
  if(props.condition === 'true') { //condition type # 1
    return (
      <div>
        <h1>{props.inline==='true'? 'Inline is enabled': 'Inline is disabled' }</h1> {/*condition type # 2*/}
        {/*condition type # 3*/}
        { props.inline === 'true' &&
          <p>Inline Expression and Logical && Operator</p>
        }
      </div>
    )
  } 
  else {
    return <p>condition false</p>
  }
  
}

export default ConditionalRendering