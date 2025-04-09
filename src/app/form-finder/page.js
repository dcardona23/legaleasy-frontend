import TopNavBar from "@/app/components/NavBar";
import DashboardFooter from "../components/DashboardFooter";
import FormFinderCard from "../components/FormFinderCard";

function formFinder() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <TopNavBar />
      <FormFinderCard />
      <DashboardFooter />
    </div>
  )
}

export default formFinder;