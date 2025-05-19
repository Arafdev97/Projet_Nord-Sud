export default function Clients() {
    const clients = [
      { id: 1, nom: "Sabiou O.", ville: "Bassila", commandes: 3 },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Clients</h1>
        <table className="w-full bg-white shadow rounded-lg">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Nom</th>
              <th className="p-2 text-left">Ville</th>
              <th className="p-2 text-left">Commandes</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((c) => (
              <tr key={c.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{c.nom}</td>
                <td className="p-2">{c.ville}</td>
                <td className="p-2">{c.commandes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  