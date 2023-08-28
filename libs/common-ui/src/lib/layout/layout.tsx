import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import styles from './layout.module.css';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  return (
    // <div className={styles['container']}>
    //   <h1>Welcome to Layout!</h1>
    // </div>
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
}

export default Layout;
