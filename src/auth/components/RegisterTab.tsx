import {
  Card,
  CardContent,
  CardDescription,
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
  FieldError,
} from "@/components/ui/field";

import { TabsContent } from "@/components/ui/tabs";
import { useState, type FormEvent } from "react";
import { Spinner } from "@/components/ui/spinner";
import * as authService from "@/api/main/authService";

type Props = {
  onTabChange: (tab: string) => void;
};

type InputField = {
  value: string;
  errorMessage: string;
};

const defaultValue: InputField = {
  value: "",
  errorMessage: "",
};

export default function RegisterTab(props: Props) {
  const [fullNameField, setFullNameField] = useState<InputField>(defaultValue);
  const [emailField, setEmailField] = useState<InputField>(defaultValue);
  const [passwordField, setPasswordField] = useState<InputField>(defaultValue);
  const [rePasswordField, setRePasswordField] =
    useState<InputField>(defaultValue);
  const [loading, setIsLoading] = useState(false);

  function validateFormFields() {
    let isValid = true;
    // compute errors locally so we can set them all at once
    const fullName = fullNameField.value.trim();
    const email = emailField.value.trim();
    const password = passwordField.value;
    const rePassword = rePasswordField.value;

    let fullNameError = "";
    let emailError = "";
    let passwordError = "";
    let rePasswordError = "";

    // Full Name validation
    if (!fullName) {
      fullNameError = "Full name is required";
      isValid = false;
    } else if (fullName.length < 5) {
      fullNameError = "Full name must be at least 5 characters";
      isValid = false;
    }

    // Email validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      emailError = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      emailError = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (!password) {
      passwordError = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      passwordError = "Password must be at least 6 characters";
      isValid = false;
    }

    // Re-password validation (must match)
    if (!rePassword) {
      rePasswordError = "Please re-enter the password";
      isValid = false;
    } else if (rePassword !== password) {
      rePasswordError = "Passwords do not match";
      isValid = false;
    }

    // update state with error messages
    setFullNameField((cur) => ({ ...cur, errorMessage: fullNameError }));
    setEmailField((cur) => ({ ...cur, errorMessage: emailError }));
    setPasswordField((cur) => ({ ...cur, errorMessage: passwordError }));
    setRePasswordField((cur) => ({ ...cur, errorMessage: rePasswordError }));
    return isValid;
  }
  async function createClickHandler() {
    const ok = validateFormFields();
    if (!ok) return;

    setIsLoading(true);
    var resp = await authService.register(
      emailField.value,
      passwordField.value,
      fullNameField.value
    );
    setIsLoading(false);
    if (resp) {
      //on success
      props.onTabChange("login");
      clearFormFeilds();
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // call the async create handler
    void createClickHandler();
  }

  function clearFormFeilds() {
    setEmailField(defaultValue);
    setFullNameField(defaultValue);
    setPasswordField(defaultValue);
    setRePasswordField(defaultValue);
  }

  return (
    <TabsContent value="register">
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Create an account to get started.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="tabs-demo-fullName">Full Name</FieldLabel>
                <FieldContent>
                  <Input
                    id="tabs-demo-fullName"
                    type="text"
                    disabled={loading}
                    value={fullNameField.value}
                    onChange={(e) =>
                      setFullNameField((cur) => ({
                        ...cur,
                        value: e.target.value,
                      }))
                    }
                    required
                  />
                </FieldContent>
                <FieldError>{fullNameField.errorMessage}</FieldError>
              </Field>

              <Field>
                <FieldLabel htmlFor="tabs-demo-email">Email Address</FieldLabel>
                <FieldContent>
                  <Input
                    id="tabs-demo-email"
                    type="email"
                    autoComplete="email"
                    disabled={loading}
                    value={emailField.value}
                    onChange={(e) =>
                      setEmailField((cur) => ({
                        ...cur,
                        value: e.target.value,
                      }))
                    }
                    required
                  />
                </FieldContent>
                <FieldError>{emailField.errorMessage}</FieldError>
              </Field>

              <Field>
                <FieldLabel htmlFor="tabs-demo-new">New password</FieldLabel>
                <FieldContent>
                  <Input
                    id="tabs-demo-new"
                    type="password"
                    disabled={loading}
                    value={passwordField.value}
                    onChange={(e) =>
                      setPasswordField((cur) => ({
                        ...cur,
                        value: e.target.value,
                      }))
                    }
                    required
                  />
                </FieldContent>
                <FieldError>{passwordField.errorMessage}</FieldError>
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
                    value={rePasswordField.value}
                    onChange={(e) => {
                      const newRe = e.target.value;
                      // validate on every keystroke
                      setRePasswordField((cur) => ({
                        ...cur,
                        value: newRe,
                        errorMessage:
                          passwordField.value && newRe !== passwordField.value
                            ? "Passwords do not match"
                            : "",
                      }));
                    }}
                    required
                  />
                </FieldContent>
                <FieldError>{rePasswordField.errorMessage}</FieldError>
              </Field>
              <Field orientation="horizontal">
                <Button type="submit">
                  {loading && <Spinner />}
                  Create Account
                </Button>
                <Button
                  variant="outline"
                  type="button"
                  onClick={clearFormFeilds}
                >
                  Cancel
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </TabsContent>
  );
}
