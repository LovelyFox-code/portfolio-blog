
export const emailHTML = (name: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
   *{
            margin: 0;
            padding: 0;
            border: 0;
        }
        body{
            background: #f0f6fb;
            font-size: 18px;
            max-width: 800px;
            margin: 0 auto;
            padding: 3%;
            max-width: 1000px
        }
        img{
            max-width: 100%;
            width: 100%;
        }
        header{
            width: 98%;
        }
        #logo{
            max-width: 120px;
            margin: 0% 0 3% 3%;
            float: left;
        }
        #wrapper{
            background:#fafafa;
        }
        #social{
            float: right;
            margin: 5% 40% 4% 44%;
            list-style-type: none;
            display: inline-flex;
        }
        #social > li {
            display: inline;
            margin: 6%;
        }
        #social > li > a > img{
            max-width: 30px;
        }
        h1,
        p{
            margin: 3%;
        }
        .btn{
            float: right;
            margin: 0 2% 3% 0;
            background: #b6b6b6;;
            color:white;
            text-decoration: none;
            font-weight: 800;
            padding: 8px 12px;
            border-radius: 8px;
            letter-spacing: 1px;
        }
        hr{
            height: 1px;
            background-color: #adbec6;
            clear: both;
            width: 96%;
            margin: auto;
        }
        #contact{
            text-align: center;
            padding-bottom: 3%;
            line-height: 16px;
            font-size: 12px;
            color: #b6b6b6;
        }
    </style>
</head>
<body>
    <div id="wrapper">
        <header>

        </header>

        <div class="one-col">
            <h1>Thanks for visiting my website ${name} </h1>
            <div id="banner">
            <img src="https://images.ctfassets.net/of7l7vtgqjoa/29VmoJudj3n5HGiV7lasG3/92673a75bf8a5b7e36413e1d1a5b8886/avel-chuklanov-DUmFLtMeAbQ-unsplash.jpg" alt="">
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque beatae repudiandae deleniti possimus nulla voluptatum ab repellendus aliquam aspernatur, modi numquam eveniet architecto atque ducimus temporibus quibusdam earum error!</p>
            
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ratione quae minus voluptates repellat, recusandae nemo quod. Facere labore voluptatem nihil? Iste eligendi inventore dolorem impedit dicta minima quaerat facilis.</p>
            <a href="https://github.com/LovelyFox-code" class="btn">Learn more</a>
            <hr />
            <footer>
            <div>
            <ul id="social">
                <li>
                    <a href="https://github.com/LovelyFox-code" target="_blank">
                    <img src="https://images.ctfassets.net/of7l7vtgqjoa/7mcP2Pg2TFU8Q9QZ9oVIbm/3d52555f8d69b015b984d393d95c222b/github.png"/>
                    </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/in/alina-dakhno/" target="_blank">
                <img src="https://images.ctfassets.net/of7l7vtgqjoa/6tJpkTtuRI0qifM6dbcgxo/d837e20ba941b0d181f80f9934d8e4a1/linkedin.png" />
                </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/alina_dakhno/" target="_blank">
                    <img src="https://images.ctfassets.net/of7l7vtgqjoa/41QtsmYP5mdI74bfMHsC5N/c82f8edef7bf6392df1b0f45985832e1/instagram.png"/>
                    </a>
                </li>

            </ul>
        </div>

            </footer>
        </div>
    </div>
</body>
</html>
`