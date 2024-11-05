/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
      return (
            <div role="tablist" className="tabs tabs-lifted">
                  {
                        categories.map(category =>
                              <NavLink to={`/category/${category.category}`}
                                    key={category.category} role="tab"
                                    className={
                                          ({ isActive }) => `tab font-semibold text-lg ${isActive && 'tab-active text-slate-600'}`
                                    }>
                                    {category.category}
                              </NavLink>)
                  }
            </div>
      );
};

export default Categories;