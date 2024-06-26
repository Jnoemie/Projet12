import { useEffect, useState } from "react";
import { getUserPerformance} from "../../domain/usecases/get-user-performance";
import { UserPerformance } from "../../domain/models/type/user-performance";

export function useFetchPerformance(userId: number) {
    const [performanceData, setPerformanceData] = useState<UserPerformance | null>(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const userPerformance = await getUserPerformance({ userId });
                setPerformanceData(userPerformance);
            } catch (error: any) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    return {performanceData, isLoading, error}
}