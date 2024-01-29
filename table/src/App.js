import React, { useState } from 'react';

function App(){
  const [data, setData] = useState(
    [
    
        { date: "2022-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-02", views: 150, article: "Article 2" },
    
        { date: "2023-09-02", views: 120, article: "Article 3" },
    
        { date: "2020-09-03", views: 200, article: "Article 4" }
    
    ]
    
    );

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;

      // If dates are equal, sort by views in descending order
      return b.views - a.views;
    });

    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views > b.views) return -1;
      if (a.views < b.views) return 1;

      // If views are equal, sort by date in descending order
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });

    setData(sortedData);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>

      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>

      <table>
        <thead>
          <tr>
            
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;