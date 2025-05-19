import { Button } from "../components/ui/Button";
import { MessageCircle, MailCheck } from "lucide-react";

const orders = [
  {
    id: 1,
    client: "Sabiou O.",
    ville: "Cotonou",
    destination: "Djougou",
    service: "Achat de téléphone",
    status: "en attente",
    tel: "22997123456",
    email: "sabiou@example.com"
  },
];

export default function Orders() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Commandes</h1>
      {orders.map((order) => (
        <div key={order.id} className="bg-white p-4 rounded-xl shadow flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <p className="font-semibold">{order.client} - {order.service}</p>
            <p className="text-sm text-gray-500">{order.ville} → {order.destination}</p>
            <p className="text-sm text-gray-500">Statut: <span className="font-bold">{order.status}</span></p>
          </div>
          <div className="flex gap-2 mt-2 sm:mt-0">
            <Button as="a" href={`https://wa.me/${order.clientPhone}`} target="_blank" rel="noreferrer">
              <MessageCircle className="w-4 h-4 mr-1" />
              Répondre via WhatsApp
            </Button>


            <a href={`mailto:${order.email}?subject=Commande Nord-Sud&body=Bonjour ${order.client}, votre commande est en cours.`}>
              <Button variant="outline"><MailCheck className="mr-2 h-4 w-4" /> Email</Button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
