import { useContext, useRef } from 'react';
import NotificationContext from '../../store/notification-context';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const context = useContext(NotificationContext);
  console.log(context)
  const emailRef = useRef()
  function registrationHandler(event) {
    event.preventDefault();
    const reqBody = { email: emailRef.current.value }
    context.showNotification({
      title: 'Signing up',
      message: 'Register for newsletter',
      status: 'pending'
    })
    fetch(`/api/newsletter`, {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((res) => {

      if (res.ok) {
        return res.json();
      }
      return res.json().then(data => {
        throw new Error(data.message || "Something wrong!")
      })

    }).then((data) => {
      context.showNotification({
        title: 'Success',
        message: 'Successfully registered for newsletter',
        status: 'success'
      })
    }).catch(err => {
      context.showNotification({
        title: 'Error',
        message: err.message || 'ST Wrong ',
        status: 'error'
      })
    })
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={emailRef}
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
          />
          <button type='submit'>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;