import { configureStore } from "@reduxjs/toolkit";
import canvasReducer from "./canvasSlice";
import toolReducer from "./toolSlice";

export default configureStore({
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['canvas/setCanvas', 'tool/setTool'],
                ignoredPaths: ['canvas.canvas', 'tool.tool']
            }
        })
    ,
    reducer: {
        canvas: canvasReducer,
        tool: toolReducer
    }
})