import styles from './dashboard.module.css';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  return (
    // <div className={styles['container']}>
    //   <h1>Welcome to Dashboard!</h1>
    // </div>
    <div className="content-wrapper">
      <section className="content-header">
        <div className="row">
          <div className="col-md-12">
            <div className="box">
              <div className="box-header with-border">
                <h3 className="box-title">Dashboard</h3>
              </div>
              <div className="box-body">
                <div className="row">
                  <div className="col-md-8">
                    <p className="text-center">
                      <strong>Welcome to dashboard</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="box-footer">
                <div className="row">
                  <div className="col-sm-3 col-xs-6">
                    <div className="description-block border-right">
                      <span className="description-percentage text-green">
                        <i className="fa fa-caret-up"></i> 17%
                      </span>
                      <h5 className="description-header">$35,210.43</h5>
                      <span className="description-text">TOTAL REVENUE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
