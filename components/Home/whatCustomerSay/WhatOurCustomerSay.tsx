import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
// import p1 from '../../../public/clients/happy0.jpg';
// import p2 from '../../../public/clients/happy2.jpg';
// import p3 from '../../../public/clients/happy3.jpg';

const WhatOurCustomerSay = () => {
  const ReviewCards = [
    {
      rating: 5,
      reviewText: "Excellent service! Highly recommend it. The team is very professional and friendly.",
      reviewer: {
        name: "Marie Alisa",
        title: "Businessman",
        imageUrl: '/clients/happy0.jpg', // assuming p1 is the image
      },
    },
    {
      rating: 4,
      reviewText: "Great experience overall. The service was fast and the quality was top-notch.",
      reviewer: {
        name: "John Doe",
        title: "Entrepreneur",
        imageUrl: '/clients/happy0.jpg', // use a different image URL here if needed
      },
    },
    {
      rating: 5,
      reviewText: "I couldn't be happier with the product! It's exactly what I needed, and the team was fantastic.",
      reviewer: {
        name: "Sarah Smith",
        title: "Designer",
        imageUrl: '/clients/happy0.jpg', // use a different image URL here if needed
      },
    },
    {
      rating: 3,
      reviewText: "Good, but could use some improvements in customer support. However, the product is decent.",
      reviewer: {
        name: "Mark Johnson",
        title: "Developer",
        imageUrl: '/clients/happy0.jpg', // use a different image URL here if needed
      },
    },
    {
      rating: 5,
      reviewText: "Amazing! Beyond my expectations. I would definitely recommend this service to others.",
      reviewer: {
        name: "Emily Davis",
        title: "Photographer",
        imageUrl: '/clients/happy0.jpg', // use a different image URL here if needed
      },
    },
  ];

  return (
    <div className="w-full mx-auto">
      <div className="container mx-auto flex flex-col gap-12 justify-center px-5 sm:px-10   md:px-12 lg:px-[188px] py-[60px] lg:py-[100px]   sm:py-8   md:py-[169px]">
        <span className="self-stretch text-center justify-start text-black text-6xl font-normal font-['Inder'] leading-[67.20px]">What Our Customers Say</span>
        <Carousel className="w-full  px-18">
          <CarouselContent >
            {ReviewCards.map((review, index) => (
              <CarouselItem key={index} className="basis  md:basis-1/2 lg:basis-1/3">
                <div className="p-6 h-[308px] bg-gray-50 border-1 rounded-2xl gap-6 flex flex-col">
                  <div className="gap-4 flex flex-col">
                    <div className="flex gap-2 justify-start">
                      {/* Show stars based on rating */}
                      {Array.from({ length: review.rating }).map((_, starIndex) => (
                        <Star className="fill-yellow-400 border-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span>{review.reviewText}</span>
                  </div>

                  {/* Profile portion */}
                  <div className="flex gap-3">
                    <Image
                      src={review.reviewer.imageUrl}
                      alt={review.reviewer.name}
                      height={44}
                      width={44}
                      className="h-[44px] w-[44px] rounded-full"
                    />
                    <div>
                      <div className="text-black text-lg font-medium font-Inter leading-7">
                        {review.reviewer.name}
                      </div>
                      <div className="text-neutral-600 text-base font-normal font-Inter leading-relaxed">
                        {review.reviewer.title}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />

        </Carousel>
        <div className="flex gap-2 justify-center">
          {Array.from({ length: ReviewCards.length }).map((_, starIndex) => (
            <div className=' bg-amber-800 h-[2px] w-[5px] rounded-2xl'> </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatOurCustomerSay;
