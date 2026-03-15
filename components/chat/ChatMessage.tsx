import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Message } from "./ChatContainer"

export default function ChatMessage({ message }: { message: Message }) {

  const isUser = message.role === "user"

  return (

    <div className={`flex gap-4 ${isUser ? "justify-end" : ""}`}>

      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm">
          AI
        </div>
      )}

      <div
        className={`max-w-2xl rounded-lg px-4 py-3
        ${isUser
          ? "bg-blue-600 text-white"
          : "bg-zinc-800 text-white"
        }`}
      >

        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {message.content}
        </ReactMarkdown>

      </div>

      {isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm">
          U
        </div>
      )}

    </div>

  )

}
