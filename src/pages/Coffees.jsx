import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";

const Coffees = () => {
      const data = useLoaderData();
      const [coffees, setCoffees] = useState(data);
      const handleSort = sortBy => {
            if (sortBy === 'popularity') {
                  // Sort by popularity...
                  const sorted = [...data].sort((a, b) => b.popularity - a.popularity)
                  setCoffees(sorted)
            } else {
                  // Sort by rating...
                  const sorted = [...data].sort((a, b) => b.rating - a.rating)
                  setCoffees(sorted)
            }
      }

      return (
            <>
                  <div className="flex items-center justify-between">
                        <div>
                              <h1 className="text-3xl font-semibold">Sort Coffee&apos;s by Popularity & Rating-&gt;</h1>
                        </div>
                        <div className="space-x-4">
                              <button onClick={() => handleSort('popularity')} className="btn btn-warning capitalize">Sort by popularity</button>
                              <button onClick={() => handleSort('rating')} className="btn btn-warning capitalize">Sort by rating</button>
                        </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 py-12">
                        {
                              coffees.map(coffee => <Card key={coffee.id} coffee={coffee} />)
                        }
                  </div>
            </>
      );
};

export default Coffees;