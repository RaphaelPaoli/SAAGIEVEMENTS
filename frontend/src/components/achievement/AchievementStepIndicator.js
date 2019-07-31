import React from 'react';
import PropTypes from 'prop-types';

const AchievementStepIndicator = ({ achievements }) => {
  const MAX_STEP = 10;

  const numberUnlocked = (achievements.filter(it => it.unlocked).length);

  function setMaxStep() {
    return achievements.length <= MAX_STEP ? achievements.length : MAX_STEP;
  }
  function setActualStep() {
    return Math.trunc((numberUnlocked * setMaxStep()) / achievements.length);
  }
  function setListItems() {
    const list = [];
    for (let i = 0; i < setMaxStep(); i += 1) {
      list.push(<button type="button" key={i} className="sui-a-step-indicator__step" />);
    }
    return list;
  }
  return (
    <div className={`sui-a-step-indicator as--center as--interactive as--step-${setActualStep()}`}>
      {setListItems()}
    </div>
  );
};
AchievementStepIndicator.propTypes = {
  achievements: PropTypes.array.isRequired,
};
export default AchievementStepIndicator;
