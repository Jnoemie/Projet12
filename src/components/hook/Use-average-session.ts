import { useEffect, useState } from "react";
import {  getUserAverageSession} from "../../domain/usecases/get-user-average-session";
import { UserAverageSession } from "../../domain/models/type/user-average-session";

export function useFetchSessions(userId: number) {
    const [sessionsData, setSessionsData] = useState<UserAverageSession | null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)

            try {
                const userSessions = await getUserAverageSession({ userId });
                setSessionsData(userSessions);
            } catch (error: any) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    return {sessionsData, isLoading, error}
}