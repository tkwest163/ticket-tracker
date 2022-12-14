import './App.scss';
import team from './data/team';
import Team from './components/Team';


const App = () => {

const mappedTeam = team.map((member) => {
    return <Team person = {member} key= {member.id}/>
    // key = {member.id} is just a way for react to keep track 
    // of which employee is which, but is not required
})


  return (
    <>
    <header>Ticket Tracker</header>
    <main>
    {mappedTeam}
    </main>
    </>
  );
};

export default App;
