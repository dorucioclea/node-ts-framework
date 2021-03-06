import { Container } from 'inversify';
export declare abstract class Module {
    readonly controllers: string;
    readonly migrations: string;
    readonly models: string;
    abstract initDiContainer(container: Container, allApplicationModules: Module[]): Promise<void>;
    abstract end(container: Container): Promise<void>;
    protected abstract readonly baseDirectory: string;
}
