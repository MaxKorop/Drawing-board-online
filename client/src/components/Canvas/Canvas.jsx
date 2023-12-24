import React, { useEffect, useRef } from 'react';
import "../../styles/canvas.scss";
import { useDispatch } from 'react-redux';
import { pushToUndo, setCanvas } from '../../store/canvasSlice';

const Canvas = () => {
    const canvasRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCanvas(canvasRef.current));
    }, [dispatch]);

    const mouseDown = () => {
        dispatch(pushToUndo(canvasRef.current.toDataURL()));
    }

    return (
        <div className="canvas-container">
            <canvas onMouseDown={mouseDown} ref={canvasRef} width={600} height={400} />
        </div>
    );
}

export default Canvas;
