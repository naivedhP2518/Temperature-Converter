# 🌡️ Temperature Converter

A sleek, modern temperature converter web application featuring a stunning glassmorphism UI with dark/light theme support and interactive animations.

![Temperature Converter Screenshot](assets/images/Screenshot%202026-02-01%20180557.png)

---

## ✨ Features

| Feature                      | Description                                                                 |
| ---------------------------- | --------------------------------------------------------------------------- |
| 🔄 **Multi-Unit Conversion** | Convert between Celsius (°C), Fahrenheit (°F), Kelvin (K), and Rankine (°R) |
| 🌓 **Dark/Light Theme**      | Seamless theme switching with localStorage persistence                      |
| 📜 **Conversion History**    | Track and view your recent conversions                                      |
| 📱 **Responsive Design**     | Optimized for desktop, tablet, and mobile devices                           |
| ✨ **Modern UI Effects**     | Glassmorphism, animated background orbs, and cursor glow                    |

---

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/Temperature-Converter.git
   ```

2. **Open in browser**

   ```bash
   cd Temperature-Converter
   # Open index.html in your preferred browser
   ```

3. **Start converting!** 🎉

> **No dependencies required!** Just open `index.html` and you're ready to go.

---

## 📁 Project Structure

```
Temperature-Converter/
│
├── 📄 index.html              # Main application entry point
├── 📄 README.md               # Project documentation
│
└── 📁 assets/
    ├── 📁 css/
    │   └── style.css          # Styling, themes & animations (8KB)
    ├── 📁 js/
    │   └── script.js          # Conversion logic & interactivity (2.4KB)
    └── 📁 images/
        └── screenshot.png     # App preview image
```

---

## 🛠️ Technologies Used

<table>
  <tr>
    <td align="center"><strong>HTML5</strong></td>
    <td align="center"><strong>CSS3</strong></td>
    <td align="center"><strong>JavaScript</strong></td>
    <td align="center"><strong>Google Fonts</strong></td>
  </tr>
  <tr>
    <td align="center">Semantic markup</td>
    <td align="center">Variables, Glassmorphism, Animations</td>
    <td align="center">Vanilla ES6+</td>
    <td align="center">Inter & Poppins</td>
  </tr>
</table>

---

## 🎨 Design Highlights

- **Glassmorphism Effect** — Frosted glass UI with backdrop blur
- **Interactive Cursor Glow** — Dynamic glow effect following mouse movement
- **Animated Background Orbs** — Floating gradient orbs for visual depth
- **Smooth Theme Transitions** — 0.5s ease transitions between dark/light modes
- **Micro-animations** — Fade-in effects for history items and button hover states

---

## 📐 Conversion Formulas

| From → To | Formula              |
| --------- | -------------------- |
| °C → °F   | `(C × 9/5) + 32`     |
| °C → K    | `C + 273.15`         |
| °C → °R   | `(C + 273.15) × 9/5` |
| °F → °C   | `(F - 32) × 5/9`     |
| K → °C    | `K - 273.15`         |
| °R → °C   | `(R - 491.67) × 5/9` |

---

## 📱 Browser Support

| Chrome | Firefox | Safari | Edge | Opera |
| :----: | :-----: | :----: | :--: | :---: |
|   ✅   |   ✅    |   ✅   |  ✅  |  ✅   |

---

## 🔮 Future Enhancements

- [ ] Add more temperature scales (Delisle, Newton, Réaumur)
- [ ] Export conversion history to CSV
- [ ] PWA support for offline usage
- [ ] Keyboard shortcuts for quick conversions

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

<p align="center">
  Made with ❤️ by <strong>Naivedh Patel</strong>
</p>
