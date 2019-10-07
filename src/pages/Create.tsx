import React, { useState } from 'react';
import { Rating } from '../components/Rating/Rating';

interface State {
    selectedRating: null | number,
}

const intitialState: State = {
    selectedRating: null,
}

export const Create = () => {
    const [state, setState] = useState(intitialState);
    const setSelectedRating = (rating: number) => {
        setState({
            ...state,
            selectedRating: rating,
        })
    }
    return (
        <div className="page-create">
            <h1 className="page-header">Page Create</h1>
            <form className="create-rating">
                <label>
                    <p>Category:</p>
                    <input type="radio" name="category" value="best" /> Best
                    <input type="radio" name="category" value="worst" /> Worst
                </label>
                <label>
                    <p>What:</p>
                    <input type="text" name="What" />
                </label>
                <label>
                    <p>Where:</p>
                    <input type="text" name="Where" />
                </label>
                <label>
                    <h2>Your rating {state.selectedRating}</h2>
                    <Rating
                        onRating = {setSelectedRating}
                    ></Rating>
                </label>
                <label>
                    <p>Why:</p>
                    
                    <textarea name="description">Enter text here...</textarea>
                </label>
                <input className="submit" type="submit" value="Create rating" />
            </form>
        </div>
    )

}