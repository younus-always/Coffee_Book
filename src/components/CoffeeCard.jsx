
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCard = () => {
      const navigate = useNavigate();
      const { category } = useParams();
      const data = useLoaderData();
      const [coffees, setCoffees] = useState([]);

      useEffect(() => {
            if (category) {
                  const filterByCoffee = [...data].filter(coffee => coffee.category === category)
                  setCoffees(filterByCoffee)
            } else {
                  setCoffees(data.slice(0, 6))
            }
      }, [data, category])

      return (
            <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 py-12">
                        {
                              coffees.map(coffee => <Card key={coffee.id} coffee={coffee} />)
                        }
                  </div>
                  <button onClick={() => navigate('/coffees')} className="btn btn-warning">View All</button>
            </>
      );
};

export default CoffeeCard;