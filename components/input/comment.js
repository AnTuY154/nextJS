import { useEffect, useState } from "react"
import NewComment from "./new-comment"
import classes from './comment.module.css'
import CommentList from "./comment-list"
function Comment(props) {
    const { data, listCommentDB } = props
    const [showComment, setShowComment] = useState(false)
    const [listComment, setListComment] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = (comment, createdBy) => {
        setIsLoading(false);
        const reqBody = {
            newComment: {
                comment: comment,
                createdBy: createdBy
            }
        }
        fetch(`/api/comment/${data.id}`, {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json()).then(data => {
            setIsLoading(true);
            setListComment(data.listComment)
        })
    }

    useEffect(() => {
        setIsLoading(true)
        setListComment(listCommentDB)
    }, [])

    const showCommentHandle = () => {
        setShowComment(showComment => !showComment)
    }
    return (
        <section className={classes.comment}>
            <button onClick={showCommentHandle}> Show comment</button>
            {showComment &&
                <>
                    <NewComment handleSubmit={handleSubmit} eventId={data.id}></NewComment>
                    {
                        isLoading && <CommentList listComment={listComment} ></CommentList>
                    }
                    {
                        !isLoading && <div> Loading...</div>
                    }

                </>
            }

        </section>
    )
}




export default Comment