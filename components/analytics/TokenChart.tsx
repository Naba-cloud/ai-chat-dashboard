"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { day: "Mon", tokens: 2000 },
  { day: "Tue", tokens: 3500 },
  { day: "Wed", tokens: 1800 },
  { day: "Thu", tokens: 4200 },
  { day: "Fri", tokens: 3100 },
  { day: "Sat", tokens: 5000 },
  { day: "Sun", tokens: 2600 }
]

export default function TokenChart(){

return(

<div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800">

<h3 className="mb-4 font-semibold">
Token Usage
</h3>

<ResponsiveContainer width="100%" height={250}>

<BarChart data={data}>

<XAxis dataKey="day" stroke="#888"/>
<YAxis stroke="#888"/>
<Tooltip />

<Bar dataKey="tokens" fill="#10b981"/>

</BarChart>

</ResponsiveContainer>

</div>

)

}
