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
          {
            day: "2020-07-01",
            kilogram: 80,
            calories: 240,
          },
          {
            day: "2020-07-02",
            kilogram: 80,
            calories: 220,
          },
          {
            day: "2020-07-03",
            kilogram: 81,
            calories: 280,
          },
          {
            day: "2020-07-04",
            kilogram: 81,
            calories: 290,
          },
          {
            day: "2020-07-05",
            kilogram: 80,
            calories: 160,
          },
          {
            day: "2020-07-06",
            kilogram: 78,
            calories: 162,
          },
          {
            day: "2020-07-07",
            kilogram: 76,
            calories: 390,
          },
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
        { day: "2020-07-01", sessionLength: 30 },
        { day: "2020-07-02", sessionLength: 23 },
        { day: "2020-07-03", sessionLength: 45 },
        { day: "2020-07-04", sessionLength: 50 },
        { day: "2020-07-05", sessionLength: 0 },
        { day: "2020-07-06", sessionLength: 0 },
        { day: "2020-07-07", sessionLength: 60 }
      ]
    });
  }

}