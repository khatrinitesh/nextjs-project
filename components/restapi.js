import React ,{useState,useEffect } from 'react';

const PlayersScreen = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [playersPerPage] = useState(10);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchPlayers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setData(data);
        setLoading(false)
      };
      fetchPlayers();
    }, []);
  
    // Get current players
    const indexOfLastPlayer = currentPage * playersPerPage;
    const indexOfFirstPlayer = indexOfLastPlayer - playersPerPage;
    const currentPlayers = data.slice(indexOfFirstPlayer, indexOfLastPlayer);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
  
    return (
      <div className='container mt-5'>
        <h1 className='text-primary mb-3'>My Players</h1>
        <Players players={currentPlayers} loading={loading} />
        <Pagination
          playersPerPage={playersPerPage}
          totalPlayers={data.length}
          paginate={paginate}
        />
      </div>
    );
  }
  
  const Players = ({ players, loading }) => {
    if (loading) {
      return <h2>Loading...</h2>;
    }
  
    return (
      <ul className='list-group mb-4'>
        {players.map(player => (
          <li key={player.id} className='list-group-item'>
            {player.title}
          </li>
        ))}
      </ul>
    );
  }
  
  const Pagination = ({ playersPerPage, totalPlayers, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPlayers / playersPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} href='javascript:void(0)' className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  export default PlayersScreen;