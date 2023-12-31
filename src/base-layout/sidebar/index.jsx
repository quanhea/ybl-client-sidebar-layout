import { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Logo from '@/assets/logo.svg?react';
import BellIcon from '@/assets/icons/bell.svg?react';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg?react';
import ActivityIcon from '@/assets/icons/activity.svg?react';
import FolderIcon from '@/assets/icons/folder.svg?react';
import MoreHorizontalIcon from '@/assets/icons/more-horizontal.svg?react';
import MicIcon from '@/assets/icons/mic.svg?react';
import MenuIcon from '@/assets/icons/menu.svg?react';
import CloseIcon from '@/assets/icons/close.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import Tooltip from '@/common/tooltip';

const FOLDERS_PATH = '/dashboard/folders';
const ACTIVITY_PATH = '/dashboard/activities';

const navItems = [
  {
    path: ACTIVITY_PATH,
    icon: ActivityIcon,
    label: 'Activity',
  },
  {
    path: FOLDERS_PATH,
    icon: FolderIcon,
    label: 'Folders',
  },
];

const LogoNav = () => (
  <a href='/' aria-label='Go to homepage'>
    <Logo className='w-auto h-6 shrink-0' alt='Logo' />
  </a>
);

const NotificationsButton = () => (
  <button
    aria-label='Notifications'
    className='relative flex items-center justify-center bg-bg-decor-light-gray h-10 md:h-9 w-10 md:w-9 rounded-full p-0'
  >
    <BellIcon className='w-auto h-4' />
    <span className='block w-2 h-2 ring-2 ring-white absolute top-0 right-0 rounded-full bg-red-500'></span>
  </button>
);

const SearchBox = ({ expanded }) => (
  <Tooltip title='Search' position='right' disabled={expanded}>
    <div
      className={classNames(
        'h-11 px-[0.875rem] flex items-center gap-2 rounded-full transition-all ease-out text-sm border border-dashed border-border-lm-main',
      )}
    >
      <SearchIcon className='w-auto h-4' />
      {expanded && 'Area for search box'}
    </div>
  </Tooltip>
);

const NavLinks = ({ expanded }) => {
  // replace this with pathname from react-router-dom
  const [mockRouterPath, setMockRouterPath] = useState(ACTIVITY_PATH);

  return (
    <ul className='space-y-1'>
      {navItems.map((item) => {
        const { path, icon: Icon, label } = item;
        const isActive = mockRouterPath === path;
        return (
          <li key={path}>
            {/* replace this with Link from react-router-dom */}
            <Tooltip title={label} position='right' disabled={expanded}>
              <a
                href={path}
                onClick={(e) => {
                  e.preventDefault();
                  setMockRouterPath(path);
                }}
                className={classNames(
                  'relative h-11 px-[0.875rem] flex items-center justify-center md:justify-start gap-2 rounded-full transition-all ease-out text-sm',
                  isActive
                    ? 'bg-bg-decor-light-orange text-text-lm-link hover:text-text-lm-link'
                    : 'hover:bg-bg-decor-light-gray text-text-lm-subtitle hover:text-text-lm-subtitle',
                )}
              >
                <Icon className='hidden md:inline-block w-auto h-4' />
                {isActive && (
                  <span className='absolute -left-2.5 w-[3px] rounded-full h-[18px] bg-border-lm-highlight-1'></span>
                )}
                {expanded && label}
              </a>
            </Tooltip>
          </li>
        );
      })}
    </ul>
  );
};

const AccountSection = ({ expanded }) => {
  const avatarClasses =
    'flex items-center justify-center rounded-full shrink-0 bg-bg-decor-light-gray border border-border-lm-main text-text-lm-heading w-11 h-11';

  const handleToggleAccountMenu = () => {
    // replace with trigger menu
    alert('toggle profile settings');
  };

  return (
    <div className='flex items-center gap-2'>
      {expanded ? (
        <div className={avatarClasses}>LL</div>
      ) : (
        <Tooltip title='Account' position='right' disabled={expanded}>
          <button
            aria-label='Toggle account menu'
            className={avatarClasses}
            onClick={handleToggleAccountMenu}
          >
            LL
          </button>
        </Tooltip>
      )}
      {expanded && (
        <>
          <div className='grow'>
            <h3 className='font-semibold text-sm'>Lincoln Levin</h3>
            <p className='font-medium text-xs'>Software Engineer</p>
          </div>
          <button
            aria-label='Toggle account menu'
            className='p-1 bg-transparent'
            onClick={handleToggleAccountMenu}
          >
            <MoreHorizontalIcon className='w-auto h-5' />
          </button>
        </>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [desktopExpanded, setDesktopExpanded] = useState(true);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const handleToggleSidebarDesktop = () => {
    setDesktopExpanded(!desktopExpanded);
  };

  const handleToggleSidebarMobile = () => {
    setMobileExpanded(!mobileExpanded);
  };

  const handleLogout = () => {
    // replace with logout
    alert('logout');
  };

  return (
    <>
      <aside
        className={classNames(
          'hidden md:block col-start-1 row-start-1 mr-5 bg-bg-lm-white rounded-[30px] transition-all ease-out',
          desktopExpanded ? 'w-[16.25rem]' : 'w-[5.75rem]',
        )}
      >
        <div className='p-6 pb-3 flex justify-between items-center flex-wrap gap-5'>
          <LogoNav />
          <NotificationsButton />
        </div>
        <div className='relative'>
          <hr />
          <Tooltip
            className='-mr-3 -mt-3 float-right'
            title={desktopExpanded ? 'Collapse' : 'Expand'}
            position='right'
          >
            <button
              aria-label='Toggle sidebar'
              onClick={handleToggleSidebarDesktop}
              className={classNames(
                'flex items-center justify-center border-border-lm-main bg-bg-lm-white h-6 w-6 rounded-full p-0 transition-transform ease-out',
                { 'transform rotate-180': desktopExpanded },
              )}
            >
              <ArrowLeftIcon className='w-auto h-6' />
            </button>
          </Tooltip>
        </div>
        <div className='py-4 px-6'>
          <div>
            <AccountSection expanded={desktopExpanded} />
            <div className='mt-4'>
              <Tooltip
                title='New recording'
                position='right'
                disabled={desktopExpanded}
              >
                <button
                  aria-label='New recording'
                  className='flex gap-2 items-center justify-center h-11 w-full rounded-full text-text-dm-heading bg-bg-decor-primary font-normal text-sm'
                >
                  <MicIcon className='w-auto h-4 shrink-0' />
                  {desktopExpanded && 'New recording'}
                </button>
              </Tooltip>
            </div>
          </div>
          <hr className='my-4' />
          <div className='mb-3'>
            <SearchBox expanded={desktopExpanded} />
          </div>
          <NavLinks expanded={desktopExpanded} />
        </div>
      </aside>
      <nav className='md:hidden p-2 bg-bg-lm-white rounded-[30px] mb-7'>
        <div className='flex justify-between items-center'>
          <button
            aria-label='Expand navbar'
            onClick={handleToggleSidebarMobile}
            className={classNames(
              'flex items-center justify-center h-10 w-10 rounded-full p-0',
              mobileExpanded ? 'bg-bg-dm-black' : 'bg-bg-decor-light-gray',
            )}
          >
            {mobileExpanded ? (
              <CloseIcon className='w-auto h-[0.875rem]' />
            ) : (
              <MenuIcon className='w-auto h-4' />
            )}
          </button>
          <LogoNav />
          <NotificationsButton />
        </div>
        <div
          className={classNames(
            'overflow-hidden transition-[max-height] duration-300',
            mobileExpanded ? 'max-h-[999px]' : 'max-h-0',
          )}
        >
          <div className='mt-5 mb-3'>
            <SearchBox expanded />
          </div>
          <NavLinks expanded />
          <hr className='my-3' />
          <a
            href='#profile-settings'
            className='block w-full text-center px-6 py-4 text-sm text-text-lm-body hover:text-text-lm-link'
          >
            Profile &amp; Settings
          </a>
          <hr className='my-3' />
          <button
            href='#profile-settings'
            className='w-full text-center px-6 py-4 text-sm bg-transparent focus:outline-none hover:ring-0 border-none hover:text-text-lm-link'
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </nav>
    </>
  );
};

SearchBox.propTypes = {
  expanded: PropTypes.bool,
};

NavLinks.propTypes = {
  expanded: PropTypes.bool,
};

AccountSection.propTypes = {
  expanded: PropTypes.bool,
};

export default Sidebar;
