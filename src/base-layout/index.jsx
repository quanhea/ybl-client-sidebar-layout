import classNames from 'classnames';
import Navbar from './navbar';
import PropTypes from 'prop-types';
import Sidebar from './sidebar';

const BaseLayout = ({ hasSidebar }) => {
  console.log(hasSidebar);

  return (
    <div className='overflow-hidden bg-bg-decor-light-gray p-5 min-h-screen w-screen text-text-lm-body'>
      <div
        className={classNames('container mx-auto', {
          'md:grid grid-cols-[auto,1fr] grid-rows-[1fr,auto]': hasSidebar,
        })}
      >
        {hasSidebar ? <Sidebar /> : <Navbar />}
        <main
          className={classNames('grow bg-bg-lm-white rounded-[30px] h-[78vh]', {
            'md:col-start-2 md:row-span-1 md:h-[90vh]': hasSidebar,
          })}
        >
          Main
        </main>
        <footer
          className={classNames('text-center mt-5 text-sm text-text-lm-note', {
            'md:col-span-2 md:row-start-2': hasSidebar,
          })}
        >
          Copyright © 2023 YBL. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

BaseLayout.propTypes = {
  hasSidebar: PropTypes.bool,
};

export default BaseLayout;
