export type User = {
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: {
    creationTime: number;
    lastSignInTime: number;
  };
  multiFactor: {
    enrolledFactors: any[];
  };
  phoneNumber: string | null;
  photoURL: string | null;
  providerData: any[];
  providerId: string;
  refreshToken: string | null;
  tenantId: string | null;
  uid: string;
};
