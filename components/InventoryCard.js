export default function InventoryCard() {
    const diagnostics = [
      { name: "MRI Machine", status: "Operational", quantity: 3 },
      { name: "X-Ray Scanner", status: "Needs Service", quantity: 1 },
      { name: "Blood Analyzer", status: "Operational", quantity: 5 },
    ]
  
    return (
      <div className="bg-white shadow-md rounded p-4">
        <h2 className="text-lg font-semibold mb-2">Diagnostic Inventory</h2>
        <ul>
          {diagnostics.map((item, idx) => (
            <li key={idx} className="border-b py-2">
              <strong>{item.name}</strong> — {item.status} ({item.quantity})
            </li>
          ))}
        </ul>
      </div>
    )
  }
  