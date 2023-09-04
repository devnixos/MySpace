import styles from './login.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType, z } from 'zod';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface LoginProps {}

interface ILoginFormValues {
  userName: string;
  password: string;
}

const validationSchema: ZodType<ILoginFormValues> = z.object({
  userName: z.string().min(1, { message: 'User Name is required' }),
  password: z
    .string()
    .min(6, { message: 'Password must be atleast 6 characters' }),
});

export function Login(props: LoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormValues>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ILoginFormValues> = (data) => console.log(data);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} id="loginForm">
        <h1>Login</h1>
        <div
          className={`${
            errors.userName ? 'input-control error' : 'input-control'
          }`}
        >
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            type="text"
            placeholder="user Name"
            {...register('userName')}
          />
          {errors.userName && (
            <p className="error">{errors.userName?.message}</p>
          )}
        </div>
        <div
          className={`${
            errors.password ? 'input-control error' : 'input-control'
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            placeholder="Password"
            {...register('password')}
          />
          {errors.password && (
            <p className="error">{errors.password?.message}</p>
          )}
        </div>

        <button type="submit">Login</button>
        <Link className="link" to="/register">
          Don't have an account? Go to Register
        </Link>
      </form>
    </div>
  );
}

export default Login;
