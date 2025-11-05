import type {
  RegisterUserResponse,
  VerifyUserResponse,
} from "@/apps/main/etc/types/types";
import axios from "axios";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function login(
  emailId: string,
  password: string
): Promise<VerifyUserResponse | null> {
  try {
    const res = await axios.post(`${API_URL}/auth/verify`, {
      emailId,
      password,
    });
    if (res.status === 200) {
      if (res.data.respCode == 0) {
        toast.success("Login successful");
        return res.data;
      } else if (res.data.respCode == 1) {
        toast.error("Email does not exist");
      } else if (res.data.respCode == 2) {
        toast.error("Incorrect password");
      } else {
        toast.error("Login failed");
      }
    } else {
      toast.error("Login failed");
    }

    return null;
  } catch (error: any) {
    toast.error(error.message || "Login failed");
    return null;
  }
}

export async function register(
  emailId: string,
  password: string,
  fullName: string
): Promise<RegisterUserResponse | null> {
  try {
    var resp = await axios.post<RegisterUserResponse>(
      `${API_URL}/auth/register`,
      { emailId, fullName, password }
    );
    if (resp.status === 200) {
      if (resp.data.respCode == 0) {
        toast.error("Error, email already exists");
      } else if (resp.data.respCode == 1) {
        toast.success("Registration successful. Please login.");
        return resp.data;
      } else {
        toast.error("Registration failed");
      }
    } else {
      toast.error("Registration failed");
    }

    return null;
  } catch (error: any) {
    return null;
  }
}
