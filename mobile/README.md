# Mobile app (Expo) for Congregation Manager

This folder contains a minimal Expo-based React Native app scaffold to generate an Android .APK.

Quick start (local):
1. Install Expo CLI: `npm install -g expo-cli` or use `npx expo`.
2. From this folder:
   npm install
   npm start

To build an APK (recommended: EAS Build):
1. Install EAS CLI: `npm install -g eas-cli`
2. Login: `eas login`
3. Configure: `eas build:configure`
4. Build APK: `eas build -p android --profile preview`

Alternatively for a local debug APK (requires Android Studio):
1. `expo prebuild`
2. `expo run:android`

Notes:
- This scaffold expects the backend API to expose auth endpoints (`/api/auth/login`) and members list (`/api/members`).
- Tokens are stored securely using `expo-secure-store`.
