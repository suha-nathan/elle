import React from 'react'

function Channel({ id, name, participants, onClick }) {

    function click(){
        onClick(id)
    }
    return (
        <div className="channel-item" onClick={()=>click()} >
            <div>{name}</div>
            <span>{participants}</span>
        </div>
    )
}

export default Channel
