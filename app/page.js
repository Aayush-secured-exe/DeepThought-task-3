import ProfileHeader from "./components/ProfileHeader";
import Organization from "./components/organization/Organization";

export default function Home() {
  return (
    <main className="min-h-screen m-4">
      <ProfileHeader />
      <Organization />
    </main>
  );
}
