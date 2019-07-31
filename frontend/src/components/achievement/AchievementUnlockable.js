import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import AchievementRow from './AchievementRow';
import UNLOCK_ACHIEVEMENT from '../../api/unlockAchievement';

const AchievementUnlockable = ({ achievement }) => {
  const [id] = useState(achievement.id);

  return (
    <Mutation mutation={UNLOCK_ACHIEVEMENT} variables={{ id }}>
      {(handlePostMutation, { loading, error }) => (
        <div>
          <div
            role="button"
            onClick={handlePostMutation}
            onKeyPress={handlePostMutation}
            tabIndex={achievement.id}
            className="sui-o-datalist__row as--middle spj-c-list__item"
          >
            <AchievementRow achievement={achievement} loading={loading} error={error} />
          </div>
        </div>
      )}
    </Mutation>
  );
};

AchievementUnlockable.propTypes = {
  achievement: PropTypes.instanceOf(Object).isRequired,
};

export default AchievementUnlockable;
