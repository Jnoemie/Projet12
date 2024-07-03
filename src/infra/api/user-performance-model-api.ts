import { UserPerformanceApi, PerformanceApiData , PerformanceData,} from "../api/type /user-performance-api";


export class UserPerformanceModel {
    userId: number;
    performanceData: PerformanceData[];

    /**
     * Crée un modèle de données de performance utilisateur.
     * @param {UserPerformanceApi} data - Les données provenant de l'API
     */
    constructor(data: UserPerformanceApi) {
        this.userId = data.userId;
        this.performanceData = this.transformPerformanceData(data);
    }

    /**
     * Transforme les données de performance de l'API.
     * @param {UserPerformanceApi} data - Les données provenant de l'API
     * @return {PerformanceData[]} Les données de performance transformées
     */
    private transformPerformanceData(data: UserPerformanceApi): PerformanceData[] {
        return data.data.map((item: PerformanceApiData) => {
            const kindString = data.kind[item.kind];
            return {
                value: item.value,
                kind: kindString.charAt(0).toUpperCase() + kindString.slice(1),
            };
        });
    }
}