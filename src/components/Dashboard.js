// src/components/Dashboard.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeWidget, setCategories } from './dashboardSlice';
import widgetsData from '../widgets.json'; 
import AddWidget from './AddWidget';

const Dashboard = () => {
  const dispatch = useDispatch()
  const categories = useSelector(state =>state.dashboard.categories)

  useEffect(() => {
    dispatch(setCategories(widgetsData))
  }, [dispatch]);

  return (
    <div >
      {categories.map(category => (
        <div style={{display:'flex', justifyContent: 'space-around'}} 
key={category.category}>
          
          <h2>{category.category}</h2>
          
          {category.widgets.map(widget => (
            <div key={widget.id}>
              <h4>{widget.name}</h4>
              <p>{widget.text}</p>
              <button onClick={() => 
                dispatch(removeWidget({ category: category.category,widgetId: widget.id}))}>X Remove</button>
            </div>
          ))}



          <AddWidget category={category.category} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
