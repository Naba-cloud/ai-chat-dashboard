import DashboardLayout from "@/components/layout/DashboardLayout"
import StatCard from "@/components/dashbaord/StatsCard"

export default function DashboardPage() {
  return (
    <DashboardLayout>

      <h1 className="text-2xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <StatCard
          title="Total Chats"
          value="124"
        />

        <StatCard
          title="Tokens Used"
          value="92K"
        />

        <StatCard
          title="Active Users"
          value="12"
        />

        <StatCard
          title="Saved Prompts"
          value="48"
        />

      </div>
      <div className="mt-10">

<h2 className="text-lg font-semibold mb-4">
Recent Conversations
</h2>

<div className="space-y-3">

<div className="p-4 bg-zinc-900 rounded-lg">
Debug React useEffect
</div>

<div className="p-4 bg-zinc-900 rounded-lg">
Generate marketing email
</div>

<div className="p-4 bg-zinc-900 rounded-lg">
Explain Node.js streams
</div>

</div>

</div>


    </DashboardLayout>
  )
}
