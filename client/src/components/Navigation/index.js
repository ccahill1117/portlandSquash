import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const navStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 300px)',
  justifyContent: 'center',
}

const navDivStyles = {
  margin: '10px',
  padding: '10px',
  borderStyle: 'dashed',
}

const NavigationAuth = ({ authUser }) => (

<div style={navStyles}>
    <div style={navDivStyles}>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </div>
    <div style={navDivStyles}>
      <Link to={ROUTES.SMIGEL}>Smigel</Link>
    </div>
    <div style={navDivStyles}>
      <Link to={ROUTES.PLAYERS}>Players</Link>
    </div>
    <div style={navDivStyles}>
      <Link to={ROUTES.TEAMS}>Teams</Link>
    </div>
    <div style={navDivStyles}>
      <Link to={ROUTES.HOME}>Home</Link>
    </div>
    <div style={navDivStyles}>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </div>
    {authUser.roles.includes(ROLES.ADMIN) && (
      <div style={navDivStyles}>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </div>
    )}
    <div style={navDivStyles}>
      <SignOutButton />
    </div>
</div>
);

const NavigationNonAuth = () => (
<div style={navStyles}>
    <div style={navDivStyles}>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </div>
    <div style={navDivStyles}>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </div>
</div>
);

export default Navigation;
