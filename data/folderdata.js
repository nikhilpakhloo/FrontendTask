import { Content } from "next/font/google";

const explorer = {
    id:"1",
    name: "root",
    isFolder: true,
    items: [
      {
        id:"2",
        name: "public",
        isFolder: true,
        items: [
          {
            id:"3",
            name: "public nested 1",
            isFolder: true,
            items: [
              {
                id:"4",
                name: "index.html",
                isFolder: false,
                items: [],
                content:`<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Dummy HTML File</title>
                  <link rel="stylesheet" href="styles.css">
                </head>
                <body class="bg-gray-900 text-white font-sans">
                
                  <header class="bg-gray-800 p-4">
                    <h1 class="text-2xl">Dummy HTML File</h1>
                  </header>
                
                  <main class="container mx-auto mt-6">
                    <section class="flex items-center justify-center">
                      <div class="max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
                        <h2 class="text-xl font-semibold mb-4">Welcome to My Dummy HTML Page!</h2>
                        <p class="text-gray-400">This is just a demonstration of a simple HTML file.</p>
                        <p class="text-gray-400">You can customize this further with your content.</p>
                      </div>
                    </section>
                  </main>
                
                  <footer class="bg-gray-800 p-4 mt-6 text-center">
                    <p class="text-gray-400">&copy; 2024 Dummy HTML Company. All rights reserved.</p>
                  </footer>
                
                </body>
                </html>
                `

              },
              {
                id:"5",
                name: "hello.html",
                isFolder: false,
                items: [],
                content:"NIKHIL PAKHLOO IS A GREAT SUPPORTER OF Nazia"
              }
            ]
          },
          {
            id:"6",
            name: "public_nested_file",
            isFolder: false,
            items: [],
            content:""
          }
        ]
      },
      {
        id:"7",
        name: "src",
        isFolder: true,
        items: [
          {
            id:"8",
            name: "App.js",
            isFolder: false,
            items: [],
            content:""
          },
          {
            id:"9",
            name: "Index.js",
            isFolder: false,
            items: [],
            content:""
          },
          {
            id:"10",
            name: "styles.css",
            isFolder: false,
            items: [],
            content:""
          }
        ]
      },
      {
        id:"11",
        name: "package.json",
        isFolder: false,
        items: [],
        content:""
      }
    ]
  };
  
  export default explorer;