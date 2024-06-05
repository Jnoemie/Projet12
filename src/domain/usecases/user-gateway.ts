import { User } from "../models/user";
import { UserActivity } from "../models/user-activity";
import { UserPerformance } from '../models/user-performance';
import { UserAverageSession } from "../models/user-average-session";

export interface UserGateway {
    
    getUserActivity({ userId }: { userId: number }): Promise<UserActivity>;
    getUser({ userId}: {userId: number}): Promise<User>;

    getUserPerformance({userId}: {userId: number}): Promise<UserPerformance>;
    getUserAverageSession({userId}: {userId: number}): Promise<UserAverageSession>;
}