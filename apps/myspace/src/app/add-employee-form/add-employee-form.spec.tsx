import { render } from '@testing-library/react';

import AddEmployeeForm from './add-employee-form';

describe('AddEmployeeForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddEmployeeForm />);
    expect(baseElement).toBeTruthy();
  });
});
