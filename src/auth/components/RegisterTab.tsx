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
      //on success
      props.onTabChange("login");
      clearFormFeilds();
    }
  }

  function clearFormFeilds() {
    setEmail("");
    setFullName("");
    setPassword("");
    setRePassword("");
  }

  return (
    <TabsContent value="register">
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create an account to get started.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="tabs-demo-fullName">Full Name</FieldLabel>
              <FieldContent>
                <Input
                  id="tabs-demo-fullName"
                  type="text"
                  disabled={loading}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </FieldContent>
            </Field>

            <Field>
              <FieldLabel htmlFor="tabs-demo-email">Email Address</FieldLabel>
              <FieldContent>
                <Input
                  id="tabs-demo-email"
                  type="email"
                  autoComplete="email"
                  disabled={loading}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FieldContent>
            </Field>

            <Field>
              <FieldLabel htmlFor="tabs-demo-new">New password</FieldLabel>
              <FieldContent>
                <Input
                  id="tabs-demo-new"
                  type="password"
                  disabled={loading}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FieldContent>
            </Field>

            <Field>
              <FieldLabel htmlFor="tabs-demo-re-new">
                Re-Enter password
              </FieldLabel>
              <FieldContent>
                <Input
                  id="tabs-demo-re-new"
                  type="password"
                  disabled={loading}
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
              </FieldContent>
            </Field>
            <Field orientation="horizontal">
              <Button type="submit">Submit</Button>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
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
