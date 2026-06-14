const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isProjectPages = repoName && !repoName.endsWith(".github.io");

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

if (isGitHubPages && isProjectPages) {
  nextConfig.basePath = `/${repoName}`;
}

module.exports = nextConfig;
