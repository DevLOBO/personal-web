import { ScullyRoute } from '@scullyio/ng-lib';

export interface Route extends ScullyRoute {
    tags?: string[];
    img?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
