# 🌑 ☀️ Dark Mode Whatsapp Web in Google Chrome

Enable in Google Chrome the Dark mode in Whatsapp Web, the dark mode is not oficial wet but they have the class ready to add

# How it works

The extension just find the body tag and add the css class ``dark`` 

```js
document.querySelector("body").classList.add("dark")
```

## How add to Chrome 

- Go in ``chrome://extensions/``
- Enable Developer Mode 
- Click in ``LOAD UNPACKED``
- Chose the extension folder 
