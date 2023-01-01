import { useRouter } from "next/router";

function useTriggerAuth() {
  const { push } = useRouter();

  const triggerAuth = () => push({ query: { mode: "auth" } });

  return { triggerAuth };
}

export default useTriggerAuth;
