import Navbar from "./components/Navbar/Navbar";
import Routes from "./routes/Routes";
import CopyrightBar from "./components/CopyrightBar";
import "./styles/style.css";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="main">
                <Routes />
            </div>
            <CopyrightBar />
        </>
    );
};

export default App;
