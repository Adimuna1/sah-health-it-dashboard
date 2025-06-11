'use client'

import InventoryCard from '../components/InventoryCard'
import TicketList from '../components/TicketList'
import RolloutCalendar from '../components/RolloutCalendar'

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">SAH Health IT Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InventoryCard />
        <TicketList />
        <RolloutCalendar />
      </div>
    </div>
  )
}
