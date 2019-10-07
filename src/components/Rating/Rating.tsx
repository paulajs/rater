import React, { useState } from 'react';
import { RatingStar } from './RatingStar';

import './rating.css';

interface State {
    starColor: string,
    currentHoverRating: number | null,
    selectedRating: number | null,
}

interface Props {
    onRating: (rating: number) => void
}

const noRatingClass = 'star-rating-none';

const initialState: State = {
    starColor: noRatingClass,
    currentHoverRating: null,
    selectedRating: null,
}

export const Rating = (props: Props) => {
    let stars = [];

    const [state, setState] = useState(initialState);
    for (let index = 1; index < 8; index++) {
        const id = 'star' + index;
        const rating = index - 4;
        let starColor = noRatingClass;

        if (state.selectedRating !== null && rating <= state.selectedRating) {
            starColor = `star-rating-${state.selectedRating + 4}`
        } else {
            if (state.currentHoverRating !== null && rating <= state.currentHoverRating) {
                starColor = `star-rating-${state.currentHoverRating + 4}`
            }
        }

        const onStarClick = () => {
            setState({
                ...state,
                selectedRating: rating,
            });
            props.onRating(rating)
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
                id={id}
                key={id}
                number={rating}
                fillClass={starColor}
                onMouseEnter={onStarEnter}
                onMouseLeave={onStarLeave}
                onStarClick={onStarClick}
            ></RatingStar>
        );
    }
    return (
        <div className="rating">
            {stars}
        </div>
    );
}