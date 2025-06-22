import Dashboard from "../components/Dashboard";
import TodoList from "../components/TodoList";
import RecentOrders from "../components/RecentOrders";
import CategorySlider from "../components/CategorySlider";
import TotalRevenue from "../components/TotalRevenue";
import TotalOrders from "../components/TotalOrders";
import TotalProducts from "../components/TotalProducts";
import TotalCustomers from "../components/TotalCustomers";
import TransactionsList from "../components/TransactionsList";
import BestSellingProducts from "../components/BestSellingProducts";

const Home = () => {
  return (
    <Dashboard>
      <div className={"page-body"}>
        <div className="container-fluid">
          <div className="row">
            <TotalRevenue />
            <TotalOrders />
            <TotalProducts />
            <TotalCustomers />
            <CategorySlider />
            <TransactionsList />
            <RecentOrders />
            <BestSellingProducts />
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default Home;
