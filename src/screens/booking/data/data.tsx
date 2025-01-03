import {
  customer,
  customer1,
  customer2,
  customer3,
  customer4,
  customer5,
  customer6,
  customer7,
  customer8,
  service7,
  service8,
  service9,
  service10,
  service11,
  service12,
  service13,
  service14,
  service,
} from '@utils/images';

import appColors from '@theme/appColors';
import {BookingType, AllBookingType} from './types';

export const BookingData: Array<BookingType> = [
  {
    isPackageService: true,
    status: 'booking.pending',
    serviceImage: service7,
    serviceName: 'booking.service',
    bookingId: '#2345',
    price: 22,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 2,
    location: 'booking.location',
    isPaid: false,
    statusBgColor: appColors.pending,
    gotoScreen: 'PendingBooking',
    isAssigned: true,
    customers: [
      {
        customerImage: customer,
        customerName: 'booking.serviceMan',
      },
    ],
  },
  {
    isPackageService: false,
    status: 'booking.pending',
    serviceImage: service8,
    serviceName: 'booking.service1',
    bookingId: '#2345',
    price: 22,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 2,
    location: 'booking.location',
    statusBgColor: appColors.pending,
    gotoScreen: 'PendingBooking',
    isPaid: false,
    customers: [
      {
        customerImage: customer1,
        customerName: 'booking.serviceMan',
      },
    ],
    serviceMans: [
      {
        serviceManImage: customer2,
        serviceManName: 'booking.serviceMan1',
        serviceManRating: 4.2,
        showMore: false,
      },
    ],
  },
  {
    status: 'booking.pendingApproval',
    serviceImage: service10,
    serviceName: 'booking.service1',
    bookingId: '#2345',
    price: 22,
    offer: 10,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 1,
    location: 'booking.location',
    isPaid: false,
    statusBgColor: appColors.assigned,
    gotoScreen: 'PendingApproval',
    customers: [
      {
        customerImage: customer3,
        customerName: 'booking.serviceMan',
      },
    ],
    serviceMans: [
      {
        serviceManImage: customer4,
        serviceManName: 'booking.serviceMan1',
        serviceManRating: 4.2,
        showMore: true,
      },
    ],
  },
  {
    status: 'booking.accepted',
    serviceImage: service8,
    serviceName: 'booking.service1',
    bookingId: '#2345',
    price: 22,
    offer: 10,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 1,
    location: 'booking.location',
    isPaid: false,
    statusBgColor: appColors.accepted,
    gotoScreen: 'AcceptedBooking',
    isAssigned: true,
    customers: [
      {
        customerImage: customer5,
        customerName: 'booking.serviceMan',
      },
    ],
  },
  {
    status: 'booking.accepted',
    serviceImage: service8,
    serviceName: 'booking.service1',
    bookingId: '#2345',
    price: 22,
    offer: 10,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 1,
    location: 'booking.location',
    isPaid: false,
    statusBgColor: appColors.accepted,
    gotoScreen: 'AcceptedBooking',
    isAssigned: false,
    customers: [
      {
        customerImage: customer7,
        customerName: 'booking.serviceMan',
      },
    ],
  },
  {
    status: 'booking.ongoing',
    serviceImage: service11,
    serviceName: 'booking.service3',
    bookingId: '#2345',
    price: 22,
    offer: 10,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 1,
    location: 'booking.location',
    isPaid: false,
    statusBgColor: appColors.primary,
    gotoScreen: 'OngoingBooking',
    customers: [
      {
        customerImage: customer8,
        customerName: 'booking.serviceMan',
      },
    ],
    serviceMans: [
      {
        serviceManImage: customer6,
        serviceManName: 'booking.serviceMan1',
        serviceManRating: 4.2,
        showMore: true,
      },
      {
        serviceManImage: customer6,
        serviceManName: 'booking.serviceMan1',
        serviceManRating: 4.2,
        showMore: true,
      },
    ],
  },
  {
    status: 'booking.ongoing',
    serviceImage: service11,
    serviceName: 'booking.service4',
    bookingId: '#2345',
    price: 22,
    offer: 10,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 1,
    location: 'booking.location',
    isPaid: false,
    statusBgColor: appColors.primary,
    gotoScreen: 'OngoingBooking',
    isAssigned: false,
    isServiceProgress: true,
    customers: [
      {
        customerImage: customer5,
        customerName: 'booking.serviceMan',
      },
    ],
  },
  {
    status: 'booking.completed',
    serviceImage: service14,
    serviceName: 'booking.service5',
    bookingId: '#2345',
    price: 22,
    offer: 10,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 1,
    location: 'booking.location',
    isAdvance: true,
    statusBgColor: appColors.success,
    gotoScreen: 'CompletedBooking',
    serviceMans: [
      {
        serviceManImage: customer3,
        serviceManName: 'booking.serviceMan1',
        serviceManRating: 4.2,
        showMore: false,
      },
      {
        serviceManImage: customer3,
        serviceManName: 'booking.serviceMan1',
        serviceManRating: 4.2,
        showMore: false,
      },
    ],
  },
  {
    status: 'booking.cancelled',
    serviceImage: service,
    serviceName: 'booking.service6',
    bookingId: '#2345',
    price: 22,
    offer: 10,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 1,
    location: 'booking.location',
    isPaid: true,
    statusBgColor: appColors.error,
    gotoScreen: 'CancelledBooking',
    customers: [
      {
        customerImage: customer2,
        customerName: 'booking.serviceMan',
      },
    ],
  },
  {
    status: 'booking.hold',
    serviceImage: service12,
    serviceName: 'booking.service4',
    bookingId: '#2345',
    price: 22,
    offer: 10,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 1,
    location: 'booking.location',
    isPaid: true,
    statusBgColor: appColors.hold,
    gotoScreen: 'HoldBooking',
    customers: [
      {
        customerImage: customer,
        customerName: 'booking.serviceMan',
      },
    ],
    serviceMans: [
      {
        serviceManImage: customer1,
        serviceManName: 'booking.serviceMan1',
        serviceManRating: 4.2,
        showMore: false,
      },
    ],
  },
  {
    status: 'booking.assigned',
    serviceImage: service9,
    serviceName: 'booking.service2',
    bookingId: '#2345',
    price: 22,
    offer: 10,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 1,
    location: 'booking.location',
    isPaid: true,
    statusBgColor: appColors.assigned,
    gotoScreen: 'AssignedBooking',
    isAdvance: true,
    customers: [
      {
        customerImage: customer3,
        customerName: 'booking.serviceMan',
      },
    ],
    serviceMans: [
      {
        serviceManImage: customer1,
        serviceManName: 'booking.serviceMan1',
        serviceManRating: 4.2,
        showMore: false,
      },
    ],
  },
  {
    status: 'booking.assigned',
    serviceImage: service9,
    serviceName: 'booking.service2',
    bookingId: '#2345',
    price: 22,
    offer: 10,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 1,
    location: 'booking.location',
    isPaid: true,
    statusBgColor: appColors.assigned,
    gotoScreen: 'AssignedBooking',
    isAdvance: true,
    isAssigned: false,
    customers: [
      {
        customerImage: customer3,
        customerName: 'booking.serviceMan',
      },
    ],
  },
];

