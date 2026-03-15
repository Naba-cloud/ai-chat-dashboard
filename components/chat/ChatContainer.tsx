"use client"

import { useState, useRef, useEffect } from "react"
import ChatMessage from "./ChatMessage"
import ChatInput from "./ChatInput"

export type Message = {
  role: "user" | "ai"
  content: string
}

export default function ChatContainer() {

  const [messages, setMessages] = useState<Message[]>([])
  const bottomRef = useRef<HTMLDivElement | null>(null)

  const handleSend = (text: string) => {

    const userMessage: Message = {
      role: "user",
      content: text
    }

    const aiMessage: Message = {
      role: "ai",
      content: `Here is a sample response.

\`\`\`javascript
function hello(){
 console.log("Hello world")
}
\`\`\`
`
    }

    setMessages(prev => [...prev, userMessage, aiMessage])
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (

    <div className="flex flex-col h-[90vh]">

      <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">

        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg}/>
        ))}

        <div ref={bottomRef}/>

      </div>

      <ChatInput onSend={handleSend}/>

    </div>

  )

}
