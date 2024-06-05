export type UserPerformance = {
    userId: number;
    performanceData: PerformanceData[];
};

export type PerformanceData = {
    day: string;
    score: number;
};