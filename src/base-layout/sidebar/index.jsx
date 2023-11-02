import { useState } from 'react';
import classNames from 'classnames';

import Logo from '@/assets/logo.svg?react';
import BellIcon from '@/assets/icons/bell.svg?react';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg?react';
import ActivityIcon from '@/assets/icons/activity.svg?react';
import FolderIcon from '@/assets/icons/folder.svg?react';
import MoreHorizontalIcon from '@/assets/icons/more-horizontal.svg?react';
import MicIcon from '@/assets/icons/mic.svg?react';

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

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  // replace this with pathname from react-router-dom
  const [mockRouterPath, setMockRouterPath] = useState(ACTIVITY_PATH);

  const handleToggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <aside
      className={classNames(
        'col-start-1 row-start-1 mr-5 bg-bg-lm-white rounded-[30px] transition-all ease-out',
        expanded ? 'w-[16.25rem]' : 'w-[5.75rem]',
      )}
    >
      <div className='p-6 pb-3 flex justify-between items-center flex-wrap gap-5'>
        <Logo className='w-auto h-6 shrink-0' />
        <button
          aria-label='Notifications'
          className='relative flex items-center justify-center bg-bg-decor-light-gray h-9 w-9 rounded-full p-0'
        >
          <BellIcon className='w-auto h-4' />
          <span className='block w-2 h-2 ring-2 ring-white absolute top-0 right-0 rounded-full bg-red-500'></span>
        </button>
      </div>
      <div className='relative'>
        <hr />
        <button
          aria-label='Expand sidebar'
          onClick={handleToggleSidebar}
          className={classNames(
            '-mt-3 float-right flex items-center justify-center border-border-lm-main bg-bg-lm-white h-6 w-6 rounded-full p-0 transition-transform ease-out',
            expanded ? '-mr-2.5' : 'transform rotate-180 -mr-3',
          )}
        >
          <ArrowLeftIcon className='w-auto h-6' />
        </button>
      </div>
      <div className='py-4 px-6'>
        <div>
          <div className='flex items-center gap-2'>
            <div className='flex items-center justify-center rounded-full shrink-0 bg-bg-decor-light-gray border border-border-lm-main text-text-lm-heading w-11 h-11'>
              LL
            </div>
            {expanded && (
              <>
                <div className='grow'>
                  <h3 className='font-semibold text-sm'>Lincoln Levin</h3>
                  <p className='font-medium text-xs'>Software Engineer</p>
                </div>
                <button
                  aria-label='More profile options'
                  className='p-1 bg-transparent'
                >
                  <MoreHorizontalIcon className='w-auto h-5' />
                </button>
              </>
            )}
          </div>
          <div className='mt-4'>
            <button className='flex gap-2 items-center justify-center h-11 w-full rounded-full text-text-dm-heading bg-bg-decor-primary font-normal text-sm'>
              <MicIcon className='w-auto h-4 shrink-0' />
              {expanded && 'New recording'}
            </button>
          </div>
        </div>
        <hr className='my-4' />
        <ul className='space-y-1'>
          {navItems.map((item) => {
            const { path, icon: Icon, label } = item;
            const isActive = mockRouterPath === path;
            return (
              <li key={path}>
                {/* replace this with Link from react-router-dom */}
                <a
                  href={path}
                  onClick={(e) => {
                    e.preventDefault();
                    setMockRouterPath(path);
                  }}
                  className={classNames(
                    'h-11 px-[0.875rem] flex items-center gap-2 rounded-full transition-all ease-out text-sm',
                    isActive
                      ? 'bg-bg-decor-light-orange text-text-lm-link hover:text-text-lm-link'
                      : 'hover:bg-bg-decor-light-gray text-text-lm-subtitle hover:text-text-lm-subtitle',
                  )}
                >
                  <Icon className='w-auto h-4' />
                  {expanded && label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
