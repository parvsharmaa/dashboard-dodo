import React, { useState, useEffect } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useSelector } from 'react-redux';

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(14);
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [filters, setFilters] = useState({});
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    const dummyData = generateDummyData(56);
    setTransactions(dummyData);
    setFilteredTransactions(dummyData);
  }, []);

  const generateDummyData = (count) => {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        id: i + 1,
        user: `User ${i + 1}`,
        amount: Math.floor(Math.random() * 1000) + 1,
        date: new Date(Date.now() - Math.floor(Math.random() * 10000000000))
          .toISOString()
          .split('T')[0],
        status: ['Completed', 'Pending', 'Failed'][
          Math.floor(Math.random() * 3)
        ],
      });
    }
    return data;
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleFilter = (column, value) => {
    const newFilters = { ...filters, [column]: value };
    setFilters(newFilters);
    filterTransactions(newFilters);
  };

  const filterTransactions = (appliedFilters) => {
    let filtered = transactions;
    Object.keys(appliedFilters).forEach((key) => {
      if (appliedFilters[key]) {
        filtered = filtered.filter((transaction) =>
          transaction[key]
            .toString()
            .toLowerCase()
            .includes(appliedFilters[key].toLowerCase())
        );
      }
    });
    setFilteredTransactions(filtered);
    setCurrentPage(1);
  };

  const sortedTransactions = filteredTransactions.sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedTransactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      className={`container mx-auto p-4 ${
        darkMode ? 'bg-gray-900' : 'bg-gray-100'
      }`}
    >
      <table className={`min-w-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <thead>
          <tr>
            {['ID', 'User', 'Amount', 'Date', 'Status'].map((column) => (
              <th
                key={column.toLowerCase()}
                className={`px-6 py-3 border-b-2 ${
                  darkMode
                    ? 'border-gray-700 text-gray-400'
                    : 'border-gray-300 text-gray-500'
                } text-left text-xs leading-4 font-medium uppercase tracking-wider`}
              >
                <div className='flex items-center'>
                  <span>{column}</span>
                  <button
                    className='ml-2'
                    onClick={() => handleSort(column.toLowerCase())}
                  >
                    {sortColumn === column.toLowerCase() ? (
                      sortDirection === 'asc' ? (
                        <ChevronUpIcon className='h-4 w-4' />
                      ) : (
                        <ChevronDownIcon className='h-4 w-4' />
                      )
                    ) : (
                      <ChevronUpIcon className='h-4 w-4 text-gray-400' />
                    )}
                  </button>
                </div>
                <input
                  type='text'
                  placeholder={`Filter ${column}`}
                  className={`mt-1 p-1 block w-full rounded-md ${
                    darkMode
                      ? 'bg-gray-700 text-gray-300 border-gray-600'
                      : 'border-gray-300'
                  } shadow-sm focus:border-indigo-100 focus:ring focus:ring-indigo-100 focus:ring-opacity-50`}
                  onChange={(e) =>
                    handleFilter(column.toLowerCase(), e.target.value)
                  }
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems.map((transaction) => (
            <tr key={transaction.id}>
              <td
                className={`px-6 py-4 whitespace-no-wrap border-b ${
                  darkMode ? 'border-gray-700 text-gray-300' : 'border-gray-200'
                }`}
              >
                {transaction.id}
              </td>
              <td
                className={`px-6 py-4 whitespace-no-wrap border-b ${
                  darkMode ? 'border-gray-700 text-gray-300' : 'border-gray-200'
                }`}
              >
                {transaction.user}
              </td>
              <td
                className={`px-6 py-4 whitespace-no-wrap border-b ${
                  darkMode ? 'border-gray-700 text-gray-300' : 'border-gray-200'
                }`}
              >
                ${transaction.amount}
              </td>
              <td
                className={`px-6 py-4 whitespace-no-wrap border-b ${
                  darkMode ? 'border-gray-700 text-gray-300' : 'border-gray-200'
                }`}
              >
                {transaction.date}
              </td>
              <td
                className={`px-6 py-4 whitespace-no-wrap border-b ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    transaction.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : transaction.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mt-4'>
        <nav className='flex justify-between'>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md ${
              darkMode
                ? 'border-gray-600 text-gray-300 bg-gray-800 hover:bg-gray-700'
                : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
            }`}
          >
            Previous
          </button>
          <span className='relative z-0 inline-flex shadow-sm rounded-md'>
            {Array.from({
              length: Math.ceil(filteredTransactions.length / itemsPerPage),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`-ml-px relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                  currentPage === index + 1
                    ? darkMode
                      ? 'text-indigo-300 bg-gray-700'
                      : 'text-indigo-600 bg-indigo-50'
                    : darkMode
                    ? 'text-gray-300 bg-gray-800 hover:bg-gray-700'
                    : 'text-gray-700 bg-white hover:bg-gray-50'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={
              currentPage ===
              Math.ceil(filteredTransactions.length / itemsPerPage)
            }
            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md ${
              darkMode
                ? 'border-gray-600 text-gray-300 bg-gray-800 hover:bg-gray-700'
                : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
            }`}
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default TransactionTable;
