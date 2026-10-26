/**
 * First-time messaging is based on the auth redirect, not the user's account age.
 * This avoids treating a second sign-in on the registration day as another signup.
 */
export function getDashboardWelcome(username, justRegistered = false) {
  const firstName = typeof username === "string" ? username.trim().split(/\s+/)[0] : "";
  const name = firstName || "learner";
  const displayName = name.charAt(0).toLocaleUpperCase() + name.slice(1);

  return {
    heading: justRegistered ? "Welcome," : "Welcome back,",
    displayName,
    description: justRegistered
      ? "Your Japanese story starts here. Explore the tools and begin learning at your own pace."
      : "A little practice goes a long way. Ready for the next chapter of your Japanese story?",
  };
}
