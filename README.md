<div>
	<div>
		<img src=https://raw.githubusercontent.com/Byron2016/00_forImages/main/images/Logo_01_00.png align=left alt=MyLogo width=200>
	</div>
	&nbsp;
	<div>
		<h1>022_wd_react_lp_000</h1>
	</div>
</div>

&nbsp;

# Table of contents

- [Table of contents](#table-of-contents)
- [Project Description](#project-description)
- [Technologies used](#technologies-used)
- [References](#references)
- [Steps](#steps)

  - <details> <summary>List of Steps</summary>

    - [Install and Setup Vite React and Bootstrap 5](#-install-setup-vite-react-bootstrap-5)

   </details>

# Project Description

**022_wd_react_lp_000** is a practice to build a **Responsive Portfolio Website with Advanced Animations (2022)** React, HTLM, CSS, bootstrap 5 following Youtube webdecoded's tutorial [React Project Tutorial: Build a Responsive Portfolio Website w/ Advanced Animations (2022)](https://www.youtube.com/watch?v=hYv6BM2fWd8) and the other help that you can find into **Reference** section.

[⏪(Back to top)](#table-of-contents)
&nbsp;

# Technologies used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

[⏪(Back to top)](#table-of-contents)

# References

- webdecoded tutorial and Github repositories

  - [React Project Tutorial: Build a Responsive Portfolio Website w/ Advanced Animations (2022)](https://www.youtube.com/watch?v=hYv6BM2fWd8)
  - [judygab_web-dev-projects_personal-portfolio](https://github.com/judygab/web-dev-projects/tree/main/personal-portfolio)

- Bootstrap 5

  - [Install & Setup Vite + React + Typescript + Bootstrap 5](https://frontendshape.com/post/install-setup-vite-react-typescript-bootstrap-5)
  - [React Bootstrap](https://react-bootstrap.github.io/)

- Bootstrap Icons

  - [Bootstrap Icons](https://icons.getbootstrap.com/)

- react-multi-carousel

  - [react-multi-carousel](https://www.npmjs.com/package/react-multi-carousel)

- MailChimp

  - [MailChimp](https://mailchimp.com/es/)

- Shields.io

  - [Shields.io](https://shields.io/)

  - [Github Ileriayo markdown-badges](https://github.com/Ileriayo/markdown-badges)

  - [Github Ileriayo markdown-badges WebSite](https://ileriayo.github.io/markdown-badges/)

[⏪(Back to top)](#table-of-contents)

# Steps

- **Install and Setup Vite React Bootstrap 5 and Bootstrap Icons**

  - **Create Vite Project For React**

    ```bash
      npm create vite@latest
    ```

  - **Define a Project name**

    ```bash
      ? Project name: » vite-project
    ```

  - **Select react.**

    ```bash
      ? Select a framework: » - Use arrow-keys. Return to submit.
          Vanilla
          Vue
      >   React
          Preact
          Lit
          Svelte
          Others
    ```

  - **Select react js with typescript.**

    ```bash
      ? Select a variant: » - Use arrow-keys. Return to submit.
      >   JavaScript
          TypeScript
          JavaScript + SWC
          TypeScript + SWC
    ```

  - **Move to project directory and install dependencies.**

    ```bash
      cd react-project
      npm install
      npm run dev
    ```

  - **Install Bootstrap 5 in react**

    ```bash
      npm install react-bootstrap bootstrap
    ```

  - **After install add a bootstrap 5 element in app.jsx.**

    - Add a new file components/NavBar.jsx
    - Copy [NavBar](https://react-bootstrap.github.io/components/navbar/) example
    - Add **NavBar** component to **app.jsx**

    ```js
    import "bootstrap/dist/css/bootstrap.min.css";
    import BasicExample from "./components/NavBar";

    function App() {
      return (
        <div className="App">
          <BasicExample />
        </div>
      );
    }

    export default App;
    ```

    - Add a new file components/Pills.jsx
    - Copy [Pills](https://react-bootstrap.netlify.app/components/navs/) example
    - Add **Pills** component to **app.jsx**

    ```js
    import "bootstrap/dist/css/bootstrap.min.css";
    import PillsExample from "./components/Pills";

    function App() {
      return (
        <div className="App">
          <PillsExample />
        </div>
      );
    }

    export default App;
    ```

  - **Install React Bootstrap Icons**

    ```bash
      npm i react-bootstrap-icons
    ```

  - **Install react-multi-carousel**

    ```bash
      npm i react-multi-carousel
    ```

  [⏪(Back to top)](#table-of-contents)

- **Adding Custom Environment Variables**

  - **Create React App**

    - Available with react-scripts@0.2.3 and higher.
    - By default you will have NODE*ENV defined for you, and any other environment variables starting with REACT_APP*.
    - Do not store any secrets (such as private API keys) in your React app!. Environment variables are embedded into the build, meaning anyone can view them by inspecting your app's files.

  - **Vite**

    - Note that Vite doesn't load .env files by default as the files to load can only be determined after evaluating the Vite config [Using Environment Variables in Config](https://main.vitejs.dev/config/)

    - [Using Environment Variables in Config](https://stackoverflow.com/questions/66389043/how-can-i-use-vite-env-variables-in-vite-config-js/75778756#75778756)

      - Modify file **vite.config.js**

        ```js
        import "bootstrap/dist/css/bootstrap.min.css";
        import BasicExample from "./components/NavBar";

        function App() {
          return (
            <div className="App">
              <BasicExample />
            </div>
          );
        }

        export default App;
        ```

      - Add these variables to a new **.env** or **.env.local** file

        ```js
        REACT_APP_MAILCHIMP_URL = "https://gmail.xxxx.com/subscribe/post";
        REACT_APP_MAILCHIMP_U = "xxxxxxxxxxxxxxxxx";
        REACT_APP_MAILCHIMP_ID = "YYYYYYYYYYYY";
        ```

      - Add a new component **component/Test.js** file

        ```js
        export const Test = () => {
          console.log(import.meta.env.VITE_SOME_KEY); // 123
          console.log(process.env.REACT_APP_MAILCHIMP_URL);

          const a_var = `${process.env.REACT_APP_MAILCHIMP_URL}`;
          console.log(a_var);

          return (
            <div>
              <small><b>{process.env.NODE_ENV}</b></small>
              <br>
              <small><b>{process.env.REACT_APP_MAILCHIMP_URL}</b></small>
            </div>
          );
        };
        ```

      - Add **Test component** to **App.jsx**

  [⏪(Back to top)](#table-of-contents)

- **For contact form.**

  - **Create a Contact.jsx file component**

    - Add a new file components/Contact.jsx

  - **Install npm dependecies**

    ```bash
      npm i express cors nodemailer
    ```

  - **Create a Server.js file to send servers**

    - Add a new file /server.js
    - Configure gmail user and password
      - In google apps' icon select acconts
      - Select security
      - Less secure app access
      - d

  - **Install npm react-mailchimp-subscribe**

    ```bash
      npm i react-mailchimp-subscribe
    ```

  - **[MailChimp](https://mailchimp.com/es/)**

    - Create a new account
    - Copy **Signup form URL** Audience/Signup forms/Form builder/Signup form URL

  [⏪(Back to top)](#table-of-contents)
