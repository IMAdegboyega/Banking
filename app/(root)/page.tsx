import Headerbox from '@/components/Headerbox'
import Rightsidebar from '@/components/Rightsidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/ACTIONS/user.actions';

const Home = async () => {
  const loggedIn =  await getLoggedInUser()

  return (
    <section className= "home">
      <div className="home-content">
        <header className="home-header">
          <Headerbox
            type="greeting"
            title="welcome"
            user={loggedIn?.name || "Guest"} 
            subtext= "Access and manage your account and transaction efficently"
          />
         

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={3650.55} 
          />
        </header>

        RECENT TRANSACTIONS

      </div>


      <Rightsidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1250.99 }, {currentBalance: 459.99 }]} 
      />
    </section>
  )
}

export default Home
