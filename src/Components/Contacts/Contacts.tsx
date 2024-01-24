import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { SubmitHandler } from 'react-hook-form';
import styles from './Contacts.module.css'

interface AlertInfo {
  display: boolean;
  message: string;
  type: string;
}

interface TemplateParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}
// ... (previous imports and interfaces)
// ... (previous imports and interfaces)

export const Contacts: React.FC = () => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
    } = useForm();
    const [disabled, setDisabled] = useState(false);
    const [alertInfo, setAlertInfo] = useState<AlertInfo>({
      display: false,
      message: '',
      type: '',
    });
  
    // Shows alert message for form submission feedback
    const toggleAlert = (message: string, type: string) => {
      setAlertInfo({ display: true, message, type });
  
      // Hide alert after 5 seconds
      setTimeout(() => {
        setAlertInfo({ display: false, message: '', type: '' });
      }, 5000);
    };
  
    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit: SubmitHandler<TemplateParams> = async (data: any) => {
      // Destructure data object
      const { name, email, subject, message } = data;
      try {
        // Disable form while processing submission
        setDisabled(true);
  
        const templateParams = {
          name,
          email,
          subject,
          message
        };
  
        await emailjs.send(
          process.env.REACT_APP_SERVICE_ID!,
          process.env.REACT_APP_TEMPLATE_ID!,
          templateParams,
          process.env.REACT_APP_USER_ID!
        );
  
        // Display success alert
        toggleAlert('Form submission was successful!', 'success');
      } catch (e) {
        console.error(e);
        toggleAlert('Uh oh. Something went wrong.', 'danger');
      } finally {
        setDisabled(false);
        reset();
      }
    };
  
    return (
        <div className={styles.wrapper}>
      <div className={styles.ContactForm}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className='col-12 text-center'>
              <div className={styles.contactForm}>
                <form id='contact-form' onSubmit={handleSubmit(onSubmit as any)} noValidate>
                  {/* Row 1 of form */}
                  <div className={styles.formRow}>
                    <div className='col-6'>
                      <input
                        type='text'
                        {...register('name', {
                          required: { value: true, message: 'Please enter your name' },
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                          }
                        })}
                        className={styles.formInput}
                        placeholder='Name'
                      ></input>
                      {errors.name && <span className={styles.errorMessage}>{errors.name.message as any}</span>}
                    </div>
                    <div className='col-6'>
                      <input
                        type='email'
                        {...register('email', {
                          required: true,
                          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })}
                        className={styles.formInput}
                        placeholder='Email address'
                      ></input>
                      {errors.email && (
                        <span className={styles.errorMessage}>Please enter a valid email address</span>
                      )}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className={styles.formRow}>
                    <div className={styles.col}>
                      <input
                        type='text'
                        {...register('subject', {
                          required: { value: true, message: 'Please enter a subject' },
                          maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters'
                          }
                        })}
                        className={styles.formInput}
                        placeholder='Subject'
                      ></input>
                      {errors.subject && (
                        <span className={styles.errorMessage}>{errors.subject.message as any}</span>
                      )}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className={styles.formRow}>
                    <div className='col'>
                      <textarea
                        rows={3}
                        {...register('message', {
                          required: true
                        })}
                        className={styles.formInput}
                        placeholder='Message'
                      ></textarea>
                      {errors.message && <span className={styles.errorMessage}>Please enter a message</span>}
                    </div>
                  </div>
                  <button className={styles.submit_btn} type='submit'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {alertInfo.display && (
          <div
            className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
            role='alert'
          >
            {alertInfo.message}
            <button
              type='button'
              className={styles.btn_close}
              data-bs-dismiss='alert'
              aria-label='Close'
              onClick={() =>
                setAlertInfo({ display: false, message: '', type: '' })
              } // Clear the alert when the close button is clicked
            ></button>
          </div>
        )}
      </div>
      </div>
    );
  };
    