export type SessionsApiData = {
    day: number;
    sessionLength: number;
};

export type UserAverageSessionApi = {
    userId: number;
    sessions: SessionsApiData[];
};

export type SessionsData = {
    day: string;
    sessionLength: number;
    formattedSessionLength: string;
};

export type UserAverageSession = {
    userId: number;
    sessions: SessionsData[];
};