import Loader from '../../Loader';
import FatalError from '../../FatalError';
import { connect } from 'react-redux';

const Comments = (props) => {
  if (props.commentsError) {
    return <FatalError message={props.commentsError} />
  }
  if (props.loadingComments && !props.comments.length) {
    return <Loader />
  }
  const setComments = () => (
    props.comments?.map(comment => (
      <li key={comment.id}>
        <b>
          <u>
            {comment.email}
          </u>
        </b>
        <br />
        {comment.body}
      </li>
    ))
  )
  return (
    <ul>
      {setComments()}
    </ul>
  );
};

const mapStateToProps = ({ pubsReducer }) => {
  return pubsReducer;
}

export default connect(mapStateToProps)(Comments);