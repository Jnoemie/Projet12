import { UserGateway } from "../domain/usecases/user-gateway"
import {  User } from '../domain/models/user';
import {  UserActivity } from '../domain/models/user-activity';
import { UserPerformance } from '../domain/models/user-performance';
import { UserAverageSession } from "../domain/models/user-average-session";

export class InMemoryUser implements UserGateway {
    getUserActivity({userId} : { userId: number}): Promise<UserActivity>{
      return Promise.resolve({
        userId: 12,
        sessions: [
          { day: "1", kilogram: 80, calories: 240 },
        { day: "2", kilogram: 80, calories: 220 },
        { day: "3", kilogram: 81, calories: 280 },
        { day: "4", kilogram: 81, calories: 290 },
        { day: "5", kilogram: 80, calories: 160 },
        { day: "6", kilogram: 78, calories: 162 },
        { day: "7", kilogram: 76, calories: 390 },
        { day: "8", kilogram: 77, calories: 168 },
        { day: "9", kilogram: 79, calories: 180 },
        { day: "10", kilogram: 75, calories: 192 }
        ],
      });
    }
    getUser({ userId }: { userId: number }): Promise<User> {
        return Promise.resolve({
            id: 12,
            userInfos: {
              firstName: "Karl",
              lastName: "Dovineau",
              age: 31,
            },
            todayScore: 0.12,
            todayScorePercentage: 12,
            keyData: {
              calorieCount: 1930,
              proteinCount: 155,
              carbohydrateCount: 290,
              lipidCount: 50,
            },
          });
    }
    getUserPerformance({ userId }: { userId: number }): Promise<UserPerformance> {
      return Promise.resolve({
        userId: 12,
        performanceData: [
            { kind: "Cardio", value: 80 },
            { kind: "Energie", value: 120 },
            { kind: "Endurance", value: 140 },
            { kind: "Force", value: 50 },
            { kind: "Vitesse", value: 200 },
            { kind: "Intensité", value: 90 },
        ],
    });
  }
 getUserAverageSession({ userId }: { userId: number }): Promise<UserAverageSession> {
    return Promise.resolve({
      userId: 12,
      sessions: [
        { day: "L", sessionLength: 30 },
        { day: "M", sessionLength: 23 },
        { day: "M", sessionLength: 45 },
        { day: "J", sessionLength: 50 },
        { day: "V", sessionLength: 0 },
        { day: "S", sessionLength: 0 },
        { day: "D", sessionLength: 60 },
      ]
    });
  }

}