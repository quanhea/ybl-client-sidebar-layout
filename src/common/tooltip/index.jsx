import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tooltip = ({
  title,
  position,
  children,
  className,
  disabled = false,
}) => {
  const tooltipPositions = {
    right:
      'right-0 top-1/2 transform translate-x-[calc(100%_+_0.5rem)] -translate-y-1/2',
  };
  const tailPositions = {
    right: 'left-0 top-1/2 transform -translate-x-full -translate-y-1/2',
  };

  const tooltipPosition =
    tooltipPositions[position] || tooltipPositions['right'];
  const tailPosition = tailPositions[position] || tailPositions['right'];

  if (disabled) return children;

  return (
    <div className={classNames('relative group', className)}>
      {children}
      <div
        className={classNames(
          'hidden group-hover:block absolute bg-bg-dm-overlay text-text-dm-body text-xs rounded-md py-1 px-2.5 max-w-xs whitespace-nowrap',
          tooltipPosition,
        )}
      >
        {title}
        <div
          className={classNames(
            'absolute border-[4px] border-transparent border-r-bg-dm-overlay',
            tailPosition,
          )}
        ></div>
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  title: PropTypes.string,
  position: PropTypes.oneOf(['right']),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Tooltip;
