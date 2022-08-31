import { Fragment } from "react";
import logoImage from "../../assets/logo.jpg";
import classes from './Header.module.css';
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes}>
        <h1 className="value"> ValueMatrix</h1>
        <h1 className="biased">Biased For Action</h1>
        <button>Join Waitlist</button>
      </header>
    </Fragment>
  );
};

export default Header;