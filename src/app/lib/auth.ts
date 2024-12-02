import { JwtPayload } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

export interface DecodedToken extends JwtPayload {
  _id: string;
  name: string;
  email: string;
}

export const decodeToken = (token: string): DecodedToken | null => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};
