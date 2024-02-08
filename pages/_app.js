
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/bootstrap.scss";
import "@/styles/style.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return  getLayout (<Component {...pageProps} />);
}
