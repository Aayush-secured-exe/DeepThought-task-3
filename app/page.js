import Image from "next/image";
import ProfileHeader from "./components/ProfileHeader";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <ProfileHeader />
    </main>
  );
}
