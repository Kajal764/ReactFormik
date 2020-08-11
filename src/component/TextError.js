import React from 'react'

function TextError(props) {
    return (
        <div className='error'>
            {props.children}
            {/* {props.children} // means message that we are passing from parent  */}
        </div>
    )
}

export default TextError
