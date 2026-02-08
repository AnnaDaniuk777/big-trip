const POINTS = [
  {
    id: 'point-1',
    type: 'taxi',
    destination: 'amsterdam',
    dateFrom: '2019-03-18T10:30:00',
    dateTo: '2019-03-18T11:00:00',
    basePrice: 20,
    isFavorite: true,
    offers: ['taxi-offer-1']
  },
  {
    id: 'point-2',
    type: 'flight',
    destination: 'chamonix',
    dateFrom: '2019-03-18T12:25:00',
    dateTo: '2019-03-18T13:35:00',
    basePrice: 160,
    isFavorite: false,
    offers: ['flight-offer-1', 'flight-offer-2']
  },
  {
    id: 'point-3',
    type: 'drive',
    destination: 'chamonix',
    dateFrom: '2019-03-18T14:30:00',
    dateTo: '2019-03-18T16:05:00',
    basePrice: 160,
    isFavorite: true,
    offers: ['drive-offer-1']
  },
  {
    id: 'point-4',
    type: 'check-in',
    destination: 'chamonix',
    dateFrom: '2019-03-18T16:20:00',
    dateTo: '2019-03-18T17:00:00',
    basePrice: 600,
    isFavorite: true,
    offers: ['checkin-offer-1']
  },
  {
    id: 'point-5',
    type: 'sightseeing',
    destination: 'chamonix',
    dateFrom: '2019-03-19T14:20:00',
    dateTo: '2019-03-19T15:40:00',
    basePrice: 50,
    isFavorite: false,
    offers: ['sightseeing-offer-1', 'sightseeing-offer-2']
  },
  {
    id: 'point-6',
    type: 'drive',
    destination: 'geneva',
    dateFrom: '2019-03-19T16:00:00',
    dateTo: '2019-03-19T17:00:00',
    basePrice: 20,
    isFavorite: false,
    offers: []
  },
  {
    id: 'point-7',
    type: 'flight',
    destination: 'geneva',
    dateFrom: '2019-03-19T18:00:00',
    dateTo: '2019-03-19T19:00:00',
    basePrice: 20,
    isFavorite: false,
    offers: ['flight-offer-1', 'flight-offer-2']
  },
  {
    id: 'point-8',
    type: 'drive',
    destination: 'geneva',
    dateFrom: '2019-03-20T08:25:00',
    dateTo: '2019-03-20T09:25:00',
    basePrice: 20,
    isFavorite: false,
    offers: []
  },
  {
    id: 'point-9',
    type: 'sightseeing',
    destination: 'geneva',
    dateFrom: '2019-03-20T11:15:00',
    dateTo: '2019-03-20T12:15:00',
    basePrice: 180,
    isFavorite: false,
    offers: []
  }
];

const BLANK_POINT = {
  type: 'flight',
  destination: '',
  dateFrom: '',
  dateTo: '',
  basePrice: 0,
  isFavorite: false,
  offers: []
};

export { POINTS, BLANK_POINT };
