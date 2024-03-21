import React, { useState } from 'react';
import { serviceDropdown } from './Item';
import { Link } from 'react-router-dom';

function Dropdown() {
    const[dropdown, setDropdown] = useState(false);
  return (
    <ul className= "absolute mt-2 w-48 bg-white shadow-md rounded-lg" onClick={ () => setDropdown(!dropdown)}>
      {serviceDropdown.map((item) => (
        <li key={item.id} className="border-b last:border-b-0 border-gray-100"
          onMouseEnter={() => setDropdown(serviceDropdown.id)}
            onMouseLeave={() => setDropdown(null)}
            >
          <Link
            to={item.path}
            className={`${item.cName} block px-4 py-2 text-lg text-gray-700 hover:bg-indigo-500 hover:text-white transition duration-150 ease-in-out`}
            onClick={() => setDropdown(false)}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Dropdown;
