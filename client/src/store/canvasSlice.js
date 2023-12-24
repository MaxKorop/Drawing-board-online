import { createSlice } from "@reduxjs/toolkit";

const canvasSlice = createSlice({
    name: "canvas",
    initialState: {
        canvas: null,
        undoList: [],
        redoList: []
    },
    reducers: {
        setCanvas: (state, action) => {
            state.canvas = action.payload;
        },
        pushToUndo: (state, action) => {
            state.undoList = [...state.undoList, action.payload]
        },
        pushToRedo: (state, action) => {
            state.redoList = [...state.redoList, action.payload]
        },
        undo: (state) => {
            let canvas = state.canvas;
            let ctx = canvas.getContext("2d");
            if (state.undoList.length > 0) {
                let dataUrl = state.undoList.pop();
                state.redoList.push(canvas.toDataURL());
                let img = new Image();
                img.src = dataUrl;
                img.onload = () => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                }
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        },
        redo: (state) => {
            let canvas = state.canvas;
            let ctx = canvas.getContext("2d");
            if (state.redoList.length > 0) {
                let dataUrl = state.redoList.pop();
                state.undoList.push(canvas.toDataURL());
                let img = new Image();
                img.src = dataUrl;
                img.onload = () => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                }
            }
        }
    }
});

export const { setCanvas, pushToUndo, pushToRedo, undo, redo } = canvasSlice.actions;
export default canvasSlice.reducer;