import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import { getAllFavorite, removeFavorite } from "../utilities/utilities";
import Card from "../components/Card";


const Dashboard = () => {

      const [coffees, setCoffees] = useState([])
      useEffect(() => {
            // get all previously saved item of local storage
            const favorites = getAllFavorite()
            setCoffees(favorites)
      }, [])

      const handleRemove = id => {
            removeFavorite(id)
            // get all previously saved item of local storage
            const favorites = getAllFavorite()
            setCoffees(favorites)
      }

      return (
            <>
                  <Heading title='Welcome to Dashboard'
                        subtitle='Manage coffees that you have previously added as favorite. You can view or remove them from here.' />

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 py-12">
                        {
                              coffees.map(coffee => <Card key={coffee.id} coffee={coffee} handleRemove={handleRemove} />)
                        }
                  </div>
            </>
      );
};

export default Dashboard;