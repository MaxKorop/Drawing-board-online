import { createSlice } from "@reduxjs/toolkit";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";

const toolSlice = createSlice({
    name: "tool",
    initialState: {
        tool: null
    },
    reducers: {
        setTool: (state, action) => {
            state.tool = action.payload;
        },
        setFillColor: (state, action) => {
            state.tool.fillColor = action.payload; 
        },
        setStrokeColor: (state, action) => {
            state.tool.strokeColor = action.payload;
        },
        setLineWidth: (state, action) => {
            state.tool instanceof Rect || state.tool instanceof Circle ?
                state.tool.lineWidth = 1 :
                state.tool.lineWidth = action.payload;
        }
    }
});

export const { setTool, setFillColor, setStrokeColor, setLineWidth } = toolSlice.actions;
export default toolSlice.reducer;