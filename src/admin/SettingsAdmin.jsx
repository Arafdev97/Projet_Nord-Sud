export default function Settings() {
    return (
      <div className="p-6 max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Paramètres</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Nom de l'admin</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="ABDOULAYE Arafath" />
          </div>
          <div>
            <label className="block mb-1">Numéro WhatsApp</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="2290197785744" />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded" placeholder="admin@nordsud.bj" />
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded">Sauvegarder</button>
        </form>
      </div>
    );
  }
  