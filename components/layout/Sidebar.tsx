"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  LayoutDashboard,
  MessageSquare,
  BookText,
  History,
  BarChart3,
  Settings
} from "lucide-react"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: `/dashboard`
  },
  {
    title: "AI Chat",
    icon: MessageSquare,
    path: "/chat"
  },
  {
    title: "Prompts",
    icon: BookText,
    path: "/prompts"
  },
  {
    title: "History",
    icon: History,
    path: "/history"
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/analytics"
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings"
  }
]

export default function Sidebar() {

  const pathname = usePathname()

  return (
    <div className="h-screen w-64 bg-zinc-900 text-white flex flex-col">
      <div className="p-6 text-xl font-bold border-b border-zinc-800">
        AI Dashboard
      </div>
      <nav className="flex-1 p-4 space-y-2">

        {menuItems.map((item) => {

          const Icon = item.icon
          const isActive = pathname === item.path

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition
              ${isActive ? "bg-blue-600" : "hover:bg-zinc-800"}`}
            >
              <Icon size={18}/>
              {item.title}
            </Link>
          )
        })}

      </nav>
      <div className="p-4 border-t border-zinc-800">

        <button className="w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700">
          New Chat
        </button>

      </div>

    </div>
  )
}
