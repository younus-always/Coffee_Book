import Heading from "../components/Heading";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {

      const categories = useLoaderData();

      return (
            <>
                  {/* Banner Image */}
                  <Hero />
                  {/* Heading */}
                  <Heading title='Browse Cooffees by Category'
                        subtitle='Choose your desire coffee category to brows through specific coffees that fit in your taste' />
                  {/* Category Tabs */}
                  <Categories categories={categories} />
                  {/* Dynamic Nested Components */}
                  <Outlet />
            </>
      );
};

export default Home;