import React from "react";
import styled from 'styled-components';
import PropTypes from "prop-types";

const Container = styled.div`
  border: 0;
  margin-bottom: 30px;
  margin-top: 30px;
  border-radius: 6px;
  color: rgba(${({theme}) => theme.legacyColours.rgb.black}, 0.87);
  background: ${({theme}) => theme.legacyColours.white};
  width: 100%;
  box-shadow: 0 1px 4px 0 rgba(${({theme}) => theme.legacyColours.rgb.black}, 0.14);
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  font-size: .875rem;

  ${({plain}) => (plain && `
    background: transparent;
    box-shadow: none;
  `)}

  ${({profileCard}) => (profileCard && `
    margin-top: 30px;
    text-align: center;
  `)}

  ${({chart}) => (chart && `
    & p {
      margin-top: 0px;
      padding-top: 0px;
    }
  `)}
`;

const Card = ({
  className,
  children,
  plain,
  profile,
  chart,
  ...props
}) => {
  return (
    <Container
      className={className}
      plain={plain}
      profileCard={profile}
      chart={chart}
      {...props}
    >
      {children}
    </Container>
  );
};

Card.defaultProps = {
  plain: false,
  profile: false,
  chart: false,
};

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  chart: PropTypes.bool,
  children: PropTypes.node,
};

export default Card;
