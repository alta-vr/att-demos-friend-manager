import React from 'react';

import { useAuth, LoginButton } from '../AltaAuth';



function Header()
{
    return <div style={{display: 'flex', alignItems:'center',  justifyContent: 'space-between', width: '100%', height: '60px', position: 'absolute', top:'0', left:'0'}}>
        <h2 style={{margin: '0', height:'50px', lineHeight:'50px', marginLeft: '20px', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>ATT Friend Manager</h2>
        {<LoginButton style={{marginRight: '20px'}}/>}
    </div>
}

function Friend({username, id, created_at} : {username:String, id:number, created_at:string})
{
    return <div>
        <b>{username}</b><br/>
        <code>Friends since {new Date(created_at).toDateString()}</code>
        <br/>
        <br/>
    </div>
}

export default function Home() 
{
    var auth = useAuth();

    var [friends, setFriends] = React.useState<undefined|any[]>();
    var [error, setError] = React.useState<undefined|any>();

    React.useEffect(() =>
    {
        setError(undefined);

        auth?.fetch('GET', 'friends')
        .then(setFriends)
        .catch(setError);
    },
    [auth?.userData?.profile.sub])


    if (!auth?.userData)
    {
        return <div>
            <Header/>
            <h4>Login to manage your friends</h4>
        </div>
    }

  return (
    <div>
        <Header/>
        {friends === undefined ? <p>Loading...</p> : (friends?.length == 0 ? "No friends" : friends.map((friend, i) => <Friend {...friend} key={i}/>))}
    </div>
  );
}