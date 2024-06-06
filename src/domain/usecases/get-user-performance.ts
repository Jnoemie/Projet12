import { userLoader } from '../../main';
import { UserPerformance } from '../models/user-performance';

// Usecase: point d'entrée quand il y a une interaction utilisateur (récupération de donnée, création de quelque chose)
export const getUserPerformance = async ({ userId }: { userId: number }): Promise<UserPerformance> => {
  const userPerformance = await userLoader().getUserPerformance({ userId });

  return userPerformance;
};