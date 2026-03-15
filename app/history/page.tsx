import DashboardLayout from "@/components/layout/DashboardLayout"
import HistoryGroup from "@/components/history/HistoryGroup"

export default function HistoryPage() {

  return (

    <DashboardLayout>

      <h1 className="text-2xl font-bold mb-8">
        Chat History
      </h1>

      <HistoryGroup
        title="Today"
        items={[
          { title: "Fix React useEffect bug", time: "10:30 AM" },
          { title: "Generate blog content", time: "9:45 AM" }
        ]}
      />

      <HistoryGroup
        title="Yesterday"
        items={[
          { title: "Explain GraphQL basics", time: "5:20 PM" },
          { title: "Node.js debugging help", time: "3:10 PM" }
        ]}
      />

      <HistoryGroup
        title="Last Week"
        items={[
          { title: "Startup idea generator", time: "Mon" },
          { title: "AI marketing copy", time: "Sun" }
        ]}
      />

    </DashboardLayout>

  )

}
