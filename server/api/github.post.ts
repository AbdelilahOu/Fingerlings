export default defineEventHandler((event) => {
  const { ghToken } = useRuntimeConfig();
  const currYr = new Date().getFullYear();
  return $fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${ghToken}`,
    },
    body: JSON.stringify({
      query: `
          query ($username: String!) {
            user(login: $username) {
              contributionsCollection(from: "${currYr}-01-01T00:00:00", to: "${currYr}-12-01T00:00:00") {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      contributionCount
                      date
                    }
                  }
                }
              }
            }
          }
        `,
      variables: { username: "AbdelilahOu" },
    }),
  });
});
