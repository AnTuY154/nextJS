import '../styles/global.css'
import Layout from '../components/layout/layout'
import { NotificationContextProvider } from '../store/notification-context'
export default function MyApp({ Component, pageProps }) {
    return (
        <NotificationContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </NotificationContextProvider>

    )
}