import AllOrganizations from "./components/AllOrganizations/AllOrganizations";
import ProfileHeader from "./components/ProfileHeader";
import Memberships from "./components/memberships/Memberships";
import Organization from "./components/organization/Organization";

export default function Home() {
  return (
    <main className="min-h-screen m-4">
      <ProfileHeader />
      <Organization />
      <Memberships />
      <AllOrganizations/>
    </main>
  );
}
