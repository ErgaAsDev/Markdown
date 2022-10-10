import React from 'react'

const Editor = (props) => {

    

  return (
    <div className="mx-auto flex justify-center">
        <textarea name="type" 
        value={props.valueType}
        onChange={props.textChange} 
        id="editor" rows="10" placeholder="Type Here" className="mt-3 w-[500px] bg-[whitesmoke] rounded"></textarea>
    </div>
  )
}

export default Editor