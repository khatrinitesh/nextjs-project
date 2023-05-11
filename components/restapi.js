import React ,{useState,useEffect } from 'react';
import Link from 'next/link';
import styles from  '../styles/tablestylin.module.css';

const RestApiPagination = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [everyPerPage] = useState(10);
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
    const indexOfLastPlayer = currentPage * everyPerPage;
    const indexOfFirstPlayer = indexOfLastPlayer - everyPerPage;
    const currentPlayers = data.slice(indexOfFirstPlayer, indexOfLastPlayer);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
  
    return (
      <div className='container mt-5'>
        <h1 className='text-primary mb-3'>Rest API and Pagination</h1>
        <CustomExample players={currentPlayers} loading={loading} />
        <Pagination
          everyPerPage={everyPerPage}
          totalPages={data.length}
          paginate={paginate}
        />
      </div>
    );
  }
  
  const CustomExample = ({ players, loading }) => {
    if (loading) {
      return <h2>Loading...</h2>;
    }
  
    return (
      <ul className={styles.list_group}>
        {players.map(player => (
          <li key={player.id} className='list_group_item'>
            {player.title}
          </li>
        ))}
      </ul>
    );
  }
  
  const Pagination = ({ everyPerPage, totalPages, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPages / everyPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className={styles.list_custom}>
          {pageNumbers.map(number => (
            <li key={number} className={styles.list_page}>
              <Link onClick={() => paginate(number)} href='javascript:;' className={styles.listpagelink}>
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  export default RestApiPagination;