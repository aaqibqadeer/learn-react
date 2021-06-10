function Greetings(user) {
    //return user.firstName + ' ' + user.lastName
    if(user.firstName==='Aqib') {
      return <h3> {user.firstName + ' ' + user.lastName} </h3>
    }
    else {
      return <h1> {user.firstName + ' ' + user.lastName} </h1>
    }
}

const user = {
  firstName: 'Aqib',
  lastName: 'Qadeer'
}

function GreetUser() {
  
  return (
    Greetings(user)
    // <h3> {Greetings(user)} </h3>
  )
}




export default GreetUser