import React, { useState } from 'react';
import { RatingStar } from '../components/RatingStar';

interface State {
    starColor: string,
    currentHoverRating: number | null, 
    selectedRating: number | null,
}

const noRatingClass = 'star-rating-none';

export const Create = () => {
    const initialState: State = {
        starColor: noRatingClass,
        currentHoverRating: null,
        selectedRating: null,
    }
    let stars = [];
    const [state, setState] = useState(initialState);
    for (let index = 1; index < 8; index++) {
        const id = 'star'+ index;
        const rating = index-4;
        let starColor = noRatingClass;

        if(state.selectedRating !== null && rating <= state.selectedRating){
            starColor = `star-rating-${state.selectedRating+4}`
        }else{
            if(state.currentHoverRating !== null && rating <= state.currentHoverRating){
                starColor = `star-rating-${state.currentHoverRating+4}`
            }
        }

        const onStarClick = () => {
            setState({
                ...state,
                selectedRating: rating,
            });
        }

        const onStarEnter = () => {
            setState({
                ...state,
                currentHoverRating: rating,
                starColor: `star-rating-${index}`,
            });
        }
        
        const onStarLeave = () => {
            setState({
                ...state,
                starColor: noRatingClass,
                currentHoverRating: null,
            })
        };

        stars.push(
            <RatingStar
                id = {id}
                key = {id}
                number = {rating}
                fillClass = {starColor}
                onMouseEnter = {onStarEnter}
                onMouseLeave = {onStarLeave}
                onClick = {onStarClick}
            ></RatingStar>
        );      
    }
    return (
        <div>
            <h1 className="page-header">Page Create</h1>
            <form className="create-rating">
                <label>
                    Category:
                    <input type="radio" name="category" value="best" /> Best
                    <input type="radio" name="category" value="worst" /> Worst
                </label>
                <label>
                    What:
                    <input type="text" name="What"/>
                </label>
                <label>
                    Where:
                    <input type="text" name="Where"/>
                </label>
                <label>
                    <h2>Your rating {state.currentHoverRating}</h2>
                    <div className="rating">
                        { stars }          
                    </div>              
                </label>
                <label>
                    Why:
                    <input type="text" name="description"/>
                </label>
                    <input type="submit" value="Create rating" />
            </form>
        </div>
            )
        
}