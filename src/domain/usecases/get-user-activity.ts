
import { userLoader } from '../../main';
import { UserActivity } from '../models/user-activity';

// usecase c'est le point d'entré quand il y a une interaction utilisateur (récupération de donnée, création de quelque chose)
export const getUserActivity = async ({
    userId,
  }: {
    userId: number;
  }): Promise<UserActivity> => {
    const userActivity = userLoader().getUserActivity({ userId });
  
    return userActivity;
  };
  