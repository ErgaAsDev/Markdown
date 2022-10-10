import React from 'react'
// let marked = require("marked");
import { useRef } from 'react'

marked.setOptions({
  breaks: true
})

const renderer = new marked.Renderer();

const Text = (props) => {
  

  return (
    <div id="preview"
    dangerouslySetInnerHTML={{
      __html: marked(props.valueType, { renderer: renderer }),
    }}
    className="mx-auto w-[500px] mt-5 bg-[skyblue] rounded">
        
    </div>
  )
}

export default Text