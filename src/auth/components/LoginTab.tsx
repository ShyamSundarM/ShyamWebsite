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

export default function LoginTab() {
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
          <div className="grid gap-3">
            <Label htmlFor="tabs-emailid">Email Address</Label>
            <Input
              id="tabs-emailid"
              defaultValue="alias@domain.com"
              type="email"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="tabs-password">Password</Label>
            <Input id="tabs-password" type="password" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Login</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}
