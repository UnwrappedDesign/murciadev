# Unwrapped HTML Starter with Tailwind CSS  & HBS
![thumbnail](https://raw.githubusercontent.com/UnwrappedDesign/html-starter/main/src/images/thumbnail.png)
This repo is the scaffolding we use at [Unwrapped](https://unwrapped.design) to create new
Tailwind based HTML templates.

We mainly use plain HTML with Tailwind classes to create stunning eye-catching templates for landing pages
marketing pages.

This scaffolding uses [gulp](https://gulpjs.com/) to create workflows to make easier the development. These
are other of the dependencies and technologies we use:

- [Tailwind CSS](https://tailwindcss.com/) as utility CSS framework
- [Handlebars](https://handlebarsjs.com/) as template engine to join our layouts, partials into pages.
- [Imagemin](https://github.com/imagemin/imagemin) to minify images and optimize them for web.

## Getting started

First of all we need to have [nodejs](https://nodejs.org/) installed in our system. Then, we can execute
`npm install` to install this repo's dependencies.

Later on, we can execute `npm start` to compile our Handlebars templates into plain HTML. A development
server will be launch and you will be able to see the result webpage in the URL [http://localhost:4000](http://localhost:4000/).

## Source scaffolding structure

The source code is located in the directory `src`. Inside it there are the following folders:

- **css**: Here is just one file named `app.css` and inside we are just importing Tailwind. If you want to
any custom CSS rule you add it to that file.
- **layouts**: here we can store our different layouts for our different websites. These are the structures
with common parts between different pages, including things links to **externals assets** like **fonts**,
or components like navigation or footer.
- **partials**: here we will store snippets of HTML like UI components. Things like **buttons**, **cards**,
**navbars**, or any other UI component.
- **js**: here you can store your js files. They will be minified with uglify if NODE_ENV === 'prod' and copied to `dist/js`.

In the root of `src` we will store full pages importing our layouts, and partials. In our example there is just
on file named `index.html` but you can create others and add links to them in your navigation.

If you have any doubt about how to use this code, you can reach use in twitter at [@Mike_Andreuzza](https://twitter.com/Mike_Andreuzza)
, [@g_perales](https://twitter.com/g_perales) or  [@unwrappedHQ](https://twitter.com/unwrappedHQ),
## Deploying to production

To deploy your website you just have to execute `npm run build` and upload the result in the `/dist` folder
to your server.

If you are going to use a git repo, we highly recommend to use [Netlify](https://www.netlify.com/) as it's free
and pretty easy to use.
# html-starter
