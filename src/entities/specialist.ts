export interface IReviewUser {
  id: string;
  name: string;
  avatar?: number;
}

export interface IReview {
  id: string;
  user: IReviewUser;
  rating: number;
  comment?: string;
}

export interface ISpecialist {
  id: string;
  name: string;
  avatar?: string;
  specialities: string;
  rating: number;
  totalReview: number;
  experienceYears: number;
  startPrice: number;
  meterFromHere?: number;
}
