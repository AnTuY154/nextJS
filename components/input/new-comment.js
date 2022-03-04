
import { useRef } from 'react';
import classes from './new-comment.module.css'
function NewComment(props) {
    const { handleSubmit } = props
    const emailRef = useRef()
    const nameRef = useRef()
    const commentRef = useRef()
    const formRef = useRef()

    const handleSubmitForm = (e) => {
        e.preventDefault();

        handleSubmit(commentRef.current.value, nameRef.current.value)
        e.target.reset();

    }

    return <form ref={formRef} onSubmit={handleSubmitForm} className={classes.form}>
        <div className={classes.row}>
            <div className={classes.control}>
                <label htmlFor="email">Your email</label>
                <input ref={emailRef} id="email" type="email"></input>
            </div>
            <div className={classes.control}>
                <label htmlFor="name">Your name</label>
                <input ref={nameRef} id="name" ></input>
            </div>
        </div>
        <div className={classes.control}>
            <label htmlFor="comment">Your comment</label>
            <textarea ref={commentRef} rows={5} id="comment" ></textarea>
        </div>
        <button type='submit'>Add comment</button>


    </form>
}

export default NewComment