export default defineEventHandler(async () => {
  try {
    const { ghToken } = useRuntimeConfig();

    if (!ghToken) {
      throw new Error("GitHub token is not configured");
    }

    const currYr = new Date().getFullYear();
    const response = await $fetch("https://api.github.com/graphql", {
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

    return response;
  } catch (error: any) {
    // Log the full error for debugging
    console.error("GitHub API Error:", {
      message: error.message,
      status: error.status,
      statusText: error.statusText,
      response: error.response,
    });

    // Return a structured error response
    throw createError({
      statusCode: error.status || 500,
      statusMessage: `GitHub API Error: ${error.message}`,
    });
  }
});
