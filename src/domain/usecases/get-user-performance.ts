import { UserPerformance } from '../models/user-performance';
import { userLoader } from '../../main';

export const getUserPerformance = async (userId: number): Promise<UserPerformance> => {
    return userLoader().getUserPerformance({ userId });
};