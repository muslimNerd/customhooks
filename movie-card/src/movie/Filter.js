import React from 'react';

const Filter = ({ filter, setFilter }) => (
  <div className="filter">
    <input 
      type="text" 
      placeholder="Title" 
      value={filter.title} 
      onChange={e => setFilter({ ...filter, title: e.target.value })}
    />
    <select 
      value={filter.rating} 
      onChange={e => setFilter({ ...filter, rating: Number(e.target.value) })}
    >
      <option value={0}>All</option>
      <option value={3}>3 and up</option>
      <option value={4}>4 and up</option>
      <option value={5}>5 and up</option>
    </select>
  </div>
);

export default Filter;
