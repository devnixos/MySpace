import styles from './register.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType, z } from 'zod';
import { Link } from 'react-router-dom';

interface IRegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema: ZodType<IRegisterFormValues> = z
  .object({
    firstName: z.string().min(1, { message: 'Firstname is required' }),
    lastName: z.string().min(1, { message: 'Lastname is required' }),
    email: z.string().min(1, { message: 'Email is required' }).email({
      message: 'Must be a valid email',
    }),
    password: z
      .string()
      .min(6, { message: 'Password must be atleast 6 characters' }),
    confirmPassword: z
      .string()
      .min(1, { message: 'Confirm Password is required' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Password don't match",
  });

/* eslint-disable-next-line */
export interface RegisterProps {}

export function Register(props: RegisterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<IRegisterFormValues> = (data) =>
    console.log(data);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} id="form">
        <h1>Registration</h1>
        <div
          className={`${
            errors.firstName ? 'input-control error' : 'input-control'
          }`}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="First Name"
            {...register('firstName')}
          />
          {errors.firstName && (
            <p className="error">{errors.firstName?.message}</p>
          )}
        </div>
        <div
          className={`${
            errors.lastName ? 'input-control error' : 'input-control'
          }`}
        >
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            placeholder="Last Name"
            {...register('lastName')}
          />
          {errors.lastName && (
            <p className="error">{errors.lastName?.message}</p>
          )}
        </div>
        <div
          className={`${
            errors.email ? 'input-control error' : 'input-control'
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            {...register('email')}
          />
          {errors.email && <p className="error">{errors.email?.message}</p>}
        </div>
        <div
          className={`${
            errors.password ? 'input-control error' : 'input-control'
          }`}
        >
          <label htmlFor="password">Password</label>
          <input id="password" type="password" {...register('password')} />
          {errors.password && (
            <p className="error">{errors.password?.message}</p>
          )}
        </div>
        <div
          className={`${
            errors.confirmPassword ? 'input-control error' : 'input-control'
          }`}
        >
          <label htmlFor="c_password">Confirm Password</label>
          <input
            id="c_password"
            type="password"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword?.message}</p>
          )}
        </div>
        <button type="submit">Sign Up</button>
        <Link className="link" to="/login">
          Already have an account? Go to Login
        </Link>
      </form>
    </div>
  );
}

export default Register;
