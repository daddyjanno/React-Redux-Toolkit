import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)
    console.log('users: ', users)

    const author = users.find((user) => user.id === userId)
    console.log('author: ', author)

    return <span>by {author ? author.name : 'Anonymous'}</span>
}

export default PostAuthor
