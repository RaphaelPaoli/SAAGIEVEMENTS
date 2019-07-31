import React from 'react';
import PropTypes from 'prop-types';

const AchievementPopUp = ({ handleClose, show }) => {
  const showHideClassName = show
    ? 'sui-o-popup as--open'
    : 'sui-o-popup as--closed';

  return (
    <div className={showHideClassName}>
      <div className="sui-o-popup__title">Hire me ?! :D</div>
      <div className="sui-o-popup__content">
        This action can t be undone!
      </div>
      <div className="sui-o-popup__buttons">
        <button type="submit" onClick={handleClose} className="sui-a-button">Yes</button>
        <button type="submit" onClick={handleClose} className="sui-a-button as--primary">Yes in blue</button>
      </div>
    </div>
  );
};
AchievementPopUp.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default AchievementPopUp;
