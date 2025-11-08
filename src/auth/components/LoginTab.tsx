import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldLabel,
  FieldContent,
  FieldGroup,
} from "@/components/ui/field";

import { TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import * as authService from "@/api/main/authService";
import { useAuth } from "@/core/providers/AuthProvider";
import { Spinner } from "@/components/ui/spinner";

export default function LoginTab() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authCtx = useAuth();
  const [loading, setIsLoading] = useState(false);
  async function LoginClickHandler() {
    setIsLoading(true);
    var resp = await authService.login(email, password);
    setIsLoading(false);
    if (resp) {
      authCtx.login(resp.token!);
    }
  }
  return (
    <TabsContent value="login">
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="tabs-emailid">Email Address</FieldLabel>
              <FieldContent>
                <Input
                  id="tabs-emailid"
                  autoComplete="email"
                  type="email"
                  disabled={loading}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FieldContent>
            </Field>

            <Field>
              <FieldLabel htmlFor="tabs-password">Password</FieldLabel>
              <FieldContent>
                <Input
                  id="tabs-password"
                  type="password"
                  disabled={loading}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FieldContent>
            </Field>
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Button onClick={LoginClickHandler}>
            {loading && <Spinner />}
            Login
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}
