export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-3xl font-bold text-primary mt-2">{value}</h2>
    </div>
  );
}
