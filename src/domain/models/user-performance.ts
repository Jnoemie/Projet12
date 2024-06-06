export type UserPerformance = {
    userId: number;
    performanceData: PerformanceData[];
};

export type PerformanceData = {
    kind: string;
    value: number;
};