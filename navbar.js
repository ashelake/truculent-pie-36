function nav() {
  return `<div id="navbar">
    <div id="sidemenu_brandlogo">
      <div onclick="showsidemenu()" id="sidemenu">
        <span class="fas fa-bars"></span>
      </div>
      <div class="brandlogo">
      <a href="index.html"><img class="logo" src="./logo.png" alt="" /></a>
      </div>
    </div>
    <div id="search_cart">
      <div>
        <input type="text" name="" id="searchonnav" placeholder="SEARCH" />
      </div>
      <h2 id="userNameshow"><a href="login.html">LOG IN</a></h2>
      <h2><a href="mainhelp.html">HELP</a></h2>
      <div id="cartimage">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/002/205/906/small/shopping-bag-icon-free-vector.jpg"
          alt=""
        />
        <p id="cartcount">0</p>
      </div>
    </div>
  </div>
  <!--.............................. navbar End ..............................-->
  <!--.............................. sidebar start ..............................-->

  <div id="sidebar">
    <div id="close_logo">
      <div id="close_btn" onclick="closesidemenu()">+</div>
      <div class="brandlogo">
        <img class="logo" src="./logo.png" alt="" />
      </div>
    </div>
    <div id="head_details">
      <div id="headDetails">
        <ul>
          <li onclick="womensidebar()">WOMEN</li>
          <li onclick="mensidebar()">MEN</li>
          <li onclick="kidsidebar()">KIDS</li>
        </ul>
      </div>
      <div id="sidemenudata">
        <div id="sidemenudata-women">
          <ul>
            <li><a href="women_acc.html">NEW</a></li>
            <li><a href="women_jacket.html">BASICS</a></li>
            <li><a href="women_jacket.html">DRESSES | JUMPSUITS</a></li>
            <li><a href="women_acc.html">SHIRTS</a></li>
            <li><a href="women_acc.html">TROUSERS</a></li>
            <li><a href="women_jacket.html">TOPS | CORSETS</a></li>
            <li><a href="women_acc.html">JEANS</a></li>
            <li>T-SHIRTS</li>
            <li>BODYSUITS</li>
            <li>BLAZERS</li>
            <li><a href="women_jacket.html">JACKETS</a></li>
            <li>KNITWEAR</li>
            <li>SKIRTS</li>
            <li>SHORTS | SKORTS</li>
            <li>SUITS</li>
            <li>CO-ORD SETS</li>
            <li>SHOES</li>
            <li>BAGS</li>
            <li>SWIMWEAR</li>
            <li><a href="women_acc.html">ACCESSORIES</a></li>
            <li>PERFUMES</li>
            <li>SALE</li>
          </ul>
        </div>
        <div id="sidemenudata-men">
          <ul>
            <li><a href="men_shirt.html">NEW</a></li>

            <li><a href="men_shoes.html">ZARA ATHLETICS</a></li>
            <li><a href="men_shirt.html">BASICS</a></li>
            <li><a href="men_shirt.html">SHIRTS</a></li>
            <li><a href="men_shoes.html">TROUSERS</a></li>
            <li>TRENDS</li>
            <li>JEANS</li>
            <li>T-SHIRTS</li>
            <li>POLO SHIRTS</li>
            <li>BLAZERS</li>
            <li>JACKETS</li>
            <!-- <li>KNITWEAR</li> -->
            <li>SKIRTS</li>
            <li>SHORTS | SKORTS</li>
            <li>SUITS</li>
            <!-- <li>CO-ORD SETS</li> -->
            <li>SHOES</li>
            <!-- <li>BAGS</li> -->
            <li>SWIMWEAR</li>
            <li>ACCESSORIES</li>
            <!-- <li>PERFUMES</li> -->
            <li>SALE</li>
          </ul>
        </div>
        <div id="sidemenudata-kid">
          <ul>
            <li>GIRL | 6-14 YEARS</li>
            <li>BOY | 6-14 YEAR</li>
            <li>BABY GIRL | 6 MONTHS-5 YEARS</li>
            <li>BABY BOY | 6 MONTHS - 5 YEARS</li>
            <li>ACCESSORIES</li>
            <li>SALE</li>
          </ul>
        </div>
      </div>
    </div>
  </div>`;
}
export default nav;
