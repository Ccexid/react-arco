import {
    ConfigProvider
} from '@arco-design/web-react';
import MenuBar from "./components/bar/MenuBar";
//style
import './assets/styles/App.less';

function App() {
    return (
        <ConfigProvider size={"mini"}>
            <div className="App">
                <MenuBar/>
            </div>
        </ConfigProvider>

    );
}

export default App;
