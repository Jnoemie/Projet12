export type UserAverageSession = {
    userId: number;
    sessions: SessionData[];
};

export type SessionData = {
    day: string;
    sessionLength: number;
};