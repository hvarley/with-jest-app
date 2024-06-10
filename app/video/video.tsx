"use client";

import { useState } from 'react'

interface Props {
    customer: string;
    customerRentals: {id: number, days: number}[];
}



const Video: React.FC<Props> = ({customer, customerRentals}) => {
    const videoData = [
        {
            id: 1,
            title: "Crazynotes",
            type: "regular",
        },
        {
            id: 2,
            title: "Teeth",
            type: "regular",
        },
        {
            id: 3,
            title: "The Web",
            type: "regular",
        },
    ]
    
    const calcultePrice = (days: number, type: string) => {
        let price = 0;
        let extraDays = 0;
    
        if (type === "regular") {
            extraDays = 1.5;
            price = 2;
        }
    
        if (days > 2) {
            price += (days - 2) * extraDays;
        }
    
        return price;
    }
    
    const totalPrice = () => {
        let total = 0;
        customerRentals.forEach((rental) => {
            videoData.forEach((video) => {
                if (video.id === rental.id) {
                    total += calcultePrice(rental.days, video.type);
                }
            })
        })
        return total;
    }
    
    const totalPoints = () => {
        let points = 0;
        customerRentals.forEach((rental) => {
            videoData.forEach((video) => {
                if (video.id === rental.id && video.type === "regular") {
                    points += 1;
                }
            })
        })
        return points;
    };
    return (
        <div>
            <h2 data-testid="test-h2">Rental Record for {customer}</h2>
            {customerRentals.map((rental) => {
                return (
                    videoData.filter(video => video.id === rental.id).map((video) => {
                        return (
                            <div key={video.id}>
                                <span style={{marginRight: "5px"}}>{video.title}</span>
                                <span>£{calcultePrice(rental.days, video.type)}</span>
                            </div>
                        )
                    })
                )
            })}
            <div>Total: £{totalPrice()}</div>
            <div data-testid="test-points">Points: {totalPoints()}</div>
        </div>
    );
};

export default Video;