export const allBookingsData: Array<AllBookingType> = [
  {
    status: 'booking.pending',
    serviceImage: service7,
    serviceName: 'booking.service',
    bookingId: '#2345',
    price: 30.23,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 2,
    location: 'booking.location',
    isPaid: false,
    statusBgColor: appColors.pending,
    gotoScreen: 'PendingBooking',
    customers: [
      {
        customerImage: customer,
        customerName: 'booking.serviceMan',
      },
    ],
  },
  {
    status: 'booking.accepted',
    serviceImage: service8,
    serviceName: 'booking.service1',
    bookingId: '#2345',
    price: 22,
    offer: 10,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 1,
    location: 'booking.location',
    isPaid: true,
    statusBgColor: appColors.accepted,
    gotoScreen: 'AcceptedBooking',
    customers: [
      {
        customerImage: customer5,
        customerName: 'booking.serviceMan',
      },
    ],
  },
  {
    status: 'booking.ongoing',
    serviceImage: service11,
    serviceName: 'booking.service4',
    bookingId: '#2345',
    price: 22,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 1,
    location: 'booking.location',
    isPaid: true,
    statusBgColor: appColors.primary,
    gotoScreen: 'OngoingBooking',
    customers: [
      {
        customerImage: customer5,
        customerName: 'booking.serviceMan',
      },
    ],
  },
  {
    status: 'booking.completed',
    serviceImage: service14,
    serviceName: 'booking.service5',
    bookingId: '#2345',
    price: 22,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 1,
    location: 'booking.location',
    statusBgColor: appColors.success,
    gotoScreen: 'CompletedBooking',
    customers: [
      {
        customerImage: customer2,
        customerName: 'booking.serviceMan',
      },
    ],
  },
  {
    status: 'booking.cancelled',
    serviceImage: service,
    serviceName: 'booking.service6',
    bookingId: '#2345',
    price: 22,
    date: 'booking.date',
    time: 'booking.time',
    totalServiceMan: 1,
    location: 'booking.location',
    isPaid: true,
    statusBgColor: appColors.error,
    gotoScreen: 'CancelledBooking',
    customers: [
      {
        customerImage: customer2,
        customerName: 'booking.serviceMan',
      },
    ],
  },
];
