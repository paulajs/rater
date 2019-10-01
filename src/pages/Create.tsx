import React from 'react';

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
                    Rating:
                    <input type="radio" name="rating" value="1"/> One
                    <input type="radio" name="rating" value="2"/> Two
                    <input type="radio" name="rating" value="3"/> Three
                    <input type="radio" name="rating" value="4"/> Four
                    <input type="radio" name="rating" value="5"/> Five
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