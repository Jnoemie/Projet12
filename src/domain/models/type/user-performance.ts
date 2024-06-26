export type PerformanceData = {
    kind: string;
    value: number;
};

export type UserPerformance = {
    userId: number;
    performanceData: PerformanceData[];
};

export type PerformanceApiData = {
    value: number;
    kind: number;
};

export type UserPerformanceApi = {
    userId: number;
    kind: {
        [key: number]: string;
    };
    data: PerformanceApiData[];
};