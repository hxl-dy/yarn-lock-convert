declare module 'yarn-lock-convert' {
    interface IDependencies {
        [name: string]: string;
    }

    interface IPackage {
        version: string;
        resolved: string;
        dependencies: IDependencies;
    }

    interface IYarnLock {
        [name: string]: IPackage;
    }

    export function toObject(dir?: string): Promise<IYarnLock>

    export function toJson(dir?: string, output?: any): Promise<IYarnLock>

}
