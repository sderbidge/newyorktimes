<template>
  <div class="home">
    <div class="main">
      <div class="header">
        <div class="header-inside">
          <div class="top-container">
            <div class="icons-container">
              <svg class="icon" viewBox="0 0 16 16">
                <rect x="1" y="3" fill="#333" width="14" height="2" />
                <rect x="1" y="7" fill="#333" width="14" height="2" />
                <rect x="1" y="11" fill="#333" width="14" height="2" />
              </svg>
              <svg class="icon" viewBox="0 0 16 16">
                <path
                  fill="#333"
                  d="M11.3,9.2C11.7,8.4,12,7.5,12,6.5C12,3.5,9.5,1,6.5,1S1,3.5,1,6.5S3.5,12,6.5,12c1,0,1.9-0.3,2.7-0.7l3.3,3.3c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L11.3,9.2zM6.5,10.3c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C10.3,8.6,8.6,10.3,6.5,10.3z"
                />
              </svg>
            </div>
            <div class="languages-container">
              <div class="english">
                <strong>ENGLISH</strong>
              </div>
              <div class="spanish">ESPAÑOL</div>
              <div class="chinese">中文</div>
            </div>
            <div class="top-buttons">
              <button class="subscribe-btn">subscribe now</button>
              <router-link to="/nyt-login">
                <button class="login-btn">log in</button>
              </router-link>
            </div>
          </div>
          <div class="middle-container">
            <div class="date">Wednesday, June 17th, 2020</div>
            <img src="../../images/New-York-Times-Logo.png" />
            <div class="today-paper">Today's Paper</div>
          </div>
          <div class="menu-container">
            <div class="menu">
              <span class="menu-item">World</span>
              <span class="menu-item">U.S.</span>
              <span class="menu-item">Politics</span>
              <span class="menu-item">N.Y</span>
              <span class="menu-item">Business</span>
              <span class="menu-item">Opinion</span>
              <span class="menu-item">Tech</span>
              <span class="menu-item">Science</span>
              <span class="menu-item">Health</span>
              <span class="menu-item">Sports</span>
              <span class="menu-item">Arts</span>
              <span class="menu-item">Books</span>
              <span class="menu-item">Style</span>
              <span class="menu-item">Food</span>
              <span class="menu-item">Travel</span>
              <span class="menu-item">Magazine</span>
              <span class="menu-item">T Magazine</span>
              <span class="menu-item">Real Estate</span>
              <span class="menu-item">Video</span>
            </div>
          </div>
        </div>
      </div>
      <div class="main-header-container">
        <div class="main-header">
          <div class="main-header-left">
            <div class="header-card">
              <img src="../../images/The-Morning.png" />
              <div class="header-card-text">
                <span>
                  <strong>The Morning</strong>
                </span>
                <span
                  class="header-card-desc"
                >Make sense of the news, every day, with David Leonhardt.</span>
              </div>
            </div>
            <div class="header-card">
              <img class="header-img-left-margin" src="../../images/The-Daily.png" />
              <div class="header-card-text">
                <span>
                  <strong>Listen to 'The Daily'</strong>
                </span>
                <span class="header-card-desc">Who will Joe Biden pick as his running mate?</span>
              </div>
            </div>
            <div class="header-card-last">
              <img class="header-img-left-margin" src="../../images/DealBook.jpg" />
              <div class="header-card-text">
                <span>
                  <strong>In the ‘DealBook’ Newsletter</strong>
                </span>
                <span class="header-card-desc">What should companies do on Juneteenth?</span>
              </div>
            </div>
          </div>
          <div class="main-header-right">
            <div class="stocks">
              <div class="stock-info">
                <span>S&amp;P 500</span>
                <span class="red-percentage">
                  -0.02%
                  <svg width="5px" height="9px" viewBox="0 0 5 9" class="rotate-arrow">
                    <title>Group</title>
                    <defs />
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Artboard">
                        <g id="Group">
                          <path d="M2.5,9 L2.5,3.373" id="Shape" stroke="#a61b1e" />
                          <polyline
                            fill="#a61b1e"
                            fill-rule="nonzero"
                            points="4.86293961 4.09179688 2.5 0 0.13706039 4.09179688"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
              <div class="stock-info stock-border">
                <span>Dow</span>
                <span class="red-percentage">
                  -0.18%
                  <svg width="5px" height="9px" viewBox="0 0 5 9" class="rotate-arrow">
                    <title>Group</title>
                    <defs />
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Artboard">
                        <g id="Group">
                          <path d="M2.5,9 L2.5,3.373" id="Shape" stroke="#a61b1e" />
                          <polyline
                            fill="#a61b1e"
                            fill-rule="nonzero"
                            points="4.86293961 4.09179688 2.5 0 0.13706039 4.09179688"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
              <div class="stock-info stock-border">
                <span>Nasdaq</span>
                <span class="green-percentage">
                  +0.21%
                  <svg width="5px" height="9px" viewBox="0 0 5 9" class>
                    <title>Group</title>
                    <defs />
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Artboard">
                        <g id="Group">
                          <path d="M2.5,9 L2.5,3.373" id="Shape" stroke="#3f893b" />
                          <polyline
                            id="Shape"
                            fill="#3f893b"
                            fill-rule="nonzero"
                            points="4.86293961 4.09179688 2.5 0 0.13706039 4.09179688"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div class="weather-container">
              <div class="weather">
                <div class="clouds-image">
                  <svg width="32" height="23" viewBox="0 0 32 33">
                    <title>Today's weather: 62°F with Partly sunny</title>
                    <g fill="none" fill-rule="evenodd">
                      <path
                        d="M19.001 10.401c0 4.949-4.051 9-9 9s-9-4.051-9-9 4.051-9 9-9 9 4.051 9 9"
                        fill="#F4D864"
                      />
                      <path
                        d="M19.001 10.401c0 4.949-4.051 9-9 9s-9-4.051-9-9 4.051-9 9-9 9 4.051 9 9z"
                        stroke="#F4D864"
                        stroke-width="2"
                      />
                      <path
                        d="M6.608 31.349c-2.893 0-5.246-2.328-5.246-5.189 0-2.863 2.353-5.193 5.246-5.193h1.033l.408-1.002c.723-3.771 4.066-6.51 7.951-6.51 3.881 0 7.223 2.738 7.945 6.51l.207 1.07 1.109-.059c3.033 0 5.377 2.328 5.377 5.184 0 2.861-2.353 5.189-5.248 5.189H6.608z"
                        fill="#fff"
                      />
                      <path
                        d="M16.001 14.704c3.281 0 6.107 2.309 6.717 5.494l.402 2.092 2.131-.064.09-.006.051-.004c2.203 0 3.996 1.768 3.996 3.941 0 2.174-1.793 3.941-3.996 3.941H6.606c-2.201 0-3.994-1.767-3.994-3.941s1.793-3.941 3.959-3.941l.109.008h.029l2.16.096.406-2.121c.613-3.186 3.439-5.495 6.726-5.495m0-2.5c-4.566 0-8.357 3.236-9.178 7.523-.072-.004-.142-.012-.217-.012-3.588 0-6.494 2.883-6.494 6.441 0 3.561 2.906 6.441 6.494 6.441h18.785c3.59 0 6.496-2.881 6.496-6.441 0-3.559-2.906-6.441-6.496-6.441-.072 0-.145.008-.217.012-.821-4.287-4.614-7.523-9.173-7.523"
                        fill="#ccc"
                      />
                    </g>
                  </svg>
                </div>
                <div class="degrees">
                  <span class="current-degree">
                    <strong>65°F</strong>
                  </span>
                  <div class="degree-bottom">
                    <span class="high-degree">71°</span>
                    <div class="low-degree">45°</div>
                  </div>
                </div>
              </div>
              <div class="city">Eagle Mountain, UT</div>
            </div>
          </div>
        </div>
        <div class="header-divide"></div>
      </div>
      <div class="main-content">
        <div class="main-column">
          <div class="section1">
            <div class="main-title">
              <h2>
                <span>Trump Can’t Immediately End DACA, Supreme Court Rules</span>
              </h2>
            </div>
            <div class="section1-middle">
              <div class="section1-middle-left">
                <div class="headline-container">
                  <div class="balanced-headline">
                    <span class="balanced-headline-text">
                      <strong>Blow to Trump, Who Vowed to End Program to Shield Young Immigrants</strong>
                    </span>
                  </div>
                </div>
                <ul class="story-list">
                  <li>The program allows about 700,000 people brought to the U.S. as children to apply for a temporary status that protects them from deportation.</li>
                  <li>Chief Justice John G. Roberts Jr. wrote the majority opinion, joined by the court’s four more liberal members.</li>
                </ul>
                <div class="date-and-comments-container">
                  <div class="date-and-comments-info">
                    <span>June 18</span>
                    <span class="num-of-comments">1208 comments</span>
                  </div>
                </div>
              </div>
              <div class="section1-middle-right">
                <img src="../../images/Daca.jpg" />
              </div>
            </div>
            <div class="section1-bottom">
              <div class="section1-bottom-left">
                <div class="section1-story1">
                  <h2
                    class="section1-story1-header"
                  >“It feels like I can finally breathe.” Thousands who were caught in legal limbo got a temporary win today.</h2>
                  <div class="section1-story1-date-container">
                    <span class="small-date">June 18</span>
                  </div>
                </div>
                <div class="section1-story2">
                  <div class="section1-story2-info-container">
                    <h2
                      class="section1-story2-header"
                    >What is DACA? And how did it end up in the Supreme Court?</h2>
                    <div class="section1-story1-date-container">
                      <span class="small-date">June 18</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="section1-bottom-right">
                <div class="img-desc-container">
                  <span
                    class="img-desc"
                  >Supporters of the DACA program celebrated Thursday in front of the Supreme Court.</span>
                  <span class="credit">Anna Moneymaker for The New York Times</span>
                </div>
              </div>
            </div>
          </div>
          <div class="section2">
            <h3 class="section-sub-title">Race in America</h3>
            <div class="race-stories">
              <div class="section2-large-story">
                <h2>
                  Facebook Removes
                  <br />Trump Ads Displaying
                  <br />Symbol Used by Nazis
                </h2>
                <p>Nazis used the red symbol to classify political prisoners. The Trump campaign said the triangle was associated with antifa, a claim experts rejected.</p>
                <div class="foreword-date-comments">
                  <span class="foreword red-font">Breaking</span>
                  <span class="month-date red-font">June 18</span>
                  <span class="num-of-comments">135 comments</span>
                </div>
              </div>
              <div class="section2-middle-story">
                <h2>How the Trump Campaign’s Plans for a Triumphant Rally Went Awry</h2>
                <p>President Trump’s Tulsa rally has become yet another flash point for a candidate who has repeatedly displayed insensitivity about race in America.</p>
                <div class="date-comments">
                  <span class="month-date">June 18</span>
                  <span class="num-of-comments">218 comments</span>
                </div>
              </div>
              <div class="section2-right-story">
                <h2>Atlanta Officer Who Shot Rayshard Brooks Surrenders</h2>
                <p>Garrett Rolfe, who was fired after the shooting and now faces criminal charges including felony murder, turned himself in. Here’s the latest.</p>
                <span class="foreword red-font">Live</span>
                <span class="month-date red-font">June 18</span>
              </div>
            </div>
          </div>
          <div class="section3">
            <h3 class="section-sub-title">Coronavirus</h3>
            <div class="section3-middle">
              <div class="section3-middle-left">
                <div class="headline-container2">
                  <div class="balanced-headline">
                    <span class="balanced-headline-text">
                      <strong>
                        With Cases Rising,
                        <br />Virus Is No
                        <br />Longer Defined by
                        <br />a Few Epicenters
                      </strong>
                    </span>
                  </div>
                </div>
                <ul class="story-list">
                  <li>It is notable for how widespread the coronavirus now is, with two of the highest daily tallies in new global cases reported this week.</li>
                  <li>Pockets of student-athletes who have tested positive underscore the difficulty college and professional leagues face in pursuing a fall season. Here’s the latest.</li>
                </ul>
                <div class="date-and-comments-container">
                  <div class="foreword-date-comments">
                    <span class="foreword red-font">Live</span>
                    <span class="month-date red-font">June 18</span>
                    <span class="num-of-comments">578 comments</span>
                  </div>
                </div>
              </div>
              <div class="section3-middle-right">
                <img src="../../images/coronavirus-woman.jpg" />
                <div class="section3-buttons">
                  <div class="section3-button photos-button">
                    <button>Photos</button>
                  </div>
                  <div class="section3-button world-cases-button">
                    <button>World Cases</button>
                  </div>
                  <div class="section3-button markets-button">
                    <button>Markets</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="section3-bottom">
              <div class="section3-story1">
                <h2
                  class="section3-story1-header"
                >Business updates: For the 13th straight week, more than a million people filed for unemployment benefits.</h2>
                <div class="section3-story1-date-container">
                  <div class="foreword-date-comments">
                    <span class="foreword red-font">Live</span>
                    <span class="month-date red-font">June 18</span>
                    <span class="num-of-comments">578 comments</span>
                  </div>
                </div>
              </div>
              <div class="section3-story2">
                <div class="section3-story2-info-container">
                  <h2
                    class="section3-story2-header"
                  >The Pandemic Isn’t Over. New Yorkers Are Acting as if It Were.</h2>
                  <p
                    class="section3-story2-paragraph"
                  >People who once ducked for cover at the sound of a cough are stretching their comfort levels and the rules, with a lot more social and a lot less distancing.</p>
                  <div class="section3-story1-date-container">
                    <span class="month-date">June 18</span>
                    <span class="num-of-comments">578 comments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="coronavirus-info">
            <div class="coronavirus-info-left">
              <div class="info-left-upper-row">
                <h3 class="location-title">United States</h3>
                <div class="on-date column-title">On June 17</div>
                <div class="fourteen-day column-title">14-day change</div>
                <div class="trend column-title">Trend</div>
              </div>
              <div class="info-left-middle-row">
                <span class="info-row-title new-cases">New cases</span>
                <h4 class="info-large-number red-number">25,606</h4>
                <h4 class="info-large-percentage light-red-number">+7%</h4>
                <img class="case-graph" src="../../images/case-graph.png" />
              </div>
              <div class="info-left-bottom-row">
                <span class="info-row-title new-cases">New deaths</span>
                <h4 class="info-large-number">764</h4>
                <h4 class="info-large-percentage light-gray-number">-41%</h4>
                <img class="case-graph" src="../../images/death-graph.png" />
              </div>
            </div>
            <div class="coronavirus-info-middle">
              <div class="cases-rising-info">
                <h3 class="cases-rising-title">
                  Cases
                  <span class="are-span">are</span>
                  <strong>rising</strong> in
                </h3>
                <div class="state-row">
                  <img class="state-img" src="../../images/wyoming-graph.png" />
                  <span class="state-underline">Wyo.</span>
                </div>
                <div class="state-row">
                  <img class="state-img" src="../../images/oregon-graph.png" />
                  <span class="state-underline">Ore.</span>
                </div>
                <div class="state-row">
                  <img class="state-img" src="../../images/oklahoma-graph.png" />
                  <span class="state-underline">Okla.</span>
                </div>
              </div>
              <div class="cases-falling-info">
                <h3 class="cases-falling-title">
                  Cases
                  <span class="are-span">are</span>
                  <strong>falling</strong> in
                </h3>
                <div class="state-row">
                  <img class="state-img" src="../../images/colorado-graph.png" />
                  <span class="state-underline">Colo.</span>
                </div>
                <div class="state-row">
                  <img class="state-img" src="../../images/massachusettes-graph.png" />
                  <span class="state-underline">Mass.</span>
                </div>
                <div class="state-row">
                  <img class="state-img" src="../../images/illinoise-graph.png" />
                  <span class="state-underline">Ill.</span>
                </div>
              </div>
            </div>
            <div class="coronavirus-info-right">
              <div class="us-cases">
                <h3 class="cases-title">U.S. cases »</h3>
                <img class="us-cases-img" src="../../images/us-cases.png" />
              </div>
              <div class="worldwide-cases">
                <h3 class="cases-title">
                  Worldwide
                  <br />cases »
                </h3>
                <img class="worldwide-cases-img" src="../../images/worldwide-cases.png" />
              </div>
            </div>
          </div>
          <div class="economy-container">
            <h3 class="section-sub-title">The Economy</h3>
            <div class="economy-stories-row">
              <div class="economy-left-story">
                <div class="balanced-headline">
                  <span class="balanced-headline-text">
                    <strong>
                      A Tidal Wave of Bankruptcies Is
                      <br />Coming
                    </strong>
                  </span>
                </div>
                <p
                  class="story-paragraph"
                >Experts foresee so many filings in the coming months that the courts could struggle to salvage the businesses that are worth saving.</p>
                <span class="small-date">June 18</span>
              </div>
              <div class="economy-right-stories-container">
                <div class="economy-right-stories">
                  <div class="economy-right-top">
                    <div class="image-and-caption">
                      <img src="../../images/banking.jpg" />
                      <span
                        aria-hidden="true"
                        class="caption-container"
                      >Clarice Middleton was wrongfully accused of fraud by bank employees while trying to cash a check at a Wells Fargo in Atlanta.</span>
                      <span class="small-credit">Matthew Odom for The New York Times</span>
                    </div>
                    <div class="economy-image-story-container">
                      <h2>‘Banking While Black’: How Cashing a Check Can Be a Minefield</h2>
                      <p>Black customers risk being racially profiled on everyday visits to bank branches, causing anxiety and fear — and sometimes even physical danger.</p>
                      <div class="date-and-comments-info2">
                        <span>June 18</span>
                        <span class="num-of-comments">121 comments</span>
                      </div>
                    </div>
                  </div>
                  <div class="economy-right-bottom">
                    <h2>Why the Sickest Workers May Be Among the First Back on the Job</h2>
                    <p>Since most people in the U.S. get health insurance through work, many with pre-existing conditions fear unemployment more than they fear coronavirus.</p>
                    <div class="date-and-comments-info3">
                      <span>June 18</span>
                      <span class="num-of-comments">28 comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="book-container">
            <h3 class="section-sub-title">bolton book</h3>
            <div class="book-stories">
              <div class="book-story-left">
                <div class="book-story-left-headline">
                  <span class="balanced-headline-text">
                    <strong>Five Takeaways From John Bolton’s Memoir</strong>
                  </span>
                </div>
                <p>“The Room Where It Happened” describes Mr. Bolton’s 17 turbulent months at President Trump’s side through crises and foreign policy challenges.</p>
                <div class="date-comments book-comments-margin">
                  <span class="month-date">June 18</span>
                  <span class="num-of-comments">911 comments</span>
                </div>
              </div>
              <div class="book-story-right">
                <div class="book-story-right-top">
                  <h2>As Trump Targets China Crackdown, Bolton Revelations Muddle the Message</h2>
                  <p>A new law aimed at punishing Chinese officials involved in mass internments of Uighurs and other minorities came as John Bolton accused President Trump of supporting Beijing’s crackdown.</p>
                  <div class="date-comments book-comments-margin">
                    <span class="month-date">June 18</span>
                    <span class="num-of-comments">44 comments</span>
                  </div>
                </div>
                <div class="book-story-right-bottom">
                  <h2>The Justice Department asked a judge to immediately halt publication of John Bolton’s memoir.</h2>
                  <div class="date-comments book-comments-margin">
                    <span class="month-date">June 18</span>
                    <span class="num-of-comments">151 comments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="misc-container">
            <h2 class="misc-header">
              <span>For many more ideas for</span>
              <br />what to do and read and watch, visit
              <strong>At Home.</strong>
            </h2>
            <div class="bottom-divider"></div>
            <div class="misc-middle">
              <p class="misc-middle-left">
                You don’t need fancy feeders to
                <strong>attract birds to your garden.</strong> The jeweler Irene Neuwirth teaches us how to make a
                <strong>paper flower necklace.</strong> And if you’re over banana bread, Melissa Clark has a
                <strong>savory olive and cheese loaf</strong> for you.
              </p>
              <img class="misc-middle-right" src="../../images/bread.jpg" />
            </div>
            <div class="bottom-divider"></div>
            <h2 class="misc-bottom-links">
              <span>Sign Up for the At Home Newsletter</span>
              <span class="explore-span">Explore Our New At Home Section</span>
            </h2>
          </div>
          <div class="great-read-container">
            <div class="great-read-left">
              <h3 class="great-read-sub-title">The Great Read</h3>
              <h2 class="great-read-headline-container">
                <span
                  class="great-read-headline"
                >Eric Andre Isn’t a Prankster, He’s a ‘Benevolent Attacker’</span>
              </h2>
              <div class="short-bottom-divider"></div>
              <p
                class="great-read-paragraph"
              >The comic and confrontational star of “The Eric Andre Show” has a new standup special, “Legalize Everything,” and a hidden-camera comedy film, “Bad Trip.”</p>
              <span class="small-date">June 18</span>
            </div>
            <div class="great-read-right">
              <img class="great-read-image" src="../../images/mask.jpg" />
              <span
                class="caption-container"
              >“We look for trouble,” Andre said. “It’s a career where you’re purposely trying to get a rise out of people.”</span>
              <span class="small-credit">Jake Michaels for The New York Times</span>
            </div>
          </div>
        </div>
        <div class="right-column">
          <div class="right-column-section1">
            <h3 class="opinion-header">Opinion</h3>
            <div class="top-2-opinions">
              <div class="top-opinion-1">
                <div class="top-opinion-1-author author">Robin D. G. Kelley</div>
                <h2 class="opinion-headline">What Kind of Society Values Property Over Black Lives?</h2>
                <p
                  class="opinion-desc"
                >The hackneyed emphasis on “Why loot?” obscures the question, which black people have asked for centuries.</p>
                <div class="top-opinion-1-date small-date">June 18</div>
              </div>
              <div class="top-opinion-2">
                <div class="top-opinion-2-left">
                  <div class="top-opinion-2-author author">Linden Crawford</div>
                  <h2 class="top-opinion-2-h2">Notes From One Year on Testosterone</h2>
                  <p
                    class="top-opinion-2-p"
                  >I wanted the vigor, power, and virility. But what would taking it make me?</p>
                  <span class="small-date">June 18</span>
                </div>
                <img class="top-opinion-2-right" src="../../images/Testosterone-Article-Image.png" />
              </div>
            </div>
            <div class="small-stories">
              <div class="small-stories-left">
                <div class="small-story">
                  <div class="small-story-header">
                    <div class="author">Tim Wu</div>
                    <img src="../../images/tim-wu-thumbnail.jpg" />
                  </div>
                  <h2 class="small-story-title">
                    How to Avoid a
                    <br />'Rich Man's Recovery'
                  </h2>
                </div>
                <div class="small-story">
                  <div class="story-author author">Darcy Schleifstein</div>
                  <h2 class="small-story-title">
                    The Unstoppable Class of
                    <br />2020
                  </h2>
                </div>
                <div class="small-story small-story-padding2">
                  <div class="small-story-header">
                    <div class="author">Linda Greenhouse</div>
                    <img src="../../images/linda-greenhouse-thumbnail.png" />
                  </div>
                  <h2 class="small-story-title">
                    What Does ‘Sex’
                    <br />Mean? The Supreme
                    <br />Court Answers
                  </h2>
                </div>
                <div class="small-story no-border">
                  <div class="small-story-header">
                    <div class="author">Gail Collins</div>
                    <img src="../../images/gail-collins-thumbnail.png" />
                  </div>
                  <h2 class="small-story-title">
                    Can Dems
                    <br />Dispatch Mitch?
                  </h2>
                </div>
              </div>
              <div class="story-seperator"></div>
              <div class="small-stories-right">
                <div class="small-story">
                  <div class="story-author author">Russell Moore</div>
                  <h2 class="small-story-title">
                    Just How Secular Should
                    <br />America Be?
                  </h2>
                </div>
                <div class="small-story">
                  <div class="small-story-header">
                    <div class="author">Nicholas Kristof</div>
                    <img src="../../images/nicholas-kristof-thumbnail.png" />
                  </div>
                  <h2 class="small-story-title">
                    When ANTIFA
                    <br />Hysteria Sweeps America
                  </h2>
                </div>
                <div class="small-story small-story-padding">
                  <div class="story-author author">Moustafa Bayoumi</div>
                  <h2 class="small-story-title">
                    Why Did Cup Foods Call
                    the Cops on George Floyd?
                  </h2>
                </div>
                <div class="small-story">
                  <div class="small-story-header">
                    <div class="author">Frank Bruni</div>
                    <img src="../../images/frank-bruni-thumbnail.png" />
                  </div>
                  <h2 class="small-story-title">
                    The Revenge of
                    <br />the Trump Tattletales
                  </h2>
                </div>
                <div class="smaller-story">
                  <h2 class="small-story-title">
                    Are You Paid Fairly for
                    <br />Your Work
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div class="right-column-section2">
            <div class="right-column-divider"></div>
            <div class="right-column-divider"></div>
            <div class="right-column-section2-sub">
              <h3>Editors' Picks</h3>
            </div>
            <img class="baseball-img" src="../../images/Baseball.jpg" />
            <section class="credit-container">
              <span class="credit">LM Otero/Associated Press</span>
            </section>
            <h2 class="sports-title">
              <span>
                Fans Want Sports.
                <br />Sports Want Fans. But
                <br />It’s Not That Simple.
              </span>
            </h2>
            <div class="small-divider"></div>
            <p
              class="baseball-desc"
            >Three months after most leagues shut down, there are only loose plans, good intentions and a nervous hope that it doesn’t go wrong.</p>
            <span class="foreword-side">Baseball</span>
            <span class="month-date">June 18</span>
            <div class="soft-divide"></div>
            <div class="side-story">
              <div class="side-story-content">
                <h2>So You Want to Learn About Juneteenth?</h2>
                <p>On June 19, 1865, enslaved African-Americans in Texas were told they were free. Today, people are marking the occasion with celebrations.</p>
                <span class="foreword-side">U.S</span>
                <span class="month-date">June 18</span>
              </div>
              <img class="juneteenth-img" src="../../images/Juneteenth.jpg" />
            </div>
            <div class="soft-divide"></div>
            <div class="side-story">
              <div class="side-story-content">
                <h2>Looking for a Brooklyn Fixer-Upper for the Right Price</h2>
                <p>After a couple of years in Seattle, a New York family returned to hunt for a conveniently situated house. Here’s where they wound up.</p>
                <span class="foreword-side">Real Estate</span>
                <span class="month-date">June 18</span>
              </div>
              <img class="realestate-img" src="../../images/Realestate.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-nav">
        <div class="logo-container">
          <img class="logo" src="../../images/New-York-Times-Logo.png" />
        </div>
        <div class="bottom-columns-container">
          <div class="bottom-column">
            <h3 class="bottom-column-title">news</h3>
            <ul class="column-list">
              <li>Home Page</li>
              <li>World</li>
              <li>U.S.</li>
              <li>Politics</li>
              <li>Election 2020</li>
              <li>New York</li>
              <li>Business</li>
              <li>Tech</li>
              <li>Science</li>
              <li>Sports</li>
              <li>Obituaries</li>
              <li>Today's Paper</li>
              <li>Corrections</li>
            </ul>
          </div>
          <div class="bottom-column">
            <h3 class="bottom-column-title">opinion</h3>
            <ul class="column-list">
              <li>Today's Opinion</li>
              <li>Op-Ed Columnists</li>
              <li>Editorials</li>
              <li>Op-Ed Contributors</li>
              <li>Letters</li>
              <li>Sunday Review</li>
              <li>Video: Opinion</li>
            </ul>
          </div>
          <div class="bottom-column">
            <h3 class="bottom-column-title">arts</h3>
            <ul class="column-list">
              <li>Today's Arts</li>
              <li>Art &amp; Design</li>
              <li>Books</li>
              <li>Dance</li>
              <li>Movies</li>
              <li>Music</li>
              <li>Pop Culture</li>
              <li>Television</li>
              <li>Theater</li>
              <li>Video: Arts</li>
            </ul>
          </div>
          <div class="bottom-column">
            <h3 class="bottom-column-title">living</h3>
            <ul class="column-list">
              <li>Automobiles</li>
              <li>Crossword</li>
              <li>Education</li>
              <li>Food</li>
              <li>Health</li>
              <li>Jobs</li>
              <li>Love</li>
              <li>Magazine</li>
              <li>Parenting</li>
              <li>Real Estate</li>
              <li>Recipes</li>
              <li>Style</li>
              <li>T Magazine</li>
              <li>Travel</li>
            </ul>
          </div>
          <div class="bottom-column">
            <h3 class="bottom-column-title">more</h3>
            <ul class="column-list">
              <li>Reader Center</li>
              <li>Wire Cutter</li>
              <li>Live Events</li>
              <li>The Learning Network</li>
              <li>Tools &amp; Services</li>
              <li>N.Y.C Events Guide</li>
              <li>Multimedia</li>
              <li>Photography</li>
              <li>Video</li>
              <li>Newsletters</li>
              <li>TimesMachine</li>
              <li>NYT Store</li>
              <li>Times Journey</li>
              <li>Manage My Account</li>
            </ul>
          </div>
          <div class="bottom-column subscribe-column">
            <h3 class="bottom-column-title">subscribe</h3>
            <ul class="column-list subscribe-list">
              <li class="li-icon-container">
                <svg class="li-icon" viewBox="0 0 14 13" fill="#000">
                  <path
                    d="M13.1,11.7H3.5V1.2h9.6V11.7zM13.1,0.4H3.5C3,0.4,2.6,0.8,2.6,1.2v2.2H0.9C0.4,3.4,0,3.8,0,4.3v5.2v1.5c0,0.8,0.8,1.5,1.8,1.5h1.7h0h7.4h2.2c0.5,0,0.9-0.4,0.9-0.9V1.2C14,0.8,13.6,0.4,13.1,0.4"
                  />
                  <polygon points="10.9,3 5.2,3 5.2,3.9 11.4,3.9 11.4,3" />
                  <rect x="5.2" y="4.7" width="6.1" height="0.9" />
                  <rect x="5.2" y="6.5" width="6.1" height="0.9" />
                </svg>
                <strong>Home Delivery</strong>
              </li>
              <li class="li-icon-container">
                <svg class="li-icon" viewBox="0 0 10 13">
                  <path
                    fill="#000"
                    d="M9.9,8c-0.4,1.1-1.2,1.9-2.3,2.4V8l1.3-1.2L7.6,5.7V4c1.2-0.1,2-1,2-2c0-1.4-1.3-1.9-2.1-1.9c-0.2,0-0.3,0-0.6,0.1v0.1c0.1,0,0.2,0,0.3,0c0.5,0,0.9,0.2,0.9,0.7c0,0.4-0.3,0.7-0.8,0.7C6,1.7,4.5,0.6,2.8,0.6c-1.5,0-2.5,1.1-2.5,2.2C0.3,4,1,4.3,1.6,4.6l0-0.1C1.4,4.4,1.3,4.1,1.3,3.8c0-0.5,0.5-0.9,1-0.9C3.7,2.9,6,4,7.4,4h0.1v1.7L6.2,6.8L7.5,8v2.4c-0.5,0.2-1.1,0.3-1.7,0.3c-2.2,0-3.6-1.3-3.6-3.5c0-0.5,0.1-1,0.2-1.5l1.1-0.5V10l2.2-1v-5L2.5,5.5c0.3-1,1-1.7,1.8-2l0,0C2.2,3.9,0.1,5.6,0.1,8c0,2.9,2.4,4.8,5.2,4.8C8.2,12.9,9.9,10.9,9.9,8L9.9,8z"
                  />
                </svg>
                <strong>Digital Subscriptions</strong>
              </li>
              <li class="li-icon-container">
                <svg class="li-icon" viewBox="0 0 13 13" fill="#000">
                  <polygon points="0,-93.6 0,-86.9 6.6,-93.6" />
                  <polygon points="0.9,-86 7.5,-86 7.5,-92.6" />
                  <polygon points="0,-98 0,-94.8 8.8,-94.8 8.8,-86 12,-86 12,-98" />
                  <path
                    d="M11.9-40c-0.4,1.1-1.2,1.9-2.3,2.4V-40l1.3-1.2l-1.3-1.2V-44c1.2-0.1,2-1,2-2c0-1.4-1.3-1.9-2.1-1.9c-0.2,0-0.3,0-0.6,0.1v0.1c0.1,0,0.2,0,0.3,0c0.5,0,0.9,0.2,0.9,0.7c0,0.4-0.3,0.7-0.8,0.7c-1.3,0-2.8-1.1-4.5-1.1c-1.5,0-2.5,1.1-2.5,2.2c0,1.1,0.6,1.5,1.3,1.7l0-0.1c-0.2-0.1-0.4-0.4-0.4-0.7c0-0.5,0.5-0.9,1-0.9C5.7-45.1,8-44,9.4-44h0.1v1.7l-1.3,1.1L9.5-40v2.4c-0.5,0.2-1.1,0.3-1.7,0.3c-2.2,0-3.6-1.3-3.6-3.5c0-0.5,0.1-1,0.2-1.5l1.1-0.5v4.9l2.2-1v-5l-3.3,1.5c0.3-1,1-1.7,1.8-2l0,0c-2.2,0.5-4.3,2.1-4.3,4.6c0,2.9,2.4,4.8,5.2,4.8C10.2-35.1,11.9-37.1,11.9-40L11.9-40z"
                  />
                  <path
                    d="M12.2-23.7c-0.2,0-0.4,0.2-0.4,0.4v0.4L0.4-19.1v2.3l3,1l-0.2,0.6c-0.3,0.8,0.1,1.8,0.9,2.1l1.7,0.7c0.2,0.1,0.4,0.1,0.6,0.1c0.6,0,1.3-0.4,1.5-1l0.4-0.9l3.5,1.2v0.4c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4v-10.7C12.6-23.5,12.4-23.7,12.2-23.7M7.1-13.6c-0.2,0.4-0.6,0.6-1,0.4l-1.7-0.7c-0.4-0.2-0.6-0.6-0.4-1l0.3-0.7l3.3,1.1L7.1-13.6z"
                  />
                  <path
                    d="M13.1-60.3H3.5v-10.5h9.6V-60.3zM13.1-71.6H3.5c-0.5,0-0.9,0.4-0.9,0.9v2.2H0.9c-0.5,0-0.9,0.4-0.9,0.9v5.2v1.5c0,0.8,0.8,1.5,1.8,1.5h1.7h0h7.4h2.2c0.5,0,0.9-0.4,0.9-0.9v-10.5C14-71.2,13.6-71.6,13.1-71.6"
                  />
                  <polygon points="10.9,-69 5.2,-69 5.2,-68.1 11.4,-68.1 11.4,-69" />
                  <rect x="5.2" y="-67.3" width="6.1" height="0.9" />
                  <rect x="5.2" y="-65.5" width="6.1" height="0.9" />
                  <path
                    d="M12,6.5H6.5V12H1V6.5h5.5V1H12V6.5zM12,0H1C0.4,0,0,0.5,0,1v11c0,0.6,0.4,1,1,1h11c0.5,0,1-0.4,1-1V1C13,0.5,12.5,0,12,0"
                  />
                </svg>
                <strong>Crossword</strong>
              </li>
              <li class="li-icon-container">
                <svg class="li-icon" viewBox="0 0 13 13" fill="#000">
                  <path
                    d="M12,2.9L9.6,5.2c-0.1,0.1-0.3,0.1-0.4,0C9.1,5.2,9.1,5,9.3,4.9l2.4-2.4c-0.2-0.2-0.3-0.3-0.5-0.5L8.7,4.3c-0.1,0.1-0.3,0.1-0.4,0C8.2,4.3,8.2,4.1,8.4,4l2.4-2.4c-0.3-0.3-0.5-0.5-0.5-0.5L7.6,3.4C7.1,4,6.8,5.1,7.1,5.8c-1.4,1-4.6,3.5-5.1,4c-0.8,0.8-0.4,1.8-0.3,1.9c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0.1,1.1,0.5,1.9-0.3c0.4-0.4,2.9-3.6,3.9-5C8.4,6.9,9.6,6.6,10.2,6l2.3-2.6C12.5,3.4,12.3,3.2,12,2.9z"
                  />
                  <path
                    d="M0.8,1.9l0.3-0.3c0.9-0.9,3.2,1.1,3.8,1.7s0.9,1.8,0.4,2.6c1.4,1.1,4.6,3.5,5,3.9c0.8,0.8,0.4,1.8,0.3,1.9c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0.1-1.1,0.5-1.9-0.3c-0.4-0.4-2.9-3.7-4-5.1C3.9,6.7,2.9,6.4,2.3,5.8S-0.2,2.9,0.8,1.9z"
                  />
                </svg>
                <strong>Cooking</strong>
              </li>
            </ul>
            <ul class="small-list">
              <li>Email Newsletters</li>
              <li>Corporate Subscriptions</li>
              <li>Education Rate</li>
            </ul>
            <ul class="small-list small-list-sizing">
              <li>Mobile Applications</li>
              <li>Replica Edition</li>
              <li>Español</li>
              <li>中文网</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer">
        <ul class="copyright-list">
          <li>©&nbsp;2020&nbsp;The New York Times Company</li>
        </ul>
        <ul class="footer-nav">
          <li>NYTCo</li>
          <li>Contact Us</li>
          <li>Work with us</li>
          <li>Advertise</li>
          <li>T Brand Studio</li>
          <li>Your Ad Choices</li>
          <li>Privacy</li>
          <li>Terms of Service</li>
          <li>Terms of Sale</li>
          <li>Site Map</li>
          <li>Help</li>
          <li>Subscriptions</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

