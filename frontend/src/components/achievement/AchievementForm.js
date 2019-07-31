import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Formsy from 'formsy-react';
import { Link } from 'react-router-dom';
import AchievementField from './AchievementField';
import ErrorMessage from '../structure/error/ErrorMessage';
import LoadingMessage from '../structure/loading/LoadingMessage';

const AchievementForm = ({
  handleClick,
  setAchievement,
  loading = false,
  error = false,
}) => {
  const [canSubmit, setCanSubmit] = useState(false);

  function disableButton() {
    setCanSubmit(false);
  }

  function enableButton() {
    setCanSubmit(true);
  }
  return (
    <div>
      {loading && <LoadingMessage />}
      <Formsy
        onValidSubmit={handleClick}
        onValid={enableButton}
        onInvalid={disableButton}
      >
        <AchievementField setAchievement={setAchievement} />
        <div className="sui-g-grid as--stretch as--auto as--center">
          <div className="sui-g-grid__item as--1_2@sm as--1_3@md as--1_4@md as--order-1@sm">
            <button className="sui-a-button as--block as--primary" type="submit" disabled={!canSubmit}>Confirm</button>
          </div>
          <div className="sui-g-grid__item as--1_2@sm as--1_3@md as--1_4@md">
            <Link to="/" className="sui-a-button as--block">
              Cancel
            </Link>
          </div>
        </div>
      </Formsy>
      {error && <ErrorMessage error={error} />}
    </div>
  );
};

AchievementForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
  setAchievement: PropTypes.func.isRequired,
};

export default AchievementForm;
