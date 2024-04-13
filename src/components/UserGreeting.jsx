
function UserGreetings(props)
{
   return ( props.isLoggedIn ? <h2>Welcome {props.name} you are Logged In </h2> :
                    <h2>Please Log In</h2>);
}

export default UserGreetings