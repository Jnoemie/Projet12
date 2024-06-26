import { UserActivityApi, SessionsActivity } from "../type/user-activity"

export class UserActivityModel {
    userId: number;
    sessions: SessionsActivity[];

    constructor(data: UserActivityApi) {
        this.userId = data.userId;
        this.sessions = data.sessions;
    }
}