import React from 'react';
import PropTypes from 'prop-types';
import UnlockedIcon from '../structure/UnlockedIcon';
import ErrorIcon from '../structure/error/ErrorIcon';
import LoadingIcon from '../structure/loading/LoadingIcon';


const AchievementIcon = ({ unlocked, loading = false, error = false }) => (
  <div
    className="spj-c-list__item-icon"
    style={{ opacity: unlocked ? 1 : 0.4 }}
  >
    {loading && <LoadingIcon data-test="loading" />}
    {error && <ErrorIcon data-test="error" />}
    <UnlockedIcon unlocked={unlocked} data-test="unlocked" />
  </div>
);

UnlockedIcon.propTypes = { unlocked: PropTypes.bool.isRequired };

export default AchievementIcon;
