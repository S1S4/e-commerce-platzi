import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-3';

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full top-0 py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-4">
                <li className="font-semibold text-lg">
                    <NavLink to="/">
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/all"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/clothes"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/electronics"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/furnitures"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/toys"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/others"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-4">
                <li className="text-black/70">
                    myEmail@EEEE.com
                </li>
                <li>
                    <NavLink to="/my-orders">
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account">
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sign-in">
                        Sign In
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        🛒 {context.count}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;