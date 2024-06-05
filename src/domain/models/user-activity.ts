export type Session = {
    day: string;
    kilogram: number;
    calories: number;
  };
  
export type UserActivity = {
  userId: number;
  sessions: Session[];
};