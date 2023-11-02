import classNames from "classnames";
import Navbar from "./navbar";
import PropTypes from "prop-types";
import Sidebar from "./sidebar";

const BaseLayout = ({ hasSidebar }) => {
  console.log(hasSidebar);

  return (
    <div className="bg-bg-decor-light-gray p-5 min-h-screen w-screen text-text-lm-body">
      <div
        className={classNames(
          "container mx-auto",
          hasSidebar
            ? "grid grid-cols-[auto,1fr] grid-rows-[1fr,auto]"
            : "flex flex-col"
        )}
      >
        {hasSidebar ? <Sidebar /> : <Navbar />}
        <main
          className={classNames(
            "grow bg-bg-lm-white rounded-[30px] h-[78vh] mb-5",
            {
              "col-start-2 row-span-1": hasSidebar,
            }
          )}
        >
          Main
        </main>
        <footer
          className={classNames("text-center", {
            "col-span-2 row-start-2": hasSidebar,
          })}
        >
          Footer
        </footer>
      </div>
    </div>
  );
};

BaseLayout.propTypes = {
  hasSidebar: PropTypes.bool,
};

export default BaseLayout;
