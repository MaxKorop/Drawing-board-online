import React, { useState } from 'react';
import "../../styles/toolbar.scss";
import { useDispatch, useSelector } from 'react-redux';
import { setTool, setFillColor } from '../../store/toolSlice';
import Brush from '../../tools/Brush';
import Rect from '../../tools/Rect';
import Eraser from '../../tools/Eraser';
import Circle from '../../tools/Circle';
import Line from '../../tools/Line';
import { redo, undo } from '../../store/canvasSlice';

const ToolBar = () => {
    const dispatch = useDispatch();
    const canvas = useSelector(state => state.canvas.canvas);
    const [activated, setActivated] = useState(false);

    const setActive = (btn) => {
        if (!activated) {
            let button = document.getElementById(`btn-${btn}`);
            button.classList.add('active');
            setActivated(true);   
        } else {
            let activatedBtns = document.getElementsByClassName('active');
            activatedBtns[0].classList.remove('active');
            let button = document.getElementById(`btn-${btn}`);
            button.classList.add('active');
        }
    }

    return (
        <div className="tool-bar">
            <button id='btn-1' className="tool-bar-btn brush" onClick={() => { setActive(1); dispatch(setTool(new Brush(canvas))) }} />
            <button id='btn-2' className="tool-bar-btn eraser" onClick={() => { setActive(2); dispatch(setTool(new Eraser(canvas))) }} />
            <button id='btn-3' className="tool-bar-btn rect" onClick={() => { setActive(3); dispatch(setTool(new Rect(canvas))) }} />
            <button id='btn-4' className="tool-bar-btn circle" onClick={() => { setActive(4); dispatch(setTool(new Circle(canvas))) }} />
            <button id='btn-5' className="tool-bar-btn line" onClick={() => { setActive(5); dispatch(setTool(new Line(canvas))) }} />
            <label style={{marginLeft: 10}} htmlFor="fill-color">Fill color</label>
            <input id='fill-color' type="color" onChange={e => dispatch(setFillColor(e.target.value))} onClick={e => dispatch(setFillColor({ fillColor: e.target.value }))} style={{marginLeft: 10}} />
            <button className="tool-bar-btn undo" onClick={() => dispatch(undo())} />
            <button className="tool-bar-btn redo" onClick={() => dispatch(redo())} />
            <button className="tool-bar-btn save" />
        </div>
    );
}

export default ToolBar;
