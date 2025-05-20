import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer YOp7sM_a5bTAz0lHH4H8gtA43YQf8g6X6vEIkB4v5YEKl1wCILac2B_D1jVPW5BwymwHwApg3tVPl9yAb6m-dJo-YBvYIrLNNz8PAoFnebDkaw2wqfSifGIxGcsUaHYx',
  },
});
