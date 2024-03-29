import './App.scss';
import Header from "./jsx/Header";
import Main from "./jsx/Main";
import mainbg from "./assets/Main.webp";
import Blog from "./jsx/Blog";
import Service from "./jsx/Service";

function App() {
    const style = {
        backgroundImage: `url(${mainbg})`,
        backgroundSize: "cover"
    }
    return (

        <>
                <div className="header_main" style={style}>
                <Header/>
                <Main/>
                </div>

                <Service/>
                <Blog/>
        </>
    );
}

export default App;
