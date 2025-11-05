import { useAuth } from "@/core/providers/AuthProvider";

export default function HomePage() {
  const authCtx = useAuth();
  return (
    <div>
      <div>Welcome to the Home Page</div>
      <button
        onClick={() => {
          authCtx.logout();
        }}
      >
        logout
      </button>
    </div>
  );
}
