import { BASE_URL } from "../constants/const";
import { UserActivity, UserActivityApi } from "../../domain/models/type/user-activity";
import { UserAverageSession, UserAverageSessionApi } from "../../domain/models/type/user-average-session";
import { User, UserInfosApi } from "../../domain/models/type/user";
import { UserGateway } from "./user-gateway";
import { UserPerformance, UserPerformanceApi } from "../../domain/models/type/user-performance";
import { UserActivityModel } from "../../domain/models/api/user-activity-model-api";
import { UserModel } from "../../domain/models/api/user-model-api";
import { UserSessionsModel } from "../../domain/models/api/user-average-session-model-api";
import { UserPerformanceModel } from "../../domain/models/api/user-performance-model-api";

// Classe ApiUser implémentant UserGateway
export class ApiUser implements UserGateway {
    async getUser({ userId }: { userId: number }): Promise<User> {
        const response = await fetch(`${BASE_URL}/user/${userId}`);
        if (!response.ok) {
            throw new Error(`Problème réseau : ${response.status}`);
        }
        const { data }: { data: UserInfosApi } = await response.json();

        const userModel = new UserModel(data);
        return {
            id: userModel.id,
            userInfos: userModel.userInfos,
            todayScore: userModel.todayScore,
            todayScorePercentage: userModel.todayScorePercentage,
            keyData: userModel.keyData,
        };
    }

    async getUserActivity({ userId }: { userId: number }): Promise<UserActivity> {
        const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
        if (!response.ok) {
            throw new Error(`Problème réseau : ${response.status}`);
        }
        const { data }: { data: UserActivityApi } = await response.json();

        const userActivityModel = new UserActivityModel(data);
        return {
            userId: userActivityModel.userId,
            sessions: userActivityModel.sessions
        };
    }

    async getUserPerformance({ userId }: { userId: number }): Promise<UserPerformance> {
        const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
        if (!response.ok) {
            throw new Error(`Problème réseau : ${response.status}`);
        }
        const { data }: { data: UserPerformanceApi } = await response.json();

        const userPerformanceModel = new UserPerformanceModel(data);
        return {
            userId: userPerformanceModel.userId,
            performanceData: userPerformanceModel.data
        };
    }

    async getUserAverageSession({ userId }: { userId: number }): Promise<UserAverageSession> {
        const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
        if (!response.ok) {
            throw new Error(`Problème réseau : ${response.status}`);
        }
        const { data }: { data: UserAverageSessionApi } = await response.json();

        const userSessionsModel = new UserSessionsModel(data);
        return {
            userId: userSessionsModel.userId,
            sessions: userSessionsModel.sessions
        };
    }
}
