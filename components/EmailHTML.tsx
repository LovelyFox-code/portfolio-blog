
export const emailHTML = `
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
            margin: 5% 2% 4% 3%;
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
            <div id="logo"><img src="/images/homepage/mobile/image-homepage-hero@2x.jpg" alt=""></div>
            <div>
                <ul id="social">
                    <li>
                        <a href="#" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24"><path fill="#33323D" d="M12.5 0C5.594 0 0 5.51 0 12.305c0 5.437 3.581 10.048 8.547 11.674.625.116.854-.265.854-.592 0-.292-.01-1.066-.016-2.092-3.477.742-4.21-1.65-4.21-1.65-.569-1.42-1.39-1.8-1.39-1.8-1.133-.764.087-.748.087-.748 1.255.086 1.914 1.268 1.914 1.268 1.115 1.881 2.927 1.338 3.641 1.024.113-.797.434-1.338.792-1.646-2.776-.308-5.694-1.366-5.694-6.08 0-1.343.484-2.44 1.286-3.302-.14-.31-.562-1.562.11-3.256 0 0 1.047-.33 3.437 1.261 1-.273 2.063-.409 3.125-.415 1.063.006 2.125.142 3.125.415 2.375-1.591 3.422-1.261 3.422-1.261.672 1.694.25 2.945.125 3.256.797.861 1.281 1.959 1.281 3.302 0 4.727-2.921 5.767-5.703 6.07.438.369.844 1.123.844 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.22.707.86.584 5-1.615 8.579-6.23 8.579-11.658C25 5.509 19.403 0 12.5 0z"/></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#33323D" d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z"/></svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path fill="#33323D" d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"/></svg>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
        <div id="banner">
            <img src="/images/homepage/mobile/image-homepage-hero@2x.jpg" alt="">
        </div>
        <div class="one-col">
            <h1>Thanks for visiting my website</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eaque beatae repudiandae deleniti possimus nulla voluptatum ab repellendus aliquam aspernatur, modi numquam eveniet architecto atque ducimus temporibus quibusdam earum error!</p>
            
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ratione quae minus voluptates repellat, recusandae nemo quod. Facere labore voluptatem nihil? Iste eligendi inventore dolorem impedit dicta minima quaerat facilis.</p>
            <a href="https://github.com/LovelyFox-code" class="btn">Learn more</a>
            <hr />
            <footer>
                <p id="contact">
                    Beatiful <br />
                    Responsive <br />
                    Easy to use <br />
                    Everywere
                </p>
            </footer>
        </div>
    </div>
</body>
</html>
`