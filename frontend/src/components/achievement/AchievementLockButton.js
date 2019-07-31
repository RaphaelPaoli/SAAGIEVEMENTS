import React from 'react';
import { Icon } from 'saagie-ui/react';
import { Mutation } from 'react-apollo';
import LOCK_ACHIEVEMENTS from '../../api/lockAllAchievements';

const AchievementLockButton = () => {
  function displayButton(handlePostMutation, loading, error) {
    if (loading) {
      return (
        <button type="submit" className="sui-a-button as--loading">
          Default
        </button>
      );
    }
    if (error) {
      return (
        <button type="submit" className="sui-a-button as--action-stop">
          <Icon name="killed" position="start" />
          Error
        </button>
      );
    }
    return (
      <button type="submit" className="sui-a-button" onClick={handlePostMutation}>
        Lock Achievements
      </button>
    );
  }

  return (
    <Mutation mutation={LOCK_ACHIEVEMENTS}>
      {(postMutation, { loading, error }) => (
        <div>{displayButton(postMutation, loading, error)}</div>
      )}
    </Mutation>
  );
};

export default AchievementLockButton;
