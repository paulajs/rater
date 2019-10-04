import React from 'react';
import { RatingStar } from '../components/RatingStar';

export const Create = () => {
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
                    <RatingStar id="-5"></RatingStar>
                    <RatingStar id="-4"></RatingStar>
                    <RatingStar id="-3"></RatingStar>
                    <RatingStar id="-2"></RatingStar>
                    <RatingStar id="-1"></RatingStar>
                    <RatingStar id="0"></RatingStar>
                    <RatingStar id="1"></RatingStar>
                    <RatingStar id="2"></RatingStar>
                    <RatingStar id="3"></RatingStar>
                    <RatingStar id="4"></RatingStar>
                    <RatingStar id="5"></RatingStar>
                    
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