import { POINTS } from '../mock/mock-points.js';

export default class PointsModel {
  constructor(points = POINTS) {
    this.points = points;
  }

  getPoints() {
    return this.points;
  }

  getPointById(id) {
    return this.points.find((point) => point.id === id);
  }

  addPoint(point) {
    this.points.push(point);
  }

  updatePoint(id, updatedPoint) {
    const index = this.points.findIndex((point) => point.id === id);
    if (index !== -1) {
      this.points[index] = updatedPoint;
    }
  }

  deletePoint(id) {
    this.points = this.points.filter((point) => point.id !== id);
  }
}
