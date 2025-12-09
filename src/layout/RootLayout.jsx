import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { useLoading } from "../context/LoadingContext";
import LoadingSpinner from "../components/LoadingSpinner";

const RootLayout = () => {
  const { loading } = useLoading();

  return (
    <div className="bg-gray-100 min-h-screen relative">
      {loading && <LoadingSpinner />}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
