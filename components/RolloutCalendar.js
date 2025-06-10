export default function RolloutCalendar() {
  const rollouts = [
    { date: "2025-06-20", device: "25 Laptops – New Radiology Wing" },
    { date: "2025-07-01", device: "10 Tablets – Mobile Clinics" },
    { date: "2025-07-15", device: "3 Servers – IT Core Upgrade" },
  ]

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-semibold mb-2">Upcoming Device Rollouts</h2>
      <ul>
        {rollouts.map((item, idx) => (
          <li key={idx} className="border-b py-2">
            <strong>{item.date}</strong>: {item.device}
          </li>
        ))}
      </ul>
    </div>
  )
}
