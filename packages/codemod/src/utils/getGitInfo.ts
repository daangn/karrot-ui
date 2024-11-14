import { simpleGit } from "simple-git";

export async function getGitInfo() {
  const git = simpleGit();

  try {
    const { current } = await git.branchLocal();
    const remotes = (await git.getRemotes(true)).map(({ name, refs: { fetch } }) => ({
      name,
      url: fetch,
    }));

    const origin = remotes.find(({ name }) => name === "origin") ?? remotes[0];
    const possibleRepositoryName = origin
      ? origin.url
          .split("/")
          .slice(-2)
          .join("/")
          .replace(/\.git$/, "")
      : (await git.revparse(["--show-toplevel"])).split("/").pop();

    return {
      possibleRepositoryName,
      branch: current,
      remotes,
    };
  } catch {
    return null;
  }
}
