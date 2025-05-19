import StatsCard from "./StatsCardAdmin";

export default function HomeAdmin() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Tableau de bord</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <StatsCard title="Total Commandes" value="152" />
        <StatsCard title="Commandes en attente" value="37" />
        <StatsCard title="Clients actifs" value="89" />
      </div>
    </div>
  );
}
