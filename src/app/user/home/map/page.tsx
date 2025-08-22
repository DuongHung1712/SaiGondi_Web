import MapBox from "@/app/user/home/map/MapBox";

export default function UserHomeMapPage() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bản đồ TP.HCM</h1>
      <MapBox />
    </main>
  );
}
