interface IHandyMan {
  _id: string;
  chargePerHour: number;
  createdAt: string;
  email: string;
  firstName: string;
  lastName: string;
  location: {
    _id: string;
    address: string;
    coordinates: {latitude: string; longitude: string};
  };
  password: string;
  serviceOffered: {
    _id: string;
    description: string;
    service: string;
  };
}
