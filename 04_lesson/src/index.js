import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { fetchUsers } from './features/users/usersSlice'
import { fetchPosts } from './features/posts/postsSlice'

store.dispatch(fetchPosts())
store.dispatch(fetchUsers())

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/*" element={<App />} />
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
