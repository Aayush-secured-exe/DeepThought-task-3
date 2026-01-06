import AllOrganizations from "./components/AllOrganizations/AllOrganizations";
import ProfileHeader from "./components/ProfileHeader";
import Memberships from "./components/memberships/Memberships";
import Organization from "./components/organization/Organization";

export default function Home() {
  return (
    <main className="min-h-screen md:m-4">
      <ProfileHeader />
      <Organization />
      <Memberships />
      <AllOrganizations/>
    </main>
  );
}
