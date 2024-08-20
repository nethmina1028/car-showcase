"use client";
import { CarProps } from '@/types';
import { Fragment } from 'react';
import Image from 'next/image';
import { Dialog,Transition } from '@headlessui/react';


interface CarDetailsProps {
    isOpen:boolean;
    closeModal:()=>void;
    car: CarProps;

}

const CarDetails = ({isOpen,closeModal,car }:CarDetailsProps) => {
  return (
    <>
    
    </>
  )
}

export default CarDetails