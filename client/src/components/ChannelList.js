import React from 'react'
import Channel from './Channel'

function ChannelList( {channels, onSelectChannel} ) {

    function handleClick(id){
        onSelectChannel(id)
    }

    return (
        <div channel-list>

           { channels?.map((c,idx) => (
            <Channel 
                key={idx}   
                id={c.id} 
                name={c.name} 
                participants={c.participants} 
                onClick={handleClick}/>
            ))
            }

        </div>
    )
}

export default ChannelList
