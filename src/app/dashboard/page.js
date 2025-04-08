import TopNavBar from "@/app/components/NavBar";
import DashboardFooter from "../components/DashboardFooter";
import HeroSection from "../components/HeroSection";
import PopularForms from "../components/PopularForms";
import QuickActions from "../components/QuickActions";

function Dashboard() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <TopNavBar />
      <HeroSection />
      <PopularForms />
      <QuickActions />
      <DashboardFooter />
    </div>
  );
}

export default Dashboard;