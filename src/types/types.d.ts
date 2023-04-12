interface IService {
  _id: string;
  title: string;
  picture: string;
  createdAt: string;
}

interface IBooking {
  _id: string;
  service: IService;
  status: 'upcoming' | 'cancelled' | 'completed';
  userId: string;
}
