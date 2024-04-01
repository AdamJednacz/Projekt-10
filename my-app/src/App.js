import './App.scss';
import Header from "./jsx/Header";
import Main from "./jsx/Main";
import mainbg from "./assets/Main.webp";
import Offer from "./jsx/Offer";
import Service from "./jsx/About";
import About from "./jsx/About";
import Footer from "./jsx/Footer";
import Select from "./jsx/Select";

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
                <About/>
                <Offer/>
                <Select/>

        </>
    );
}

export default App;
