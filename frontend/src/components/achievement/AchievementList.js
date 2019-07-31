import React from 'react';
import PropTypes from 'prop-types';
import AchievementUnlockable from './AchievementUnlockable';

const AchievementList = ({ achievements = [] }) => (
  <div className="sui-o-datalist as--hover spj-c-list sui-h-mb-xl">
    {achievements.map(achievement => (
      <AchievementUnlockable
        key={achievement.id}
        achievement={achievement}
      />
    ))}
  </div>
);

AchievementList.propTypes = {
  achievements: PropTypes.array.isRequired,
};

export default AchievementList;
