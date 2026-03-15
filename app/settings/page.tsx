"use client"

import { useState } from "react"
import DashboardLayout from "@/components/layout/DashboardLayout"
import SettingSection from "@/components/settings/SettingSection"

export default function SettingsPage(){

const [model,setModel] = useState("gpt-4")
const [temperature,setTemperature] = useState(0.7)
const [tokens,setTokens] = useState(2048)
const [stream,setStream] = useState(true)

return(

<DashboardLayout>

<h1 className="text-2xl font-bold mb-8">
Settings
</h1>

<div className="space-y-6 max-w-xl">


<SettingSection title="AI Model">

<select
value={model}
onChange={(e)=>setModel(e.target.value)}
className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 w-full"
>

<option value="gpt-4">GPT-4</option>
<option value="gpt-3.5">GPT-3.5</option>
<option value="claude">Claude</option>

</select>

</SettingSection>

{/* temperature */}

<SettingSection title="Temperature">

<input
type="range"
min="0"
max="1"
step="0.1"
value={temperature}
onChange={(e)=>setTemperature(Number(e.target.value))}
className="w-full"
/>

<p className="text-sm text-zinc-400 mt-2">
Current: {temperature}
</p>

</SettingSection>

{/* max tokens */}

<SettingSection title="Max Tokens">

<input
type="number"
value={tokens}
onChange={(e)=>setTokens(Number(e.target.value))}
className="bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 w-full"
/>

</SettingSection>

{/* streaming */}

<SettingSection title="Enable Streaming">

<label className="flex items-center gap-3">

<input
type="checkbox"
checked={stream}
onChange={()=>setStream(!stream)}
/>

<span>
Stream AI responses
</span>

</label>

</SettingSection>

<button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700">

Save Settings

</button>

</div>

</DashboardLayout>

)

}
