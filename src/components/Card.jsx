/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Card = ({ coffee, handleRemove }) => {

      const { pathname } = useLocation()
      const { id, name, image, category, origin, type, rating, popularity } = coffee || {};
      return (
            <div className="card bg-base-100 shadow-xl hover:scale-105 transition-transform relative">
                  <Link to={`/coffee/${id}`}>
                        <figure className="overflow-hidden rounded-tr-lg rounded-tl-lg">
                              <img
                                    src={image}
                                    alt={`${name} photo`}
                                    className="h-56 w-full object-cover" />
                        </figure>
                        <div className="card-body">
                              <h2 className="card-title">Name: {name}</h2>
                              <p>Category: {category}</p>
                              <p>Type: {type}</p>
                              <p>Origin: {origin}</p>
                              <p>Rating: {rating}</p>
                              <p>Popular: {popularity}</p>
                        </div>
                  </Link>
                  <div onClick={() => handleRemove(id)}>
                        {
                              pathname === '/dashboard' && <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center bg-warning cursor-pointer text-red-600">
                                    <MdDeleteForever size={22} />
                              </div>
                        }
                  </div>
            </div>
      );
};

export default Card;