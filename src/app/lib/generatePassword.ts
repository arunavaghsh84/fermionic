export function generateRandomPassword(length: number = 8): string {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex =
      crypto.getRandomValues(new Uint32Array(1))[0] % charset.length;
    password += charset[randomIndex];
  }

  return password;
}
