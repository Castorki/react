import { useState } from "react";

function CommentsList() {

    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const removeComment = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    };

    return comments.map((comment) =>
        <>
            <li className="list__element" key={comment.id}>{comment.text}<br></br>
                <button className="delet__comment_button" onClick={() => removeComment(comment.id)}>Удалить комментарий</button>
            </li>
        </>
    );
}

export default CommentsList;