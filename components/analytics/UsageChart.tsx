"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { day: "Mon", chats: 12 },
  { day: "Tue", chats: 18 },
  { day: "Wed", chats: 9 },
  { day: "Thu", chats: 22 },
  { day: "Fri", chats: 17 },
  { day: "Sat", chats: 25 },
  { day: "Sun", chats: 14 }
]

export default function UsageChart() {

  return (

    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">

      <h3 className="mb-4 font-semibold">
        Chats Per Day
      </h3>

      <ResponsiveContainer width="100%" height={250}>

        <LineChart data={data}>

          <XAxis dataKey="day" stroke="#888"/>
          <YAxis stroke="#888"/>
          <Tooltip />

          <Line
            type="monotone"
            dataKey="chats"
            stroke="#3b82f6"
            strokeWidth={2}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  )

}
