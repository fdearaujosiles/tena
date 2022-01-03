import { IRepository } from "../interfaces/base/IRepository";
import { IProfile } from "../interfaces/IProfile";
import Tables from "../commons/Tables";


export class ProfileRepository implements IRepository<IProfile> {
    tableUrl: string = Tables.profiles;

    mapObjects(items: any[], includeBaseFields: boolean): IProfile[] {
        throw new Error("Method not implemented.");
    }
    mapObject(item: any, includeBaseFields: boolean): IProfile {
        throw new Error("Method not implemented.");
    }
    getAddObject(item: IProfile) {
        throw new Error("Method not implemented.");
    }
    getUpdateObject(item: IProfile) {
        throw new Error("Method not implemented.");
    }
    
}