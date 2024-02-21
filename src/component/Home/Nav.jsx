
const Nav = () => {
    return (
        <nav className="   dark:bg-gray-900 fixed w-full z-20 h-[200px]  border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="../src/assets/Group 1330.png" className="w-[130px] h-[70px]" alt="Flowbite Logo" />
                    <input
                        type="text"
                        id="search-navbar"
                        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-none focus:ring-blue-500 focus:border-blue-500 dark:bg-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search..."
                        style={{
                            width: "100%",
                            padding: "0.5rem",
                            paddingLeft: "2.5rem", // Equivalent to ps-10 in Tailwind CSS
                            fontSize: "0.875rem", // Equivalent to text-sm in Tailwind CSS
                            color: "#4B5563", // Equivalent to text-gray-900 in Tailwind CSS
                            borderWidth: "1px", // Equivalent to border in Tailwind CSS
                            borderRadius: "0.375rem", // Equivalent to rounded-lg in Tailwind CSS
                            backgroundColor: "none", // Set background color to none
                            outline: "none", // Equivalent to focus:ring-blue-500 and focus:border-blue-500 in Tailwind CSS
                            transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out", // Equivalent to focus:ring-blue-500 and focus:border-blue-500 in Tailwind CSS
                        }}
                    />
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-black bg-[#F9A51A] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-none md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-none dark:bg-none md:dark:bg-none dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">New</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Destination</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;