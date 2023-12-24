import { createSlice } from "@reduxjs/toolkit";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";

const setSettings = (state) => {
    state.tool.fillColor = state.toolSettings.fillColor;
    state.tool.strokeColor = state.toolSettings.strokeColor;
    state.tool.lineWidth = state.toolSettings.lineWidth;
}

const toolSlice = createSlice({
    name: "tool",
    initialState: {
        tool: null,
        toolSettings: {
            fillColor: "black",
            strokeColor: "black",
            lineWidth: 1
        }
    },
    reducers: {
        setTool: (state, action) => {
            state.tool = action.payload;
            setSettings(state);
        },
        setFillColor: (state, action) => {
            state.toolSettings = { ...state.toolSettings, fillColor: action.payload };
            state.tool ? setSettings(state) : console.log();
        },
        setStrokeColor: (state, action) => {
            state.toolSettings = { ...state.toolSettings, strokeColor: action.payload };
            state.tool ? setSettings(state) : console.log();
        },
        setLineWidth: (state, action) => {
            state.toolSettings = { ...state.toolSettings, lineWidth: action.payload};
            state.tool ? setSettings(state) : console.log();
        }
    }
});

export const { setTool, setFillColor, setStrokeColor, setLineWidth } = toolSlice.actions;
export default toolSlice.reducer;