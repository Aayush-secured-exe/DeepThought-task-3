import AllOrganizations from "./components/AllOrganizations/AllOrganizations";
import ProfileHeader from "./components/ProfileHeader";
import ProjectsAchievements from "./components/ProjectsAchievements/ProjectsAchievements";
import Memberships from "./components/memberships/Memberships";
import Organization from "./components/organization/Organization";

export default function Home() {
  return (
    <main className="min-h-screen md:m-4">
      <ProfileHeader />
      <ProjectsAchievements />
      <Organization />
      <Memberships />
      <AllOrganizations />
    </main>
  );
}
