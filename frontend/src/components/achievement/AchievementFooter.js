import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AchievementPopUp from './AchievementPopUp';
import AchievementSurprise from './AchievementSurprise';
import AchievementLockButton from './AchievementLockButton';
import AchievementStepIndicator from './AchievementStepIndicator';

const AchievementFooter = ({ achievements = [] }) => {
  const [modal, setModal] = useState(false);

  function hideModal() {
    setModal(false);
  }
  function showModal() {
    setModal(true);
  }
  return (
    <>
      <div className="sui-g-grid as--auto as--middle as--center">
        <div className="sui-g-grid__item as--full as--auto@md sui-h-text-center">
          <AchievementStepIndicator achievements={achievements} />
        </div>
        <div className="sui-g-grid__item as--pull@md">
          <AchievementLockButton />
        </div>
        <div className="sui-g-grid__item as--push@md">
          <AchievementSurprise
            achievements={achievements}
            handleOpen={showModal}
          />
        </div>
      </div>
      <div className="sui-g-grid__item as--full as--auto@md sui-h-text-center">
        <AchievementPopUp show={modal} handleClose={hideModal} />
      </div>
    </>
  );
};

AchievementFooter.propTypes = {
  achievements: PropTypes.array.isRequired,
};

export default AchievementFooter;
