import React from 'react';
import PropTypes from 'prop-types';
import AchievementIcon from './AchievementIcon';

const AchievementRow = ({ achievement }) => (
  <>
    <div className="sui-o-datalist__col as--link as--primary@md">
      <div className="spj-c-list__item-title" data-test="title">{achievement.goal}</div>
    </div>
    <div className="sui-o-datalist__col as--flex-none as--align-center as--primary@md">
      <AchievementIcon unlocked={achievement.unlocked} />
    </div>
  </>
);
AchievementRow.propTypes = {
  achievement: PropTypes.object.isRequired,
};
export default AchievementRow;
