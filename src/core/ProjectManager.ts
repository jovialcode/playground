import PROJECT_CONFIG from '../config/index';

class ProjectManager{
    private readonly _mode : string;
    private readonly _viewMode : string;

    constructor() {
        this._mode = PROJECT_CONFIG.MODE;
        this._viewMode = PROJECT_CONFIG.VIEW_MODE;
    }

    get mode(): string {
        return this._mode;
    }

    get viewMode(): string {
        return this._viewMode;
    }
}
export default new ProjectManager();