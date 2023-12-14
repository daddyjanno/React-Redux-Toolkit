import { useSelector } from 'react-redux'
import {
    selectAllPosts,
    getPostStatus,
    getPostsError,
    selectPostIds,
} from './postsSlice'

import PostsExcerpt from './PostsExcerpt'

const PostsList = () => {
    const orderedPostsIds = useSelector(selectPostIds)
    const postStatus = useSelector(getPostStatus)
    const error = useSelector(getPostsError)

    let content
    if (postStatus === 'loading') {
        content = <p>Loading...</p>
    } else if (postStatus === 'succeeded') {
        content = orderedPostsIds.map((postId) => (
            <PostsExcerpt key={postId} postId={postId} />
        ))
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>
    }

    return <section>{content}</section>
}
export default PostsList
