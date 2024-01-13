import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MyPage from './components/MyPage';
import DeactivateAccount from './components/MyPage_Component/DeactivateAccount';
import MatchingHistory from './components/MyPage_Component/MatchingHistory';
import MembershipWithdrawal from './components/MyPage_Component/MembershipWithdrawal';
import ModifyingInfo from './components/MyPage_Component/ModifyingInfo';
import ProfileCard from './components/MyPage_Component/ProfileCard';


function App() {
  return (
    <div>
      <BrowserRouter>
				<Routes>
					<Route path="/MyPage" element={<MyPage/>}/>

					<Route path="/MyPage/DeactivateAccount" element={<DeactivateAccount/>}/>
					<Route path="/MyPage/MatchingHistory" element={<MatchingHistory/>}/>
					<Route path="/MyPage/MembershipWithdrawal" element={<MembershipWithdrawal/>}/>
					<Route path="/MyPage/ModifyingInfo" element={<ModifyingInfo/>}/>
					<Route path="/MyPage/ProfileCard" element={<ProfileCard/>}/>
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;