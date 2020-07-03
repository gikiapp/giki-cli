import Command from '@oclif/command';
import * as axios from 'axios';
export default abstract class extends Command {
    run(): Promise<void>;
    doCommand(_userConfig: Object, client: axios.AxiosInstance): Promise<void>;
}
