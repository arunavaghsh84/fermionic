import Link from "next/link";
import { useEffect, useState } from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

const ViewMore = () => {
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname || "");
    }
  }, []);

  return (
    <div className="text-center">
      {currentPath === "/" ? (
        <Link
          className="inline-block rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
          href="/products"
        >
          View More
        </Link>
      ) : null}
    </div>
  );
};

export default ViewMore;
