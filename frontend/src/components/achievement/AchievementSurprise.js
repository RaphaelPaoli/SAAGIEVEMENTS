import React from 'react';
import PropTypes from 'prop-types';

const AchievementSurprise = ({ achievements, handleOpen }) => {
  const disable = achievements.filter(it => it.unlocked === false).length !== 0;

  function buttonDisable() {
    if (disable) {
      return (
        <button type="submit" className="sui-a-button as--primary" disabled>
          Locked
        </button>
      );
    }
    return (
      <button
        type="submit"
        onClick={handleOpen}
        className="sui-a-button as--primary"
      >
        Surpriiiiiise !
      </button>
    );
  }
  return (
    <>
      {buttonDisable()}
    </>
  );
};

AchievementSurprise.propTypes = {
  handleOpen: PropTypes.func.isRequired,
  achievements: PropTypes.array.isRequired,
};

export default AchievementSurprise;
