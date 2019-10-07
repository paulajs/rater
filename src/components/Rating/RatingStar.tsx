import React from 'react';

interface Props {
    id: string,
    number: number,
    fillClass: string,
    onMouseEnter: () => void,
    onMouseLeave: () => void,
    onStarClick: () => void,
}

export const RatingStar = (props: Props) =>  {
    return (
        <div
            className={"ratingStar " + props.fillClass}
            id={props.id}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            onClick={props.onStarClick}
        >
            <div>
                <svg version="1.1" className="star" x="0px" y="0px" viewBox="0 0 135.5 128.9">
                    <polygon points="67.8,0 88.7,42.4 135.5,49.2 101.6,82.2 109.6,128.9 67.8,106.9 25.9,128.9 33.9,82.2 0,49.2 46.8,42.4 " />
                </svg>
                <p>{props.number}</p>
            </div>
        </div>
    )
};
