# FoodFly

A mobile food-delivery app built with **Expo** and **React Native**. Browse restaurants, manage a cart, place orders, and open restaurant pages via deep links.

> For a styled version of this documentation, open [README.html](./README.html) in your browser.

## Features

- **Restaurant discovery** — Search and browse restaurants with ratings, tags, offers, and menus
- **Cart & orders** — Add dishes, adjust quantities, and place orders from the Orders tab
- **Auth flow** — Register and log in (credentials stored locally; demo mode, no backend)
- **Onboarding** — Two-step intro with navigation reset into login or home
- **Deep linking** — Open restaurants via `foodfly://restaurant/:id`
- **Tab navigation** — Home, Search, Orders (cart badge), and Profile

## Tech stack

| | |
|---|---|
| Framework | [Expo](https://docs.expo.dev/versions/v54.0.0/) ~54, React 19, React Native 0.81 |
| Language | TypeScript |
| Navigation | React Navigation 7 (stack + bottom tabs) |
| State | Zustand with AsyncStorage persistence |
| Linking | expo-linking |

## Getting started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn
- [Expo Go](https://expo.dev/go) on a device, or Android Studio / Xcode for emulators

### Install & run

```bash
cd FoodFly
npm install
npm start
```

Scan the QR code with **Expo Go** (Android) or the Camera app (iOS). From the terminal you can press `a` for Android emulator or `w` for web.

```bash
npx expo start --clear   # clear Metro cache if needed
```

### Demo usage

1. Complete onboarding and tap **Get Started**.
2. **Register** an account, then log in with that email and password.
3. Browse restaurants, add items from the detail screen, and place an order from the **Orders** tab.

To reset onboarding or auth during development, clear app data for Expo Go on your device.

## Project structure

```
FoodFly/
├── App.tsx                    # Root navigator & deep linking
├── app.json                   # Expo config (scheme: foodfly)
├── constatnts/data/
│   └── restaurants.ts         # Mock restaurant & menu data
└── src/
    ├── components/            # Home, RestaurantCard, Profile
    ├── screens/               # Onboarding, auth, tabs, details
    └── stores/
        ├── app-store.ts       # Auth, onboarding, users
        └── order-store.ts     # Cart & order history
```

## Navigation

Root **stack** (in `App.tsx`):

```
Onboarding1 → Onboarding2 → (reset) → LoginScreen | HomeScreen
LoginScreen ↔ RegisterScreen
HomeScreen → tabs: Home | Search | Orders | Profile
Any screen → RestaurantDetails (push or deep link)
```

Screens are gated by `isOnboarded` and `isAuthenticated` from the app store. After login, `navigation.replace("HomeScreen")` prevents returning to the login screen.

## Deep linking

Configured in `App.tsx` with scheme `foodfly` from `app.json`.

| Environment | Example |
|-------------|---------|
| Dev / production build | `foodfly://restaurant/resto_001` |
| Expo Go | `exp://YOUR_IP:8081/--/restaurant/resto_001` |

Restaurant IDs are defined in `constatnts/data/restaurants.ts` (e.g. `resto_001`).

**Android emulator** (app running in Expo Go):

```bash
adb shell am start -a android.intent.action.VIEW -d "exp://192.168.0.218:8081/--/restaurant/resto_001"
```

Replace the host with your machine's IP and port from the Expo terminal. Open links on the device or emulator, not in a desktop browser.

## State & persistence

| Store | Storage key | Contents |
|-------|-------------|----------|
| `app-store` | `app-storage` | `isOnboarded`, `isAuthenticated`, `userCreds` |
| `order-store` | `order-storage` | Cart items, past order batches |

Both use Zustand `persist` with AsyncStorage.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start Expo dev server |
| `npm run android` | Start and open on Android |
| `npm run ios` | Start and open on iOS (macOS only) |
| `npm run web` | Run in the browser |

## License

Private project.
