import styles from './header.module.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    // <div className={styles['container']}>
    //   <h1>Welcome to Header!</h1>
    // </div>
    <header className="main-header">
      <a href="#" className="logo">
        <span className="logo-mini">
          <b>A</b>LT
        </span>
        <span className="logo-lg">
          <b>Admin</b>LTE
        </span>
      </a>
      <nav className="navbar navbar-static-top">
        <a className="sidebar-toggle" data-toggle="push-menu" role="button">
          <span className="sr-only">Toggle navigation</span>
        </a>
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="dropdown messages-menu">
              <a
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
                id="dropdownMenuButton"
              >
                <i className="fa fa-envelope-o"></i>
                <span className="label label-success">4</span>
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li className="header dropdown-item">You have 4 messages</li>
                <li>
                  <ul className="menu">
                    <li>
                      <a href="#">
                        <div className="pull-left">
                          <img
                            src="images/user2-160x160.jpg"
                            className="img-circle"
                            alt="User Image"
                          />
                        </div>
                        <h4>
                          Support Team
                          <small>
                            <i className="fa fa-clock-o"></i> 5 mins
                          </small>
                        </h4>
                        <p>Why not buy a new awesome theme?</p>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
