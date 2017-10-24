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

    export function toObject(): Promise<IYarnLock>

}
