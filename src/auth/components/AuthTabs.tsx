import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import LoginTab from "./LoginTab";
import RegisterTab from "./RegisterTab";

export default function AuthTabs() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="login">
        <TabsList style={{ alignSelf: "center" }}>
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <LoginTab />
        <RegisterTab />
      </Tabs>
    </div>
  );
}
