import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import * as authService from "@/api/main/authService";

type Props = {
  onTabChange: (tab: string) => void;
};

export default function RegisterTab(props: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setIsLoading] = useState(false);

  function validateFormFields() {}

  async function createClickHandler() {
    validateFormFields();
    debugger;
    setIsLoading(true);
    var resp = await authService.register(email, password, fullName);
    setIsLoading(false);
    if (resp) {
      props.onTabChange("login");
    }
  }

  return (
    <TabsContent value="register">
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create an account to get started.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="tabs-demo-fullName">Full Name</Label>
            <Input
              id="tabs-demo-fullName"
              type="text"
              disabled={loading}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="tabs-demo-email">Email Address</Label>
            <Input
              id="tabs-demo-email"
              type="email"
              autoComplete="email"
              disabled={loading}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="tabs-demo-new">New password</Label>
            <Input
              id="tabs-demo-new"
              type="password"
              disabled={loading}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="tabs-demo-re-new">Re-Enter password</Label>
            <Input
              id="tabs-demo-re-new"
              type="password"
              disabled={loading}
              onChange={(e) => setRePassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={createClickHandler}>
            {loading && <Spinner />}
            Create Account
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}
