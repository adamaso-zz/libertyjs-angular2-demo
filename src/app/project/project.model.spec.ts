import {Project} from './project.model';

describe('Model: Project', () => {
    it('should screate a project', () => {
       const project = new project('1', 'Bridge Building', 'Angela', 'Started');
       expect(project).toBeDefined();
    });
});