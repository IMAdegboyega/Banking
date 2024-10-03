import Headerbox from '@/components/Headerbox'
import Rightsidebar from '@/components/Rightsidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: "Tomiwa", lastName: 'ADEGBOYEGA', email: 'Marveltoms2014@gmail.com' };

  return (
    <section className= "home">
      <div className="home-content">
        <header className="home-header">
          <Headerbox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || "Guest"} 
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
