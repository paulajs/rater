import React, { useState } from 'react';
import { RatingStar } from '../components/RatingStar';
/*
    <RatingStar id="-3" class="ratingStar minus-3"></RatingStar>
    <RatingStar id="-2" class="ratingStar minus-2"></RatingStar>
    <RatingStar id="-1" class="ratingStar minus-1"></RatingStar>
    <RatingStar id="0" class="ratingStar zero"></RatingStar>
    <RatingStar id="1" class="ratingStar plus1"></RatingStar>
    <RatingStar id="2" class="ratingStar plus2"></RatingStar>
    <RatingStar id="3" class="ratingStar plus3"></RatingStar> 
*/

export const Create = () => {
    let stars = [];
    const noRatingClass = 'star-rating-none';
    const [starColor, setStarColor] = useState(noRatingClass);
    for (let index = 1; index < 8; index++) {
        const id = 'star'+ index;
        const rating = index-4;

        const onStarEnter = () => setStarColor(`star-rating-${index}`);
        const onStarLeave = () => setStarColor(noRatingClass);

        stars.push(
            <RatingStar
                id = {id}
                key = {id}
                number = {rating}
                fillClass = {starColor}
                onMouseEnter = {onStarEnter}
                onMouseLeave = {onStarLeave}
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
                    <h2>Your rating</h2>
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