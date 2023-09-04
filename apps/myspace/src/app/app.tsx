// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@mindruby/common-ui';
import Dashboard from './dashboard/dashboard';
import styles from './app.module.css';
import Register from './register/register';
import Login from './login/login';
import EmployeeList from './employee-list/employee-list';
import AddEmployeeForm from './add-employee-form/add-employee-form';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='addEmployee' element={<AddEmployeeForm />} />
          <Route path='employeeList' element={<EmployeeList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
