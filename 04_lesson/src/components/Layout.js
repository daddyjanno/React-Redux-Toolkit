import { Outlet } from 'react-router'
import { Header } from './Header'

const Layout = () => {
    return (
        <>
            <Header />
            <main className="App">
                <Outlet />
            </main>
        </>
    )
}

export default Layout
