"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import ThemeToggler from "./ThemeToggler";
// import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [productMenuItems, setProductMenuItems] = useState([]);
  const [siliconMenuItems, setSiliconMenuItems] = useState([]);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  useEffect(() => {
    fetchProducts();
    fetchSiliconIPs();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");

    if (res.ok) {
      const data = await res.json();
      
      // const menu = menuItems.find((item) => item.id === 2);
      // menu.submenu = data.map(({ _id, name }) => {
      //   return {
      //     id: _id,
      //     title: name,
      //     path: `/products/${_id}`,
      //     newTab: false,
      //   };
      // });

      setProductMenuItems(data);
    } else {
      console.error("Error fetching products");
    }
  };

  const fetchSiliconIPs = async () => {
    const res = await fetch("/api/siliconIPs");

    if (res.ok) {
      const data = await res.json();

      // const menu = menuItems.find((item) => item.id === 3);
      // menu.submenu = data.map(({ _id, name }) => {
      //   return {
      //     id: _id,
      //     title: name,
      //     path: `/siliconIPs/${_id}`,
      //     newTab: false,
      //   };
      // });

      setSiliconMenuItems(data);
    } else {
      console.error("Error fetching products");
    }
  };

  return (
    <>
      <header className="fixed left-0 right-0 z-[9999] bg-white shadow-sm dark:bg-gray-dark dark:shadow-sticky-dark">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-36 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo lg:py-2" } block w-full
                py-2 `}
              >
                <Image
                  src="/images/logo/logo-2.png"
                  alt="logo"
                  width={120}
                  height={30}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={120}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-end px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-8">
                    <li className="group relative">
                      <Link
                        href="/"
                        className={`flex py-2 text-sm lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                          usePathName === "/"
                            ? "text-primary dark:text-white"
                            : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        Home
                      </Link>
                    </li>

                    <li className="group relative">
                      <p
                        className="flex cursor-pointer items-center justify-between py-2 text-sm text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                      >
                        Product
                        <span className="pl-3">
                          <svg width="25" height="24" viewBox="0 0 25 24">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </p>
                      <div
                        className={`submenu relative left-0 top-full hidden rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full`}
                      >
                        {(productMenuItems).map((menu) => (
                          <Link
                            key={menu._id}
                            href={`/products/${menu._id}`}
                            className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                          >
                            {menu.name}
                          </Link>
                        ))}
                      </div>
                    </li>

                    <li className="group relative">
                      <p
                        className="flex cursor-pointer items-center justify-between py-2 text-sm text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                      >
                        Silicon IP
                        <span className="pl-3">
                          <svg width="25" height="24" viewBox="0 0 25 24">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </p>
                      <div
                        className={`submenu relative left-0 top-full hidden rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full`}
                      >
                        {(siliconMenuItems).map((menu) => (
                          <Link
                            key={menu._id}
                            href={`/siliconIPs/${menu._id}`}
                            className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                          >
                            {menu.name}
                          </Link>
                        ))}
                      </div>
                    </li>

                    <li className="group relative">
                      <p
                        className="flex cursor-pointer items-center justify-between py-2 text-sm text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                      >
                        Company
                        <span className="pl-3">
                          <svg width="25" height="24" viewBox="0 0 25 24">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </p>
                      <div
                        className={`submenu relative left-0 top-full hidden rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full`}
                      >
                        <Link
                          href="/about"
                          className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                        >
                          About Us
                        </Link>
                        <Link
                          href="/leadership"
                          className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                        >
                          Leadership
                        </Link>
                        <Link
                          href="/career"
                          className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                        >
                          Career
                        </Link>
                      </div>
                    </li>

                    <li className="group relative">
                      <Link
                        href="/blogs"
                        className={`flex py-2 text-sm lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                          usePathName === "/blogs"
                            ? "text-primary dark:text-white"
                            : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        Blogs
                      </Link>
                    </li>

                    <li className="group relative">
                      <Link
                        href="/contact"
                        className={`flex py-2 text-sm lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                          usePathName === "/contact"
                            ? "text-primary dark:text-white"
                            : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
