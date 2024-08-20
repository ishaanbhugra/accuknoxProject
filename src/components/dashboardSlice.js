import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories:[]
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {


    setCategories: (state, action) => {state.categories= action.payload},
    
         addWidget:(state,action) =>{
      const { category, widget } = action.payload
      const categoryIndex = state.categories.findIndex(cat => cat.category === category)
      
      state.categories[categoryIndex].widgets.push(widget)
    },
   
   
    removeWidget: (state,action)=>{
      const {category, widgetId} = action.payload;
        const categoryIndex = state.categories.findIndex(cat => cat.category === category)
      state.categories[categoryIndex].widgets = state.categories[categoryIndex].widgets.filter(widget => widget.id !== widgetId);
    },
  }
});

export const {setCategories,addWidget,removeWidget} = dashboardSlice.actions;

export default dashboardSlice.reducer;