.home {
  font-family: "Times New Roman", Times, serif;
  overflow-x: hidden;
}

.header {
  width: 100%;
  height: 132px;
  display: flex;
  justify-content: center;
  font-family: helvetica, arial, sans-serif;
}

.header-inside {
  width: 1200px;
  height: 132px;
}

.top-container {
  width: 1170px;
  height: 36px;
  padding: 4px 15px 2px 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.icons-container {
  width: 50px;
  height: 33px;
  display: flex;
  justify-content: space-between;
}

.icon {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.icon:hover {
  background-color: #f7f7f7;
}

.languages-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 110px;
}

.languages-container div {
  font-size: 10px;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.languages-container div:hover {
  background-color: #f7f7f7;
}

.top-buttons {
  width: 196px;
  height: 31px;
  display: flex;
  justify-content: space-between;
}

.subscribe-btn {
  width: 97px;
  height: 10px;
  padding: 11px 12px 8px 12px;
  border: 1px solid rgb(50, 104, 145);
  background-color: rgb(86, 123, 149);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 3px;
  cursor: pointer;
}

.login-btn {
  width: 40px;
  height: 10px;
  padding: 11px 12px 8px 12px;
  border: 1px solid rgb(50, 104, 145);
  background-color: rgb(86, 123, 149);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 3px;
  cursor: pointer;
}

.middle-container {
  width: 1200px;
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 12px;
}

.middle-container img {
  margin-left: -80px;
  margin-top: -50px;
  width: 450px;
  height: 70px;
  cursor: pointer;
}

.date,
.today-paper {
  margin-bottom: 15px;
  cursor: pointer;
}

.today-paper {
  margin-right: 15px;
}

.menu-container {
  width: 1080px;
  height: 33px;
  padding: 0 60px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: center;
}

.menu {
  width: 1080px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-item {
  font-size: 12px;
  flex-shrink: 0;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #f7f7f7;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: hidden;
}

.main-header-container {
  width: 1200px;
  height: 103px;
}

.main-header {
  width: 1200px;
  height: 82px;
  border-bottom: 1px double #121212;
}

.header-divide {
  width: 1200px;
  height: 2px;
  border-bottom: 1px double #121212;
}

.main-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.main-header-left {
  width: 909px;
  height: 71px;
  display: flex;
  justify-content: flex-start;
}

.header-card {
  width: 277px;
  height: 71px;
  padding-right: 15px;
  border-right: 1px solid #e2e2e2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

.header-card-last {
  width: 300px;
  height: 71px;
  padding-right: 15px;
  border-right: 1px solid #e2e2e2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.header-card-last img {
  width: 55px;
  height: 55px;
}

.header-card img {
  width: 55px;
  height: 55px;
}

.header-card-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10px;
  font-size: 12px;
}

.header-card-desc {
  color: #555;
}

.header-img-left-margin {
  margin-left: 15px;
}

.main-header-right {
  width: 290px;
  height: 71px;
  display: flex;
  justify-content: flex-start;
}

.stocks {
  width: 122px;
  height: 71px;
  padding: 0 15px;
  border-right: 1px solid #e2e2e2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.stock-info {
  width: 122px;
  height: 16px;
  font-size: 12px;
  padding-top: 3px;
  padding-bottom: 4px;
  display: flex;
  justify-content: space-between;
}

.stock-border {
  border-top: 1px solid rgb(226, 226, 226);
}

.red-percentage {
  width: 50px;
  color: rgb(166, 27, 30);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.rotate-arrow {
  transform: rotate(180deg);
}

.green-percentage {
  width: 50px;
  color: rgb(63, 137, 59);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.weather-container {
  width: 122px;
  height: 71px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.weather {
  display: flex;
  justify-content: center;
  align-items: center;
}

.current-degree {
  font-size: 14px;
}

.degree-bottom {
  width: 35px;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
}

.low-degree {
  color: gray;
}

.city {
  width: 122px;
  height: 14px;
  margin-top: 3px;
  font-size: 12px;
}

.main-content {
  width: inherit;
  height: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: max-content auto auto;
  grid-gap: 0;
}

.main-column {
  width: 784px;
  height: auto;
  padding-right: 14px;
  display: block;
  grid-row: span 2;
  border-right: 1px solid #ccc;
}

.section1 {
  width: 784px;
  height: 483px;
  margin-bottom: 18px;
}

.main-title {
  width: 784px;
  height: 30px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  font-size: 19px;
  cursor: pointer;
}

.section1-middle {
  display: flex;
  justify-content: flex-start;
}

.section3-middle {
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 14px;
  margin-bottom: 14px;
}

.section1-middle-left,
.section3-middle-left {
  width: 254px;
  height: 332px;
  padding-right: 15px;
}

.headline-container {
  width: 254px;
  height: 67px;
}

.headline-container2 {
  width: 270px;
  height: 90px;
}

.balanced-headline {
  width: 230px;
  height: 89px;
}

.balanced-headline-text {
  width: 142px;
  height: 67px;
  font-size: 20px;
  cursor: pointer;
}

.balanced-headline-text:hover {
  color: #666666;
}

.story-list {
  list-style-type: square;
}

.story-list li {
  margin-top: 15px;
  color: #333;
  font-size: 14px;
  cursor: pointer;
}

.date-and-comments-container {
  width: 254px;
  height: 17px;
  padding-top: 7px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.num-of-comments {
  text-decoration: underline;
  font-size: 12px;
  color: #999;
  cursor: pointer;
}

.date-and-comments-info {
  width: 128px;
  height: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #999;
}

.date-and-comments-info2 {
  width: 120px;
  height: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #999;
}

.date-and-comments-info3 {
  width: 110px;
  height: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #999;
}

.section1-middle-right {
  width: 499px;
  height: 332px;
  padding-left: 15px;
}

.section3-middle-right {
  width: 499px;
  height: auto;
  padding-left: 15px;
}

.section1-middle-right img,
.section3-middle-right img {
  width: 499px;
  height: 332px;
  cursor: pointer;
}

.section1-bottom {
  width: 784px;
  height: 105px;
  display: flex;
  justify-content: flex-start;
}

.section3-bottom {
  width: 784px;
  height: 95px;
  display: flex;
  justify-content: flex-start;
}

.section1-bottom-left {
  width: 580px;
  height: 76px;
  padding-top: 14px;
  padding-right: 15px;
  border-top: 1px solid #e2e2e2;
  margin-top: 14px;
  display: flex;
  justify-content: flex-start;
}

.section1-story1,
.section3-story1 {
  width: 254px;
  height: 76px;
  padding-right: 15px;
  cursor: pointer;
}

.section1-story1-header,
.section3-story1-header {
  font-size: 16px;
}

.section1-story1-header:hover,
.section3-story1-header:hover {
  color: #666666;
}

.section1-story1-date-container,
.section3-story1-date-container {
  width: 254px;
  height: 16px;
  padding-top: 7px;
}

.small-date {
  color: #999;
  font-size: 12px;
}

.section1-story2,
.section3-story2 {
  width: 310px;
  height: 76px;
  padding-left: 15px;
  border-left: 1px solid #e2e2e2;
  cursor: pointer;
}

.section1-story2-info-container {
  width: 295px;
  height: 76px;
  padding-left: 15px;
}

.section3-story2-info-container {
  width: 500px;
  height: 18px;
  margin-bottom: 30px;
}

.section1-story2-header {
  font-size: 16px;
}

.section3-story2-header {
  font-size: 16px;
  margin-bottom: 5px;
}

.section1-story2-header:hover,
.section1-story3-header:hover {
  color: #666666;
}

.section3-story2-paragraph {
  width: 500px;
  height: 36px;
  font-size: 14px;
  color: #555555;
}

.section1-bottom-right,
.section3-bottom-right {
  width: 188px;
  height: 105px;
}

.img-desc-container {
  width: 173px;
  height: 64px;
  margin-top: 11px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 12px;
  cursor: pointer;
}

.img-desc {
  font-size: 12px;
  color: #999;
}

.credit {
  width: 173px;
  height: 24px;
}

.section2 {
  width: 784px;
  height: 222px;
  padding-top: 18px;
  margin-bottom: 18px;
  border-top: 1px solid #121212;
}

.section-sub-title {
  font-size: 12px;
  width: 784px;
  height: 22px;
  margin-top: -12px;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
}

.race-stories {
  width: 784px;
  height: 210px;
  display: flex;
  justify-content: flex-start;
}

.section2-large-story {
  width: 376px;
  height: 210px;
  padding-right: 15px;
}

.section2-large-story h2 {
  font-size: 21px;
  margin-bottom: 10px;
  cursor: pointer;
}

.section2-large-story h2:hover {
  color: #666666;
}

.section2-large-story p {
  font-size: 14px;
  width: 376px;
  height: 55px;
  color: #333;
}

.foreword-date-comments {
  display: flex;
  justify-content: flex-start;
}

.foreword {
  margin-right: 9px;
}

.month-date {
  margin-right: 9px;
  font-size: 12px;
  color: #999;
}

.red-font {
  color: #d0021b;
  font-size: 12px;
  font-weight: 600;
}

.section2-middle-story {
  width: 173px;
  height: 210px;
  padding: 0 15px;
  border-left: 1px solid #e2e2e2;
}

.section2-middle-story h2 {
  font-size: 16px;
  width: 173px;
  height: 73px;
  margin-bottom: 10px;
  cursor: pointer;
}

.section2-middle-story h2:hover {
  color: #666666;
}

.section2-middle-story p {
  font-size: 14px;
  width: 173px;
  height: 110px;
}

.section2-right-story {
  width: 173px;
  height: 210px;
  padding-left: 15px;
  border-left: 1px solid #e2e2e2;
}

.section2-right-story h2 {
  font-size: 16px;
  width: 173px;
  height: 60px;
  cursor: pointer;
}

.section2-right-story h2:hover {
  color: #666666;
}

.section2-right-story p {
  font-size: 14px;
  width: 173px;
  height: 110px;
}

.section3 {
  width: 784px;
  height: 512px;
  padding-top: 18px;
  margin-bottom: 18px;
  border-top: 1px solid #121212;
}

.section3-buttons {
  width: 500px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
}

.section3-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bcbcbc;
}

.section3-button button {
  border: none;
  outline: none;
  width: 43px;
  height: 13px;
  padding: 9px 20px 7px 20px;
  font: 400 13.3333px Arial;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.world-cases-button button {
  width: 79px;
  height: 13px;
}

.photos-button {
  border-radius: 3px 0 0 3px;
}

.photos-button button {
  background-color: #fff;
}

.markets-button {
  border-radius: 0 3px 3px 0;
}

.coronavirus-info {
  width: 784px;
  height: 114px;
  padding-top: 18px;
  margin-bottom: 18px;
  border-top: 1px solid #121212;
  display: flex;
  justify-content: flex-start;
}

.coronavirus-info-left {
  width: 261px;
  height: 109px;
  padding-right: 18px;
  margin-right: 20px;
  border-right: 1px solid #e2e2e2;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.info-left-upper-row {
  display: flex;
  justify-content: flex-start;
}

.location-title {
  width: 90.4px;
  height: 37.6px;
  padding-bottom: 12px;
  font-weight: 600;
  font-size: 13px;
  text-decoration: underline;
  word-wrap: none;
}

.column-title {
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
}

.on-date {
  width: 71.2px;
  height: 37.6px;
  padding-right: 10px;
  padding-bottom: 12px;
  text-align: right;
}

.fourteen-day {
  width: 51.6px;
  height: 37.6px;
  padding-right: 10px;
  padding-bottom: 12px;
  text-align: right;
}

.trend {
  width: 34px;
  height: 37.6px;
  padding-left: 10px;
  padding-bottom: 12px;
}

.info-left-middle-row {
  display: flex;
  justify-content: flex-start;
  margin-top: -8px;
}

.info-row-title {
  font-size: 16px;
}

.new-cases {
  width: 90px;
  height: 20px;
}

.info-large-number {
  font-size: 20px;
  font-weight: 500;
  width: 61px;
  height: 20px;
  padding-right: 10px;
  text-align: right;
}

.info-large-percentage {
  font-size: 20px;
  font-weight: 500;
  width: 51px;
  height: 20px;
  padding-right: 10px;
  text-align: right;
}

.red-number {
  color: #cc0000;
}

.light-red-number {
  color: #e06565;
}

.light-gray-number {
  color: #656565;
}

.case-graph {
  width: 40px;
  height: 20px;
  margin-right: -10px;
}

.info-left-bottom-row {
  margin-top: 8px;
  display: flex;
  justify-content: flex-start;
}

.coronavirus-info-middle {
  width: 219px;
  height: 109px;
  padding-right: 17px;
  margin-right: 19px;
  border-right: 1px solid #e2e2e2;
  display: flex;
  justify-content: flex-start;
  font-family: Arial, Helvetica, sans-serif;
}

.cases-rising-info {
  width: 109px;
  height: 109px;
}

.cases-falling-info {
  width: 109px;
  height: 109px;
  margin-left: 11px;
}

.cases-rising-title,
.cases-falling-title {
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 12px;
}

.are-span {
  margin-right: 5px;
}

.state-row {
  display: flex;
  justify-content: flex-start;
  width: 109px;
  height: 13px;
  margin-bottom: 10px;
}

.state-img {
  width: 40px;
  height: 20px;
  margin-top: -8px;
  margin-right: 5px;
}

.state-underline {
  text-decoration: underline;
  font-size: 13px;
  cursor: pointer;
  width: 66px;
  height: 12px;
  margin-bottom: 1px;
}

.coronavirus-info-right {
  display: flex;
  justify-content: flex-start;
  font-family: Arial, Helvetica, sans-serif;
}

.us-cases {
  width: 109px;
  height: 109px;
  margin-right: 8px;
  cursor: pointer;
}

.cases-title {
  text-decoration: underline;
  font-size: 13px;
}

.us-cases-img {
  width: 109px;
  height: 73px;
}

.worldwide-cases {
  width: 109px;
  height: 109px;
  cursor: pointer;
}

.worldwide-cases-img {
  width: 118px;
  height: 79px;
}

.economy-container {
  width: 784px;
  height: 375px;
  padding-top: 18px;
  margin-bottom: 18px;
  border-top: 1px solid #121212;
}

.economy-stories-row {
  display: flex;
  justify-content: flex-start;
}

.economy-left-story {
  width: 254px;
  height: 363px;
  padding-right: 15px;
}

.story-paragraph {
  width: 254px;
  height: 73px;
  color: #555;
  font-size: 15px;
  margin-top: -8px;
}

.economy-right-stories-container {
  width: 513px;
  height: 363px;
  padding-left: 15px;
  border-left: 1px solid #e2e2e2;
}

.economy-right-top {
  width: 498px;
  height: 252px;
  padding-bottom: 14px;
  margin-bottom: 14px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: flex-start;
}

.image-and-caption {
  width: 310px;
  height: 252px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
}

.image-and-caption img {
  width: 310px;
  height: 210px;
}

.small-credit {
  color: #ccc;
  font-size: 10px;
}

.caption-container {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 325px;
  height: 40px;
  font-size: 11.5px;
  color: #999;
}

.economy-image-story-container {
  width: 172px;
  height: 252px;
  padding-left: 15px;
}

.economy-image-story-container h2 {
  font-size: 16px;
  cursor: pointer;
}

.economy-image-story-container h2:hover {
  color: #666666;
}

.economy-image-story-container p {
  width: 173px;
  height: 110px;
  color: #555;
  font-size: 14px;
  margin-top: 5px;
  cursor: pointer;
}

.economy-right-bottom {
  width: 498px;
  height: 82px;
}

.economy-right-bottom h2 {
  font-size: 16px;
  cursor: pointer;
}

.economy-right-bottom h2:hover {
  color: #666666;
}

.economy-right-bottom p {
  color: #555;
  font-size: 14.5px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.book-container {
  width: 784px;
  height: 218px;
  padding-top: 18px;
  margin-bottom: 18px;
  border-top: 1px solid #121212;
}

.book-stories {
  width: 784px;
  height: 218px;
  display: flex;
  justify-content: flex-start;
}

.book-story-left {
  width: 376px;
  height: 206px;
  padding-right: 15px;
}

.book-story-left-headline {
  width: 230px;
  height: auto;
  margin-bottom: 10px;
}

.book-story-left p {
  font-size: 14px;
  color: #555;
}

.book-comments-margin {
  margin-top: 5px;
}

.book-story-right {
  width: 376px;
  height: 206px;
  padding-left: 15px;
  border-left: 1px solid #e2e2e2;
}

.book-story-right-top {
  width: 376px;
  height: 118px;
  padding-bottom: 14px;
  margin-bottom: 14px;
  border-bottom: 1px solid #e2e2e2;
}

.book-story-right-top h2,
.book-story-right-bottom h2 {
  font-size: 16px;
  margin-bottom: 5px;
}

.book-story-right-top p {
  font-size: 14px;
  color: #555;
}

.misc-container {
  width: 784px;
  height: 393px;
  padding-top: 18px;
  margin-bottom: 18px;
  border-top: 1px solid #121212;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.misc-header {
  width: 784px;
  height: 60px;
  text-align: center;
  font-weight: normal;
  font-size: 21px;
}

.bottom-divider {
  width: 100px;
  margin-top: 10px;
}

.misc-middle {
  width: 784px;
  height: 271px;
  display: flex;
  justify-content: space-between;
  margin-top: 11px;
}

.misc-middle-left {
  width: 440px;
  height: 256px;
  font-weight: normal;
  font-size: 30px;
}

.misc-middle-right {
  width: 311px;
  height: 181px;
}

.misc-bottom-links {
  margin-top: 15px;
  width: 784px;
  height: 34px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  display: flex;
  justify-content: center;
}

.explore-span {
  padding-left: 30px;
}

.great-read-container {
  width: 784px;
  height: 290px;
  padding-top: 18px;
  border-top: 1px solid #121212;
  display: flex;
  justify-content: flex-start;
}

.great-read-left {
  width: 377px;
  height: 283px;
  padding-right: 15px;
}

.great-read-sub-title {
  font-size: 11px;
  width: 377px;
  height: 9px;
  margin-bottom: 12px;
  text-transform: uppercase;
  font-family: "Times New Roman", Times, serif;
}

.great-read-headline-container {
  width: 255px;
  height: 91px;
  padding-bottom: 20px;
  margin-top: -3px;
  margin-bottom: 5px;
}

.great-read-headline {
  width: 255px;
  height: 91px;
  font-size: 28px;
  font-weight: normal;
  cursor: pointer;
}

.great-read-headline:hover {
  color: #666666;
}

.great-read-paragraph {
  font-size: 14.5px;
  color: #555;
  margin-bottom: 5px;
}

.great-read-right {
  width: 377px;
  height: 283px;
  padding-left: 15px;
}

.great-read-image {
  width: 377px;
  height: 251px;
}

.short-bottom-divider {
  width: 50px;
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 18px;
}

.right-column {
  width: 385px;
  height: auto;
}

.right-column-section1 {
  width: 385px;
  height: 827px;
  padding-left: 15px;
}

.opinion-header {
  font-weight: 400;
  font-size: 20px;
}

.top-2-opinions {
  width: 385px;
  height: 345px;
}

.top-opinion-1 {
  width: 385px;
  height: 123px;
  padding-bottom: 14px;
  border-bottom: 1px solid #b3b3b3;
}

.author {
  font-size: 16px;
  color: #a19d9d;
}

.top-opinion-1-author {
  width: 385px;
  height: 18px;
  margin-top: 3px;
}

.opinion-headline {
  width: 385px;
  height: 36px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 16px;
  cursor: pointer;
}

.opinion-headline:hover {
  color: #666666;
}

.opinion-desc {
  width: 385px;
  height: 36px;
  font-size: 14px;
  color: #555;
}

.top-opinion-1-date {
  width: 385px;
  height: 16px;
  padding-top: 7px;
}

.top-opinion-2 {
  width: 385px;
  height: 177px;
  padding: 14px 0;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  justify-content: space-between;
}

.top-opinion-2-left {
  width: 192px;
  height: 177px;
}

.top-opinion-2-author {
  margin-bottom: 9px;
}

.top-opinion-2-h2 {
  font-size: 16px;
  margin-bottom: 6px;
  cursor: pointer;
}

.top-opinion-2-h2:hover {
  color: #666666;
}

.top-opinion-2-p {
  font-size: 14px;
  color: #666;
  line-height: 20px;
}

.top-opinion-2-right {
  width: 177px;
  height: 177px;
}

.small-stories {
  display: flex;
  justify-content: center;
}

.story-seperator {
  width: 0.5px;
  height: 410px;
  margin: 0 10px;
  margin-top: 10px;
  background-color: #e2e2e2;
}

.small-story {
  width: 178px;
  height: auto;
  padding: 14px 0;
  border-bottom: 1px solid #e2e2e2;
}

.small-story-padding {
  padding-bottom: 30px;
}

.small-story-padding2 {
  padding-bottom: 24px;
}

.small-story-header {
  display: flex;
  justify-content: space-between;
}

.story-author {
  margin-bottom: 15px;
}

.small-story-header img {
  width: 34px;
  height: 34px;
}

.small-story-title {
  font-size: 16px;
  width: 178px;
  height: 36px;
  margin-top: -10px;
  cursor: pointer;
}

.smaller-story {
  width: 178px;
  height: 33px;
  padding: 18px 0;
}

.no-border {
  border: none;
}

.right-column-section2 {
  width: 385px;
  height: 2032px;
  padding-left: 15px;
}

.right-column-divider {
  width: 385px;
  height: 1px;
  background-color: black;
  margin-bottom: 3px;
}

.right-column-section2-sub {
  width: 385px;
  height: 24px;
  padding-top: 2px;
  padding-bottom: 9px;
}

.right-column-section2-sub h3 {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
}

.baseball-img {
  width: 385px;
  height: 256px;
  cursor: pointer;
}

.credit-container {
  width: 385px;
  height: 12px;
  text-align: right;
  font-size: 10px;
  cursor: pointer;
}

.sports-title {
  width: 385px;
  height: 91px;
  padding-bottom: 20px;
  margin-bottom: 18px;
}

.sports-title span {
  width: 256px;
  height: 91px;
  font-size: 28px;
  font-weight: 500;
  cursor: pointer;
}

.sports-title span:hover {
  color: #666666;
}

.small-divider {
  background-color: #e2e2e2;
  width: 60px;
  height: 1px;
  margin-top: -15px;
  margin-bottom: 20px;
}

.baseball-desc {
  font-size: 14px;
  color: #333;
  cursor: pointer;
  margin-bottom: 10px;
}

.foreword-side {
  font-size: 12px;
  color: #999;
  margin-right: 12px;
}

.soft-divide {
  width: 385px;
  height: 0;
  border-bottom: 1px solid #e2e2e2;
  margin-top: 5px;
  margin-bottom: 15px;
}

.side-story {
  width: 385px;
  height: 177px;
  padding: 0 15px 15px 0;
  display: flex;
  justify-content: space-between;
}

.side-story-content {
  width: 177px;
  height: 177px;
  padding-right: 15px;
}

.side-story-content h2 {
  font-size: 16px;
  margin-bottom: 5px;
}

.side-story-content p {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.juneteenth-img,
.realestate-img {
  width: 177px;
  height: 177px;
}

.bottom-nav {
  margin-top: 60px;
  width: 1200px;
  height: 405px;
  border-top: 2px solid #e2e2e2;
}

.logo-container {
  width: 1200px;
  height: 44px;
  margin-top: 10px;
}

.logo {
  width: 184px;
  height: 28px;
}

.bottom-columns-container {
  display: flex;
  justify-content: flex-start;
}

.bottom-column {
  width: 197px;
  height: 347px;
}

.bottom-column-title {
  width: 150px;
  height: 25px;
  font-size: 13px;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
}

.subscribe-column {
  padding-left: 15px;
  border-left: 1px solid rgb(226, 226, 226);
}

.column-list {
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
}

.column-list li {
  font-size: 14px;
  margin-bottom: 6px;
  cursor: pointer;
}

.column-list li:hover {
  text-decoration: underline;
}

.subscribe-list li {
  margin-bottom: 15px;
}

.li-icon-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
}

.li-icon {
  width: 13px;
  height: 13px;
  margin-right: 7px;
}

.small-list {
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
}

.small-list li {
  font-size: 11px;
  margin-bottom: 10px;
  cursor: pointer;
}

.small-list li:hover {
  text-decoration: underline;
}

.small-list-sizing {
  padding-top: 10px;
  margin-top: 2px;
  border-top: 1px solid rgb(226, 226, 226);
}

.footer {
  width: 1200px;
  height: 55px;
  color: #333;
  padding-top: 9px;
  border-top: 1px solid #ebebeb;
  display: flex;
  justify-content: center;
}

.copyright-list {
  display: inline-block;
  list-style: none;
  font-size: 11px;
}

.copyright-list li {
  cursor: pointer;
}

.copyright-list li:hover {
  text-decoration: underline;
}

.footer-nav {
  width: 869px;
  height: 20px;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  font-size: 11px;
}

.footer-nav li {
  padding: 0 10px;
}

.footer-nav li:hover {
  text-decoration: underline;
}
</style>