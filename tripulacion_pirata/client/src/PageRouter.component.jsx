import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Page/LoginPage/LoginPage.component';
import Main from './Page/MainPage/Main.component';
import PirateList from './Page/PirateList/PirateList.component';
import Details from './Page/PirateDetails/PirateDetails.component';

const PageRouter = (props) => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index={true} path="/" element={<LoginPage />} />
                <Route path="/pirate/new" element={<Main />} />
                <Route path="/pirates" element={<PirateList />} />
                <Route path="/pirate/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>
    );
}

export default PageRouter;