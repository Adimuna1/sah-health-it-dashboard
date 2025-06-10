export default function TicketList() {
  const tickets = [
    { id: 101, issue: "Wi-Fi not working", status: "Open" },
    { id: 102, issue: "Printer offline", status: "Resolved" },
    { id: 103, issue: "Email sync error", status: "Escalated" },
  ]

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-semibold mb-2">IT Support Tickets</h2>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id} className="border-b py-2">
            #{ticket.id}: {ticket.issue} — <span className="font-medium">{ticket.status}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
