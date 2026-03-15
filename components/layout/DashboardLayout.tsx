
import Sidebar from "./Sidebar"

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (

    <div className="flex">

      <Sidebar />

      <main className="flex-1 bg-zinc-950 min-h-screen text-white p-6">
        {children}
      </main>

    </div>

  )

}
