import Auto from '../auto';
import { dummyLog } from '../utils/logger';
import makeCommitFromMsg from './make-commit-from-msg';

jest.mock('env-ci', () => () => ({
  pr: 123,
  build: 1,
  isCi: true,
  isPr: true,
  branch: 'ci-test'
}));

const defaults = {
  owner: 'foo',
  repo: 'bar',
  token: 'XXXX'
};

describe('canary in ci', () => {
  test('calls the canary hook with the canary version', async () => {
    const auto = new Auto({ command: 'comment', ...defaults, plugins: [] });
    auto.logger = dummyLog();
    await auto.loadConfig();
    auto.git!.getLatestRelease = () => Promise.resolve('1.2.3');
    auto.release!.getCommitsInRelease = () =>
      Promise.resolve([makeCommitFromMsg('Test Commit')]);
    const canary = jest.fn();
    auto.hooks.canary.tap('test', canary);
    const createComment = jest.fn();
    auto.git!.createComment = createComment;
    auto.release!.getCommits = jest.fn();

    await auto.canary();
    expect(canary).toHaveBeenCalledWith('1.2.4-canary.123.1');
  });

  test('comments on PR in CI', async () => {
    const auto = new Auto({ command: 'comment', ...defaults, plugins: [] });
    auto.logger = dummyLog();
    await auto.loadConfig();
    auto.git!.getLatestRelease = () => Promise.resolve('1.2.3');
    auto.release!.getCommitsInRelease = () =>
      Promise.resolve([makeCommitFromMsg('Test Commit')]);
    const createComment = jest.fn();
    auto.git!.createComment = createComment;
    auto.release!.getCommits = jest.fn();

    const version = await auto.canary({ pr: 123, build: 1 });
    expect(createComment).toHaveBeenCalled();
    expect(version.newVersion).toBe('1.2.4-canary.123.1');
  });

  test('should not comment when passed "false"', async () => {
    const auto = new Auto({ command: 'comment', ...defaults, plugins: [] });
    auto.logger = dummyLog();
    await auto.loadConfig();
    auto.git!.getLatestRelease = () => Promise.resolve('1.2.3');
    auto.release!.getCommitsInRelease = () =>
      Promise.resolve([makeCommitFromMsg('Test Commit')]);
    const createComment = jest.fn();
    auto.git!.createComment = createComment;
    auto.release!.getCommits = jest.fn();

    await auto.canary({ pr: 123, build: 1, message: 'false' });
    expect(createComment).not.toHaveBeenCalled();
  });

  test('can override pr and build', async () => {
    const auto = new Auto({ command: 'comment', ...defaults, plugins: [] });
    auto.logger = dummyLog();
    await auto.loadConfig();
    auto.git!.getLatestRelease = () => Promise.resolve('1.2.3');
    auto.release!.getCommitsInRelease = () =>
      Promise.resolve([makeCommitFromMsg('Test Commit')]);
    const createComment = jest.fn();
    auto.git!.createComment = createComment;
    auto.release!.getCommits = jest.fn();

    const version = await auto.canary({ pr: 456, build: 5 });
    expect(version.newVersion).toBe('1.2.4-canary.456.5');
  });
});

describe('shipit in ci', () => {
  test('should publish canary in PR', async () => {
    const auto = new Auto({ command: 'comment', ...defaults, plugins: [] });
    auto.logger = dummyLog();
    await auto.loadConfig();

    auto.git!.getLatestRelease = () => Promise.resolve('1.2.3');
    auto.git!.createComment = jest.fn();
    auto.release!.getCommitsInRelease = () => Promise.resolve([]);
    auto.release!.getCommits = () => Promise.resolve([]);
    const canary = jest.fn();
    auto.hooks.canary.tap('test', canary);

    await auto.shipit();
    expect(canary).toHaveBeenCalledWith('1.2.4-canary.123.1');
  });
});