import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'saagie-ui/react';


const UnlockedIcon = ({ unlocked }) => (
  <Icon
    data-test="icon"
    name={unlocked ? 'fa-trophy' : 'fa-times-circle'}
    position="between"
    className="as--xl"
  />
);
UnlockedIcon.propTypes = { unlocked: PropTypes.bool.isRequired };
export default UnlockedIcon;
