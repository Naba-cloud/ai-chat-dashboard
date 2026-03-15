"use client"

import { useState } from "react"

export default function ChatInput({
  onSend
}:{
  onSend:(text:string)=>void
}){

  const [text,setText] = useState("")

  const handleSend = () => {

    if(!text.trim()) return

    onSend(text)
    setText("")
  }

  const handleKeyDown = (e:any)=>{
    if(e.key === "Enter" && !e.shiftKey){
      e.preventDefault()
      handleSend()
    }
  }

  return (

    <div className="border-t border-zinc-800 p-4">

      <div className="flex items-center gap-3 bg-zinc-900 rounded-xl border border-zinc-700 px-4 py-2">

        <textarea
          value={text}
          rows={1}
          onKeyDown={handleKeyDown}
          onChange={(e)=>setText(e.target.value)}
          placeholder="Message AI..."
          className="flex-1 bg-transparent outline-none resize-none"
        />

        <button
          onClick={handleSend}
          className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>

      </div>

    </div>

  )

}
