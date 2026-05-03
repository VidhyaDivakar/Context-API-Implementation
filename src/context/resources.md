What Context does

> Context lets you  **store data in one place and access it anywhere in the component tree** .

![🔹](https://a.slack-edge.com/production-standard-emoji-assets/15.0/google-medium/1f539.png)** Simple analogy**

* Props → passing a parcel through every person
* Context → putting it in a **shared room** everyone can access

How it works (3 parts)

1️⃣ Create Context - const ThemeContext = createContext();

2️⃣ Provide value
-**<ThemeContext**.**Provider**value**=**"dark"**>**
<App**/>**
</ThemeContext**.**Provider>

3️⃣ Consume value - const theme = useContext(ThemeContext);
