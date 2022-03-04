import classes from './comment-list.module.css'

function CommentList(props) {
    const { listComment } = props;
    console.log(listComment)
    return (
        <ul className={classes.comments}>
            {listComment?.map((item) => (
                <li key={item.id}>
                    <p>{item.comment}</p>
                    <div>
                        By <address>{item.createdBy}</address>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default CommentList