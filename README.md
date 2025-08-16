# WeServe

<p>A React Native project using <strong>Expo</strong>, <strong>Expo Router</strong>, and <strong>NativeWind</strong> for styling.</p>

<hr/>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#project-overview">Project Overview</a></li>
  <li><a href="#tech-stack">Tech Stack</a></li>
  <li><a href="#setup-instructions">Setup Instructions</a></li>
  <li><a href="#running-the-app">Running the App</a></li>
  <li><a href="#running-on-phone-expo-go">Running on Phone (Expo Go)</a></li>
  <li><a href="#troubleshooting">Troubleshooting</a></li>
</ul>

<hr/>

<h2 id="project-overview">Project Overview</h2>
<p>This project demonstrates a simple React Native app with:</p>
<ul>
  <li>Routing using <strong>Expo Router</strong></li>
  <li>Tailwind-style styling using <strong>NativeWind</strong></li>
  <li>Expo managed workflow for cross-platform development</li>
</ul>

<p>Example screen (<code>app/index.jsx</code>):</p>
<pre>
<code>
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-white text-lg font-bold">
        NativeWind is working! 🎉
      </Text>
    </View>
  );
}
</code>
</pre>

<hr/>

<h2 id="tech-stack">Tech Stack</h2>
<ul>
  <li>React Native 0.79.5</li>
  <li>Expo ~53.0.20</li>
  <li>Expo Router ~5.1.4</li>
  <li>NativeWind ^4.1.23</li>
  <li>Tailwind CSS ^3.4.17</li>
  <li>Replit (online development environment)</li>
</ul>

<hr/>

<h2 id="setup-instructions">Setup Instructions</h2>
<ol>
  <li>Clone the repository (or open it on Replit).</li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Install <code>@expo/ngrok</code> (for tunnel mode on Replit):
    <pre><code>npm install @expo/ngrok@^4.1.0</code></pre>
  </li>
  <li>Babel configuration for NativeWind (<code>babel.config.js</code>):
    <pre><code>
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
    </code></pre>
  </li>
  <li>Tailwind configuration (<code>tailwind.config.js</code>):
    <pre><code>
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: { extend: {} },
  plugins: [],
};
    </code></pre>
  </li>
  <li>Expo configuration (<code>app.json</code>): Refer to the full example below.
  </li>
</ol>

<pre><code>
{
  "expo": {
    "name": "vancyfernandes-app",
    "slug": "vancyfernandes-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "vancyfernandesapp",
    "userInterfaceStyle": "automatic",
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": ["expo-router", ["expo-splash-screen", { "image": "./assets/images/splash-icon.png", "imageWidth": 200, "resizeMode": "contain", "backgroundColor": "#ffffff" }]],
    "experiments": { "typedRoutes": true }
  }
}
</code></pre>

<hr/>

<h2 id="running-the-app">Running the App</h2>

<h3>On Replit (Web Preview)</h3>
<pre><code>npx expo start</code></pre>
<p>Use the web preview panel in Replit. Works instantly in the browser.</p>

<h3>On Your Phone (Expo Go)</h3>
<ol>
  <li>Run tunnel mode to access Replit server:
    <pre><code>npx expo start --tunnel</code></pre>
  </li>
  <li>Scan the QR code with the <strong>Expo Go</strong> app (iOS or Android).</li>
  <li>The app should open and display the main screen with styling applied.</li>
</ol>
<p>✅ Tunnel mode is required for Replit since LAN connections won’t work on online editors.</p>

<hr/>

<h2 id="troubleshooting">Troubleshooting</h2>
<table>
  <tr>
    <th>Issue</th>
    <th>Solution</th>
  </tr>
  <tr>
    <td>NativeWind classes not applying</td>
    <td>Ensure <code>babel.config.js</code> has the correct <code>jsxImportSource</code> and <code>nativewind/babel</code> preset.</td>
  </tr>
  <tr>
    <td>App doesn’t open on phone</td>
    <td>Run with <code>--tunnel</code> and install <code>@expo/ngrok</code>.</td>
  </tr>
  <tr>
    <td>Web shows <code>Unknown at rule: @tailwind</code></td>
    <td>Ensure <code>web.bundler</code> is set to <code>"metro"</code> in <code>app.json</code>.</td>
  </tr>
</table>

<hr/>

<h2>Notes</h2>
<ul>
  <li>Development is easiest in <strong>Metro bundler</strong> mode.</li>
  <li>NativeWind works for both React Native and Web, but web preview requires Metro bundler.</li>
  <li>Modify <code>tailwind.config.js</code> and add components under <code>app/</code> or <code>components/</code> for customization.</li>
</ul>


