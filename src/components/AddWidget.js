import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from './dashboardSlice';

const AddWidget = ({category}) => {
  const [widgetName,setWidgetName] = useState('')
  const [widgetText,setWidgetText] = useState('')
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    const newWidget = {
      id: Date.now(), name:widgetName, text:widgetText
    };

    dispatch(addWidget({category,widget: newWidget }))
    
    setWidgetName('')
    
    setWidgetText('')
  };

  return (
    <div>

      <input type="text" value={widgetName} placeholder="Widget Name"
        onChange={(e) => setWidgetName(e.target.value)}
      />

      <input
        value={widgetText} type="text" placeholder="Widget Text" 
        onChange={(e) => setWidgetText(e.target.value)}
      />
     
     
     
      <button onClick={handleAddWidget}>+  Add Widget</button>
    </div>
  );
};

export default AddWidget;
