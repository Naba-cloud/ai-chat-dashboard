import DashboardLayout from "@/components/layout/DashboardLayout"
import UsageChart from "@/components/analytics/UsageChart"
import TokenChart from "@/components/analytics/TokenChart"
import StatCard from "@/components/dashbaord/StatsCard"

export default function AnalyticsPage(){

return(

<DashboardLayout>

<h1 className="text-2xl font-bold mb-8">
Analytics
</h1>

{/* stats */}

<div className="grid grid-cols-4 gap-6 mb-10">

<StatCard title="Total Chats" value="124"/>
<StatCard title="Tokens Used" value="92K"/>
<StatCard title="Avg Response" value="1.3s"/>
<StatCard title="Active Users" value="12"/>

</div>

{/* charts */}

<div className="grid grid-cols-2 gap-6">

<UsageChart/>
<TokenChart/>

</div>

</DashboardLayout>

)

}
