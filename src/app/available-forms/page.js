import TopNavBar from "@/app/components/NavBar";
import DashboardFooter from "../components/DashboardFooter";

function availableForms() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <TopNavBar />
      <DashboardFooter />
    </div>
  )
}

export default availableForms;