import type { Metadata } from 'next'
import styles from './page.module.scss'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sign In',

}

export default function Page() {
  return ( 
  <div className={styles.signIn}>
    <h1>Sign In</h1>
    <div className={styles.singIn_inputs}>
      <div>
        <label htmlFor="email">Email</label>
        <input id='email' name='password' type="email" />
        <span id='error_email'>asdsadasd</span>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id='password' name='password' type="password" />
        <span id='error_pwd'>errrrorororor</span>
      </div>
      <Link href="/forgot_pwd">forgot password?</Link>
    </div>
    <button type='submit'>Sign in</button>
  </div>)
}
