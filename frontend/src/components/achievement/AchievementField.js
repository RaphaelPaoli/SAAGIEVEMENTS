import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FieldInput } from 'saagie-ui/react/formsy';
import AchievementInput from '../../models/AchievementInput';

const AchievementField = ({ setAchievement }) => {
  const [value, setValue] = useState('');
  return (
    <FieldInput
      data-test="input"
      placeholder="Add achievement"
      onChange={(input) => {
        setValue(input);
        setAchievement(new AchievementInput(input));
      }}
      value={value}
      name="goal"
      validations="isWords"
      validationError="This is not an achievement"
      required
    />
  );
};
AchievementField.propTypes = {
  setAchievement: PropTypes.func.isRequired,
};
export default AchievementField;
