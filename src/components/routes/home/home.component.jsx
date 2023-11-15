import { Outlet } from 'react-router-dom'
import '../../directory/directory.styles.scss'
import Directory from '../../directory/directory.component'

const Home = () => {

    return (
        <div>
            <Directory />
            <Outlet />
        </div>
    )
}

export default Home;