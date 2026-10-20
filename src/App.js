import Header from '~/components/Header/Header';
import Sidebar from '~/components/Sidebar/Sidebar';


function App() {
    return (
        <div className="app">
            <Header />

            <div className="container">
                <Sidebar />

                <div className="content">
                    <h2>Danh sách video</h2>
                </div>
            </div>
        </div>
    );
}

export default App;
