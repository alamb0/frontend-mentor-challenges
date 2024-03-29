import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { clsx } from 'clsx';
import { Libre_Franklin } from '@next/font/google'
const libreFranklin = Libre_Franklin({weight: ["300", "600", "700"], subsets: ['latin'] })
import logo from '../public/logo.svg'
import illustration from '../public/illustration-dashboard.png'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("Please provide a valid email address").required("Email is a required field"),
}).required();

interface FormValues {
  email: string;
};

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema) 
  });
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <>
    <Head>
        <title>Frontend Mentor | Ping coming soon page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
    </Head>
    <div className={clsx(libreFranklin.className, styles.container)}>
      <main className={clsx(styles.container)}>
        <Image src={logo} alt="Ping Logo" className={styles.logo} />
        <h1 className={styles.header}><span className={clsx(styles.fontWeight300, styles.gray)}>We are launching</span> <span className={styles.fontWeight700}>soon!</span></h1>
        <p className={clsx(styles.fontWeight300, styles.subText)}>Subscribe and get notified</p> 
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email" className={styles.hidden}>hi</label>
            <input 
            id="email"
            className={clsx(styles.emailInput)}
            placeholder='Your email address...'
            aria-invalid={errors.email ? "true" : "false"}
            {...register('email')}
            />
            <button type="submit" className={styles.notifyButton}>Notify Me</button>
            <div>
            <p>{errors.email?.message}</p>
            </div>
          </form>
        </div>
        <Image className={styles.illustration} src={illustration} alt="Illustration Dashboard" height="400" width="400"/>
     </main>
      <div className={clsx(styles.center)}>
        <FontAwesomeIcon icon={faFacebook} size="2x" color='var(--primary-blue)' />
        <FontAwesomeIcon icon={faTwitter} size="2x" color='var(--primary-blue)' />
        <FontAwesomeIcon icon={faInstagram} size="2x" color='var(--primary-blue)' />
      </div>
      <footer className={clsx(styles.center)}>
        <p>&copy; Copyright Ping. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}
