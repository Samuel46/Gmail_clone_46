import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import {useForm} from 'react-hook-form';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase'

function SendMail() {

    const {register, handleSubmit, watch, errors} = useForm();
    const dispatch = useDispatch()
    const onSubmit = (formData) => {
            console.log(formData)
            db.collection('emails').add({
                to: formData.to,
                subject: formData.subject,
                message: formData.message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            dispatch(closeSendMessage())
    }
    return (
        <div className="sendMail">
             <div className="sendMail__header">
                 <h3>New Message</h3>
                 <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail__close" />
             </div>

             <form onSubmit={handleSubmit(onSubmit)}>
                 <input  name="to" type="email" placeholder="To" ref={register({ required: true})}/>
                 {errors.to && <p className="sendMail__error">To is Required!</p> }
                 <input name="subject" type="text" placeholder="Subject" ref={register({ required: true})}/>
                 {errors.subject && <p className="sendMail__error">Subject is Required!</p> }
                 <input name="message" type="text" placeholder="Message" className="sendMail__message" ref={register({ required: true})}/>
                 {errors.message && <p className="sendMail__error">Message is Required!</p> }
                 <div className="sendMail__options">
                     <Button
                     variant="contained"
                     color="primary"
                     type="submit"
                     className="sendMail__send">Send</Button>
                 </div>
             </form>
            
             </div>
        
    )
}

export default SendMail
