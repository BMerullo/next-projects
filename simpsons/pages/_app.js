import "@/styles/globals.css"
import "bootstrap/dist/css/bootstrap.css"
import ThemeProvider from "react-bootstrap/ThemeProvider"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
