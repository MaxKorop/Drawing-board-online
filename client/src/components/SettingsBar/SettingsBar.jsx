import React from 'react';
import "../../styles/toolbar.scss";
import { useDispatch } from 'react-redux';
import { setLineWidth, setStrokeColor } from '../../store/toolSlice';

const SettingsBar = () => {
    const dispatch = useDispatch();

    return (
        <div className="settings-bar">
            <label style={{marginLeft: 10}} htmlFor="line-width">Line (Stroke) width: </label>
            <input
                onChange={e => dispatch(setLineWidth(e.target.value))}
                style={{ margin: "0 10px" }}
                id='line-width'
                type="number"
                defaultValue={1}
                min={1} max={50} />
            <label style={{marginLeft: 10}} htmlFor="stroke-color">Stroke color</label>
            <input
                style={{margin: "0 10px" }}
                type="color"
                id="stroke-color"
                onChange={e => dispatch(setStrokeColor(e.target.value))} />
        </div>
    );
}

export default SettingsBar;
