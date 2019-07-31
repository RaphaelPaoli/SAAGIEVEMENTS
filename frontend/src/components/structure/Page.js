import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'saagie-ui/react';

const Page = props => (
  <>
    <div className="sui-o-topbar">
      <button type="button" className="sui-o-topbar__button as--toggle-menu">
        <Icon name="reduce-nav" />
      </button>
      <a href="/" className="sui-o-topbar__logo">
        <img src="/images/saagie-logo.svg" alt="Saagie" />
      </a>
      <div className="sui-o-topbar__primary">
        <div className="sui-o-topbar__title">SaagieVements
        </div>
      </div>
    </div>
    <div className="sui-l-app-layout">
      <div className="sui-l-app-layout__subapp">
        <div className="sui-l-app-layout__main">
          <div className="sui-l-app-layout__page">
            <div className="sui-l-app-layout__page-scroll">
              <div className="sui-l-container as--gutter-xl@sm">
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
Page.propTypes = { children: PropTypes.node.isRequired };
export default Page;
