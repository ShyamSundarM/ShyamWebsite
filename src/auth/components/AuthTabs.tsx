import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import LoginTab from "./LoginTab";
import RegisterTab from "./RegisterTab";
import { useState } from "react";

export default function AuthTabs() {
  const [currentTab, setCurrentTab] = useState("login");

  function onTabChange(val: string) {
    setCurrentTab(val);
  }
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs value={currentTab} onValueChange={(val) => setCurrentTab(val)}>
        <TabsList style={{ alignSelf: "center" }}>
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <LoginTab />
        <RegisterTab onTabChange={onTabChange} />
      </Tabs>
    </div>
  );
}
