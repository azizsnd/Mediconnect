## Repo snapshot

- This is a React Native mobile app (TypeScript). Key entry files:
  - `App.tsx` — root React component (app lives at project root, not a `src/` subfolder)
  - `index.js` — registers the app using `app.json` name
  - Android native entry: `android/app/src/main/java/com/mediconnectmobile/MainActivity.kt` and `MainApplication.kt`
  - iOS Podfile: `ios/Podfile` (uses `react_native_pods.rb` via node resolution)

## Important versions & environment

- React Native: 0.82.1 (many devDependencies pinned to `0.82.1`)
- React: 19.1.1
- Node engine required: >=20 (see `package.json`)

## How to run (concrete commands)

1. Install JS deps: `npm install` (project uses `package-lock.json`).
2. Start Metro dev server from repo root: `npm start`.
3. In a second terminal run the platform build you need:
   - Android: `npm run android` (uses the Gradle wrapper in `android/`)
   - iOS (macOS-only): run CocoaPods first if needed: `bundle install` then `bundle exec pod install` in `ios/`, then `npm run ios`

Notes:
- To clear Metro cache: `npm start -- --reset-cache`.
- You can also open Android Studio / Xcode and build/run with IDE tooling.

## Tests & lint

- Unit tests: `npm test` (Jest preset `'react-native'`, see `jest.config.js`).
- Linting: `npm run lint` (project uses `@react-native/eslint-config`).

## Project conventions and patterns an AI agent should follow

- Code organization: app components live at the repository root (e.g. `App.tsx`) and are TypeScript (`.ts`/`.tsx`). When suggesting new files, put them next to `App.tsx` or under a new `src/` directory — but prefer minimal diffs that mirror current layout unless the change affects many files.
- Native integration:
  - Android autolinking is used. Manual additions go to `MainApplication.kt` (see the commented example where packages can be added by hand).
  - Android package id: `com.mediconnectmobile` — update `AndroidManifest.xml` and native files consistently if changing.
  - iOS Podfile uses `use_react_native!` and `react_native_post_install` (post_install hook) — use `bundle exec pod install` after native deps change.
- TypeScript: config extends `@react-native/typescript-config` and excludes `node_modules` and `Pods` (see `tsconfig.json`). Keep type-aware edits and imports consistent with this setup.
- Metro: uses `@react-native/metro-config` merged with a small `metro.config.js`. No custom transformer rules present.
- Fast Refresh is expected to pick up edits to `App.tsx` and other `.tsx` files.

## Native/new-arch clues to be aware of

- `MainActivity.kt` uses `DefaultReactActivityDelegate(..., fabricEnabled)` — the project scaffolding is ready for the New Architecture (Fabric) toggle. Avoid changing native initialization without understanding Fabric/JS runtime toggles.
- `MainApplication.kt` uses `PackageList(this).packages` (autolinking) and calls `loadReactNative(this)` during `onCreate()`.

## Where to look when changing behavior

- JavaScript entry: `index.js` registers the component name from `app.json`.
- Root UI: `App.tsx` and `@react-native/new-app-screen` usage (see `AppContent`).
- Android native boot: `android/app/src/*` (`AndroidManifest.xml`, `MainActivity.kt`, `MainApplication.kt`).
- iOS native deps & integration: `ios/Podfile`, `ios/MediconnectMobile/*`.

## Quick examples to include in suggestions

- When recommending how to run the app locally: show the three-step sequence (install, start Metro, run platform script) and mention `bundle exec pod install` for iOS.
- When adding a native dependency on Android: point to `MainApplication.kt` and the commented `add(MyReactNativePackage())` example.

## What not to change without confirmation

- Do not change the project package id (`com.mediconnectmobile`) or app name in `app.json` without confirming project-wide impacts.
- Avoid toggling Fabric/new-architecture flags in native files unless the user explicitly requests it.

If anything here is unclear or you'd like more detail in a particular area (example: CI steps, release signing, or a preferred file layout), tell me which section to expand and I'll iterate. 
