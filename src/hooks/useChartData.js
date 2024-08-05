import { useState, useEffect } from 'react';

function useChartData() {
  const [chartData, setChartData] = useState({
    revenueData: [],
    transactionData: [],
    referrerData: [],
    locationData: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        revenueData: [
          { name: 'Jan', value: 10000 },
          { name: 'Feb', value: 12000 },
          { name: 'Mar', value: 15000 },
          { name: 'Apr', value: 18000 },
          { name: 'May', value: 20000 },
          { name: 'Jun', value: 22000 },
          { name: 'Jul', value: 23548 },
        ],
        transactionData: [
          { name: 'Jan', value: 5000 },
          { name: 'Feb', value: 6000 },
          { name: 'Mar', value: 7500 },
          { name: 'Apr', value: 9000 },
          { name: 'May', value: 10000 },
          { name: 'Jun', value: 11000 },
          { name: 'Jul', value: 12645 },
        ],
        referrerData: [
          { name: 'YouTube', value: 200, color: '#8c8c8c' },
          { name: 'Twitter', value: 220, color: '#ff944d' },
          { name: 'Reddit', value: 190, color: '#006600' },
          { name: 'Indiehacker', value: 90, color: '#8c8c8c' },
        ],
        locationData: [
          { name: 'United States', value: 38.4 },
          { name: 'Canada', value: 22.5 },
          { name: 'Europe', value: 30.8 },
          { name: 'Other', value: 8.1 },
        ],
      };

      setChartData(data);
    };

    fetchData();
  }, []);

  return chartData;
}

export default useChartData;
